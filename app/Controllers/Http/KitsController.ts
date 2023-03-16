import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Kit from 'App/Models/Kit'
import KitFile from 'App/Models/KitFile'
import Product from 'App/Models/Product'
import cloudinary from 'App/utils/cloudinary'
import { formatPriceToCreate } from 'App/utils/formatPriceToCreate'
import CreateKitValidator from 'App/Validators/Kit/CreateKitValidator'

export default class KitsController {
  public async index({ session, response, view }: HttpContextContract) {
    try {
      const kits = await Kit.query().preload('products').preload('file')
      return view.render('kits/index', { kits: kits.map((kit) => kit.toJSON()) })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao listar kits')
      return response.redirect().back()
    }
  }

  public async create({ response, session, view }: HttpContextContract) {
    try {
      const products = await Product.all()
      return view.render('kits/create', { products })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao listar produtos')
      return response.redirect().back()
    }
  }

  public async store({ request, response, session }: HttpContextContract) {
    const data = await request.validate(CreateKitValidator)
    try {
      const result = await cloudinary.uploader.upload(data.image.tmpPath, { folder: 'kits' })
      const kit = await Kit.create({ name: data.name, price: formatPriceToCreate(data.price) })
      await KitFile.create({
        url: result.secure_url,
        kitId: kit.id,
        publicId: result.public_id,
      })

      await kit.related('products').attach(data.productIds)

      session.flash('success', 'Kit criado com sucesso')
      return response.redirect().toRoute('KitsController.index')
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao listar produtos')
      return response.redirect().back()
    }
  }

  public async edit({ request, response, session, view }: HttpContextContract) {
    const id = request.param('id')
    const products = await Product.all()
    if (!products) {
      session.flash('error', 'Erro ao listar produtos')
      return response.redirect().back()
    }
    try {
      const kit = await Kit.query()
        .where('id', id)
        .preload('products')
        .preload('file')
        .firstOrFail()

      return view.render('kits/edit', { kit: kit.toJSON(), products })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Kit não encontrado.')
      return response.redirect().back()
    }
  }

  public async update({ request, response, session }: HttpContextContract) {
    const id = request.param('id')
    const data = request.body()
    const image = request.file('image')

    const kit = await Kit.query().where('id', id).preload('file').first()
    if (!kit) {
      session.flash('error', 'Kit não encontrado.')
      return response.redirect().toRoute('KitsController.index')
    }
    try {
      const file = await KitFile.findByOrFail('kitId', kit.id)
      if (image) {
        await cloudinary.uploader.destroy(kit.file.publicId)
        const result = await cloudinary.uploader.upload(image.tmpPath, {
          folder: 'kits',
        })

        await file.merge({ publicId: result.public_id, url: result.secure_url }).save()
      }

      await kit.merge({ name: data.name, price: formatPriceToCreate(data.price) }).save()
      await kit.related('products').sync(data.productIds)
      session.flash('success', 'Kit editado com sucesso.')
      return response.redirect().toRoute('KitsController.index')
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao editar ')
      return response.redirect().back()
    }
  }

  public async destroy({ view }: HttpContextContract) {
    return view.render('kits/index')
  }
}

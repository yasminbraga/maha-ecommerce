import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import File from 'App/Models/File'
import Product from 'App/Models/Product'
import ProductValidator from 'App/Validators/ProductValidator'
import { formatPriceToCreate } from 'App/utils/formatPriceToCreate'
import cloudinary from 'App/utils/cloudinary'

export default class ProductsController {
  public async index({ view, session, response }: HttpContextContract) {
    try {
      const products = await Product.query().preload('file')
      // const productsToJson = products.map((i) => i.toJSON())
      return view.render('products/index', { products })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao encontrar produtos')
      return response.redirect().back()
    }
  }
  public async create({ view }: HttpContextContract) {
    return view.render('products/create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    const data = await request.validate(ProductValidator)

    try {
      const result = await cloudinary.uploader.upload(data.image.tmpPath, { folder: 'products' })
      const product = await Product.create({
        name: data.name,
        description: data.description,
        price: formatPriceToCreate(data.price),
      })

      await File.create({
        url: result.secure_url,
        productId: product.id,
        publicId: result.public_id,
      })
      session.flash('success', 'Produto criado com sucesso.')
      return response.redirect().toRoute('ProductsController.index')
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao criar produto.')
      return response.redirect().back()
    }
  }

  public async edit({ request, response, session, view }: HttpContextContract) {
    const id = request.param('id')

    try {
      const product = await Product.query().where('id', id).preload('file').firstOrFail()

      return view.render('products/edit', { product })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Produto não encontrado.')
      return response.redirect().back()
    }
  }

  public async update({ request, response, session }: HttpContextContract) {
    const id = request.param('id')
    const data = request.body()
    const productImage = request.file('image')

    const product = await Product.query().where('id', id).preload('file').first()
    if (!product) {
      session.flash('error', 'Produto não encontrado.')
      return response.redirect().toRoute('ProductsController.index')
    }

    try {
      const file = await File.findByOrFail('productId', product.id)
      if (productImage) {
        await cloudinary.uploader.destroy(product.file.publicId)
        const result = await cloudinary.uploader.upload(productImage.tmpPath, {
          folder: 'products',
        })

        await file.merge({ publicId: result.public_id, url: result.secure_url }).save()
      }

      await product.merge({ ...data, price: formatPriceToCreate(data.price) }).save()
      session.flash('success', 'Produto editado com sucesso.')
      return response.redirect().toRoute('ProductsController.index')
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao editar produto')
      return response.redirect().back()
    }
  }

  public async destroy({ request, response, session }: HttpContextContract) {
    const id = request.param('id')

    const product = await Product.query().where('id', id).preload('file').first()
    if (!product) {
      session.flash('error', 'Produto não encontrado.')
      return response.redirect().toRoute('ProductsController.index')
    }

    try {
      await cloudinary.uploader.destroy(product.file.publicId)
      await product.delete()
      session.flash('success', 'Produto deletado com sucesso.')
      return response.redirect().toRoute('ProductsController.index')
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao deletar produto')
      return response.redirect().back()
    }
  }
}

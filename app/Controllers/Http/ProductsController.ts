import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import { formatPriceToCreate } from 'App/utils/formatPriceToCreate'
import ProductValidator from 'App/Validators/ProductValidator'

export default class ProductsController {
  public async index({ view, session, response }: HttpContextContract) {
    try {
      const products = await Product.all()
      return view.render('products/index', { products })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao encontrar produtos')
      return response.redirect().back()
    }
  }
  public async create({ view, session }: HttpContextContract) {
    session.flash('error', 'Produto não encontrado.')

    return view.render('products/create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    const data = await request.validate(ProductValidator)
    try {
      await Product.create({ ...data, price: formatPriceToCreate(data.price) })
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
      const product = await Product.findOrFail(id)
      return view.render('products/edit', { product })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Produto não encontrado.')
      return response.redirect().back()
    }
  }

  public async update({ request, response, session }: HttpContextContract) {
    const id = request.param('id')
    const data = await request.validate(ProductValidator)

    const product = await Product.find(id)
    if (!product) {
      session.flash('error', 'Produto não encontrado.')
      return response.redirect().back()
    }

    try {
      await product.merge({ ...data, price: formatPriceToCreate(data.price) }).save()
      session.flash('success', 'Produto editado com sucesso.')
      return response.redirect().toRoute('ProductsController.index')
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao editar produto')
      return response.redirect().back()
    }
  }

  public async destroy({ view }: HttpContextContract) {
    return view.render('products/create')
  }
}

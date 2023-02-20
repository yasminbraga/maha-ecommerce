import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import { formatPriceToCreate } from 'App/utils/formatPriceToCreate'
import ProductValidator from 'App/Validators/ProductValidator'

export default class ProductsController {
  public async index({ view }: HttpContextContract) {
    return view.render('products/index')
  }
  public async create({ view }: HttpContextContract) {
    return view.render('products/create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    const data = await request.validate(ProductValidator)
    try {
      await Product.create({ ...data, price: formatPriceToCreate(data.price) })
      return response.redirect().toRoute('ProductsController.index')
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao criar produto.')
      return response.redirect().back()
    }
  }

  public async edit({ view }: HttpContextContract) {
    return view.render('products/create')
  }

  public async update({ view }: HttpContextContract) {
    return view.render('products/create')
  }

  public async destroy({ view }: HttpContextContract) {
    return view.render('products/create')
  }
}

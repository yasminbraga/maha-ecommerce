import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class CartController {
  public async index({ session, response, view }: HttpContextContract) {
    try {
      const products = await Product.query().preload('file')
      return view.render('public/cart', { products })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao encontrar produtos')
      return response.redirect().back()
    }
  }
}

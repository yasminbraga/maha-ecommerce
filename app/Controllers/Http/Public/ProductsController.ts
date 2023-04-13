import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Kit from 'App/Models/Kit'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ session, response, view }: HttpContextContract) {
    try {
      const products = await Product.query().preload('file')
      const kits = await Kit.query().preload('file').preload('products')
      return view.render('public/products', {
        products: products.map((i) => i.toJSON()),
        kits: kits.map((i) => i.toJSON()),
      })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao encontrar produtos')
      return response.redirect().back()
    }
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {
  public async index({ view }: HttpContextContract) {
    return view.render('public/landingpage')
  }
}

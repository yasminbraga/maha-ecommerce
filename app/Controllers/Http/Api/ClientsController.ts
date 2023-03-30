import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Product from 'App/Models/Product'
import ClientValidator from 'App/Validators/ClientValidator'

export default class ClientsController {
  public async index({ session, response }: HttpContextContract) {
    try {
      const products = await Product.query().preload('file')
      return products.map((i) => i.toJSON())
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao encontrar produtos')
      return response.redirect().back()
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(ClientValidator)
    try {
      const client = await Client.create(data)
      return response.ok(client.toJSON())
    } catch (error) {
      return response.conflict({ errors: error.messages })
    }
  }
}

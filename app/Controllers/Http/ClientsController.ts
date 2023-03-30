import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({ session, response, view }: HttpContextContract) {
    try {
      const clients = await Client.all()
      return view.render('clients/index', { clients: clients.map((i) => i.toJSON()) })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao encontrar clientes')
      return response.redirect().back()
    }
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import ClientValidator from 'App/Validators/ClientValidator'

export default class ClientsController {
  public async index({ auth, response, view }: HttpContextContract) {
    try {
      auth.use('webClient').user!
      return view.render('public/my_account')
    } catch (error) {
      console.error(error)
      return response.redirect('/signin')
    }
  }

  public async create({ view }: HttpContextContract) {
    return view.render('public/signup')
  }

  public async store({ auth, request, response, session }: HttpContextContract) {
    const data = await request.validate(ClientValidator)
    try {
      await Client.create(data)
      await auth.use('webClient').attempt(data.email, data.password)
      return response.redirect().toRoute('/my-account')
    } catch (error) {
      console.log(error)
      session.flash('error', 'Erro ao criar sua conta.')
      return response.redirect().back()
    }
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import ClientLoginValidator from 'App/Validators/ClientLoginValidator'

export default class ClientsController {
  public async index({}: HttpContextContract) {}

  public async store({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(ClientLoginValidator)
    try {
      const user = await Client.findBy('email', email)
      const token = await auth.use('apiClient').attempt(email, password)
      return { ...user?.toJSON(), token }
    } catch (error) {
      console.error(error)
      return response.conflict({ errors: error.messages })
    }
  }
}

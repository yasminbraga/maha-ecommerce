import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import ClientValidator from 'App/Validators/ClientValidator'

export default class ClientsController {
  public async index({ auth, response }: HttpContextContract) {
    try {
      const user = auth.use('apiClient').user!
      return user
    } catch (error) {
      console.error(error)
      return response.unauthorized({ message: 'O usuário não possui permissão para acessar' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(ClientValidator)
    try {
      const client = await Client.create(data)
      return response.ok(client.toJSON())
    } catch (error) {
      console.log(error)
      return response.conflict({ errors: error.messages })
    }
  }
}

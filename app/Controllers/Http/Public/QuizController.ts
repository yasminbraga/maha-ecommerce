import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {
  public async index({}: HttpContextContract) {}
  public async store({ request }: HttpContextContract) {
    const { data } = request.body()
    console.log(data)
  }
}

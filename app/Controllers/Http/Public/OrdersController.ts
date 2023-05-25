import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'

export default class OrdersController {
  public async index({}: HttpContextContract) {}
  public async store({ request, auth }: HttpContextContract) {
    const { data } = request.body()
    console.log(data.total, data.productsIds)

    try {
      const order = await Order.create({
        total: data.total,
        status: 'pending',
        clientId: auth.user?.id,
      })

      data.productsIds.map(async (item) => {
        await order.related('products').attach({ [item.id]: { quantity: item.quantity } })
      })
      return console.log('criou')
    } catch (error) {
      console.log(error)
    }
  }
}

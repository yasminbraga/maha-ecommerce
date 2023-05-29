import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'
import OrderPaymentDetail from 'App/Models/OrderPayment'
import cloudinary from 'App/utils/cloudinary'

export default class OrdersController {
  public async index({}: HttpContextContract) {}
  public async store({ request, auth }: HttpContextContract) {
    const { data } = request.body()

    try {
      const order = await Order.create({
        total: data.total,
        status: 'pending',
        clientId: auth.user?.id,
      })

      data.productsIds.map(async (item) => {
        await order.related('products').attach({ [item.id]: { quantity: item.quantity } })
      })
      return { orderId: order.id }
    } catch (error) {
      console.log(error)
    }
  }

  public async payment({ request, response }: HttpContextContract) {
    const file = request.file('file', {
      size: '2mb',
      extnames: ['jpg', 'png', 'pdf'],
    })
    const { orderId } = request.body()
    try {
      const result = await cloudinary.uploader.upload(file?.tmpPath, { folder: 'receipts' })
      const orderPayment = await OrderPaymentDetail.create({
        orderId,
        url: result.secure_url,
        publicId: result.public_id,
      })
      return console.log(orderPayment)
    } catch (error) {
      console.log(error)
    }
  }
}

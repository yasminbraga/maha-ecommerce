import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'
import OrderPaymentDetail from 'App/Models/OrderPayment'
import cloudinary from 'App/utils/cloudinary'

export default class OrdersController {
  public async index({}: HttpContextContract) {}
  public async store({ request, auth }: HttpContextContract) {
    const { total, productsIds } = request.body()
    const file = request.file('file', {
      size: '2mb',
      extnames: ['jpg', 'png', 'pdf'],
    })

    try {
      const order = await Order.create({
        total: Number(total),
        status: 'pending',
        clientId: auth.user?.id,
      })

      JSON.parse(productsIds).map(async (item) => {
        await order.related('products').attach({ [item.id]: { quantity: item.quantity } })
      })

      const result = await cloudinary.uploader.upload(file?.tmpPath, { folder: 'receipts' })

      const orderPayment = await OrderPaymentDetail.create({
        orderId: order.id,
        url: result.secure_url,
        publicId: result.public_id,
      })

      return 'ok'
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

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'

export default class OrdersController {
  public async index({ response, session, view }: HttpContextContract) {
    try {
      const orders = await Order.query()
        .preload('orderPaymentDetail')
        .preload('client')
        .preload('products', (query) => {
          query.pivotColumns(['quantity'])
        })
        .orderBy('created_at', 'desc')
      return view.render('orders/index', { orders })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao encontrar pedidos')
      return response.redirect().back()
    }
  }
}

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

  public async editStatus({ view, request, session, response }: HttpContextContract) {
    const id = request.param('id')
    try {
      const order = await Order.find(id)
      return view.render('orders/edit-status', { order })
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao encontrar pedido')
      return response.redirect().back()
    }
  }

  public async update({ request, session, response }: HttpContextContract) {
    const id = request.param('id')
    const { status } = request.body()

    const order = await Order.find(id)
    if (!order) {
      session.flash('error', 'Erro ao encontrar pedido')
      return response.redirect().back()
    }
    try {
      await order.merge({ status }).save()
      session.flash('success', 'Pedido editado com sucesso.')
      return response.redirect().toRoute('/admin/orders')
    } catch (error) {
      console.error(error)
      session.flash('error', 'Erro ao encontrar pedido')
      return response.redirect().back()
    }
  }
}

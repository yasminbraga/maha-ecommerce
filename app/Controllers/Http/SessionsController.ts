import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async index({ view }: HttpContextContract) {
    return view.render('session/login')
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    try {
      await auth.use('web').attempt(email, password)
      return response.redirect('/')
    } catch (error) {
      console.error(error)
      return response.redirect().back()
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.use('web').logout()
      return response.redirect('/login')
    } catch (error) {
      console.error(error)
      return response.redirect().back()
    }
  }
}

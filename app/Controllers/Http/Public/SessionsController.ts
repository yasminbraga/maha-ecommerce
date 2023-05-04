import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClientLoginValidator from 'App/Validators/ClientLoginValidator'

export default class SessionsController {
  public async index({ view }: HttpContextContract) {
    return view.render('public/signin')
  }

  public async store({ request, response, auth, session }: HttpContextContract) {
    const { email, password } = await request.validate(ClientLoginValidator)
    const { redirectUrl } = request.qs()

    try {
      await auth.use('webClient').attempt(email, password)

      if (redirectUrl) {
        return response.redirect().toRoute(redirectUrl)
      }

      return response.redirect().toRoute('/my-account')
    } catch (error) {
      console.error(error)
      session.flash('error', 'Email ou senha incorretos.')
      console.error(error)
      return response.redirect().withQs().back()
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.use('webClient').logout()
      return response.redirect('/signin')
    } catch (error) {
      console.error(error)
      return response.redirect().back()
    }
  }

  public async resetPage({ view }: HttpContextContract) {
    return view.render('public/reset_password')
  }

  public async resetPassword({ request, response }: HttpContextContract) {
    // Validator de email - se existe conta com esse email
    const email = request.input('email')

    try {
      // enviar um email com o link para reset de senha
      // link redireciona para uma pagina com um campo de senha
    } catch (error) {
      console.log(error)
      return response.redirect().back()
    }
  }
}

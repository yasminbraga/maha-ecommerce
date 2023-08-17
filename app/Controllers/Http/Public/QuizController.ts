import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Quiz from 'App/Models/Quiz'

export default class QuizController {
  public async index({ view, auth }: HttpContextContract) {
    try {
      const client = await Client.query()
        .where('email', auth.user!.email)
        .preload('quizzes', (query) => query.orderBy('created_at', 'desc'))
        .first()
      console.log(client?.toJSON())
      return view.render('public/result', { client })
    } catch (error) {
      console.error(error)
    }
  }
  public async store({ request, auth }: HttpContextContract) {
    const { data } = request.body()
    const { ...formData } = data

    try {
      const client = await Client.findByOrFail('email', auth.user!.email)
      const quiz = await Quiz.create({ clientId: client.id, ...formData })
      return console.log(quiz)
    } catch (error) {
      console.error(error)
    }
  }

  public async redirect({ view }: HttpContextContract) {
    return view.render('public/redirect')
  }

  public async lastFormula({ auth, view }: HttpContextContract) {
    try {
      const client = await Client.query()
        .where('id', auth.use('webClient').user!.id)
        .preload('quizzes')
        .firstOrFail()
      return view.render('public/last_formula', { client: client.toJSON() })
    } catch (error) {
      console.error(error)
    }
  }
}

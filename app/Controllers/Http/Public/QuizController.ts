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
      console.log(error)
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
      console.log(error)
    }
  }
}

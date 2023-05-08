import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Quiz from 'App/Models/Quiz'

export default class QuizController {
  public async index({ view }: HttpContextContract) {
    return view.render('public/result')
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

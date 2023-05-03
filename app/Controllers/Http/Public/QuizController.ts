import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Quiz from 'App/Models/Quiz'

export default class QuizController {
  public async index({ view }: HttpContextContract) {
    return view.render('public/result')
  }
  public async store({ request }: HttpContextContract) {
    const { data } = request.body()
    const { email, ...formData } = data
    console.log(data)

    try {
      const client = await Client.firstOrCreate({ email })
      const quiz = await Quiz.create({ clientId: client.id, ...formData })
      return console.log(quiz)
    } catch (error) {
      console.log(error)
    }
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Quiz from 'App/Models/Quiz'
import { generateFormula } from 'utils/generateFormula'

export default class QuizController {
  public async index({ view, auth }: HttpContextContract) {
    try {
      const client = await Client.query()
        .where('email', auth.user!.email)
        .preload('quizzes', (query) => query.orderBy('created_at', 'desc'))
        .first()
      const formula = generateFormula(client?.quizzes[0])
      return view.render('public/result', { client, formula })
    } catch (error) {
      console.error(error)
    }
  }
  public async store({ request, auth, response }: HttpContextContract) {
    const { data } = request.body()
    const { ...formData } = data

    try {
      const client = await Client.findByOrFail('email', auth.user!.email)
      await Quiz.create({ clientId: client.id, ...formData })
      return response.redirect('/result')
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

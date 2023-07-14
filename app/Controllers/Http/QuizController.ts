import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Quiz from 'App/Models/Quiz'

export default class QuizController {
  public async show({ response, request, session, view }: HttpContextContract) {
    const id = request.param('id')
    try {
      const quiz = await Quiz.query().where('clientId', id).orderBy('createdAt', 'asc').first()
      return view.render('quiz/show', { quiz: quiz?.toJSON() })
    } catch (error) {
      console.log(error)
      session.flash('error', 'Erro ao encontrar formulário para esse usuário')
      return response.redirect().back()
    }
  }
}

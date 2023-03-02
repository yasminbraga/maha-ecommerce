import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UpdateUserValidator from 'App/Validators/User/UpdateUserValidator'
import UserValidator from 'App/Validators/User/UserValidator'

export default class UsersController {
  public async index({ response, session, view }: HttpContextContract) {
    try {
      const users = await User.all()
      return view.render('users/index', { users: users.map((i) => i.toJSON()) })
    } catch (error) {
      session.flash('error', 'Erro ao criar usuário.')
      console.error(error)
      return response.redirect().back()
    }
  }

  public async create({ view }: HttpContextContract) {
    return view.render('users/create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    const data = await request.validate(UserValidator)
    try {
      await User.create(data)
      session.flash('success', 'Usuário criado com sucesso.')
      return response.redirect().toRoute('UsersController.index')
    } catch (error) {
      session.flash('error', 'Erro ao criar usuário.')
      console.error(error)
      return response.redirect().back()
    }
  }

  public async edit({ request, response, session, view }: HttpContextContract) {
    const id = request.param('id')
    try {
      const user = await User.findOrFail(id)
      return view.render('users/edit', { user: user.toJSON() })
    } catch (error) {
      session.flash('error', 'Usuário não encontrado.')
      console.error(error)
      return response.redirect().back()
    }
  }

  public async update({ request, response, session }: HttpContextContract) {
    const id = request.param('id')
    const data = await request.validate(UpdateUserValidator)
    const user = await User.find(id)
    if (!user) {
      session.flash('error', 'Usuário não encontrado')
      return response.redirect().back()
    }
    try {
      await user.merge(data).save()
      session.flash('success', 'Usuário atualizado com sucesso')
      return response.redirect().toRoute('UsersController.index')
    } catch (error) {
      session.flash('error', 'Erro ao atualizar usuário')
      console.error(error)
      return response.redirect().back()
    }
  }

  public async destroy({ request, response, session }: HttpContextContract) {
    const id = request.param('id')
    const user = await User.find(id)
    if (!user) {
      session.flash('error', 'Usuário não encontrado')
      return response.redirect().back()
    }
    try {
      await user.delete()
      session.flash('success', 'Usuário deletado com sucesso')
      return response.redirect().toRoute('UsersController.index')
    } catch (error) {
      session.flash('error', 'Erro ao deletar usuário')
      console.error(error)
      return response.redirect().back()
    }
  }
}

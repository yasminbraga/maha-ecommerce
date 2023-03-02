import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public userId = this.ctx.request.param('id')
  public schema = schema.create({
    name: schema.string(),
    email: schema.string([
      rules.email(),
      rules.unique({ table: 'users', column: 'email', whereNot: { id: this.userId } }),
    ]),
  })
  public messages: CustomMessages = {
    'required': 'Campo obrigatório',
    'email.email': 'Endereço de email inválido',
    'email.unique': 'Endereço de email já cadastrado no sistema',
  }
}

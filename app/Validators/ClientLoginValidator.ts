import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class ClientLoginValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    email: schema.string([rules.email(), rules.exists({ table: 'clients', column: 'email' })]),
    password: schema.string(),
  })
  public messages: CustomMessages = {
    'required': 'Campo obrigatório',
    'email.email': 'Endereço de email inválido',
    'email.exists': 'Endereço de email não cadastrado',
  }
}

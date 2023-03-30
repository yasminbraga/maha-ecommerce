import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class ClientValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(),
    email: schema.string([rules.email(), rules.unique({ table: 'clients', column: 'email' })]),
    password: schema.string(),
    phone: schema.string(),
  })
  public messages: CustomMessages = {
    'required': 'Campo obrigatório',
    'email.email': 'Endereço de email inválido',
    'email.unique': 'Endereço de email já cadastrado no sistema',
  }
}

import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(),
    description: schema.string(),
    price: schema.string(),
    image: schema.file({
      extnames: ['png', 'jpg'],
    }),
  })

  public messages: CustomMessages = {
    required: 'Campo obrigatório',
  }
}

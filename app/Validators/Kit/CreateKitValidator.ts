import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateKitValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    price: schema.string(),
    productIds: schema.array().members(schema.string()),
    image: schema.file({
      extnames: ['png', 'jpg'],
    }),
  })
  public messages: CustomMessages = {
    'required': 'Campo obrigatório',
    'file.extname': 'Formato de arquivo não aceito',
  }
}

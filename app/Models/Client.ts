import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, HasMany, beforeSave, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Quiz from './Quiz'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public cpf: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public name: string

  @column()
  public phone: string

  @column()
  public rememberMeToken: string | null

  @hasMany(() => Quiz)
  public quizzes: HasMany<typeof Quiz>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(client: Client) {
    if (client.$dirty.password) {
      client.password = await Hash.make(client.password)
    }
  }
}

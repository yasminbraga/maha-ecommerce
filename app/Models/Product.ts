import { DateTime } from 'luxon'
import { BaseModel, column, computed, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import File from './File'
import { formatPriceToFetch } from 'App/utils/formatPriceToFetch'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @hasOne(() => File)
  public file: HasOne<typeof File>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @computed()
  public get formatedPrice() {
    return formatPriceToFetch(this.price)
  }
}

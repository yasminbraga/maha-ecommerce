import { BaseModel, HasOne, ManyToMany, column, hasOne, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Client from './Client'
import Product from './Product'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public total: number

  @column()
  public status: string

  @column()
  public clientId: number

  @hasOne(() => Client)
  public client: HasOne<typeof Client>

  @manyToMany(() => Product, { pivotTable: 'order_product' })
  public products: ManyToMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

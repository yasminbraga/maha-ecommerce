import {
  BaseModel,
  column,
  computed,
  HasOne,
  hasOne,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { formatPriceToFetch } from 'App/utils/formatPriceToFetch'
import { DateTime } from 'luxon'
import KitFile from './KitFile'
import Product from './Product'

export default class Kit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public price: number

  @manyToMany(() => Product, { pivotTable: 'kit_product' })
  public products: ManyToMany<typeof Product>

  @hasOne(() => KitFile)
  public file: HasOne<typeof KitFile>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @computed()
  public get formatedPrice() {
    return formatPriceToFetch(this.price)
  }
}

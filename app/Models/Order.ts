import {
  BaseModel,
  BelongsTo,
  HasOne,
  ManyToMany,
  belongsTo,
  column,
  computed,
  hasOne,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { formatDate } from 'App/utils/formatDate'
import { formatPriceToFetch } from 'App/utils/formatPriceToFetch'
import { DateTime } from 'luxon'
import { translateStatus } from 'utils/translate'
import Client from './Client'
import OrderPaymentDetail from './OrderPayment'
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

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @hasOne(() => OrderPaymentDetail)
  public orderPaymentDetail: HasOne<typeof OrderPaymentDetail>

  @manyToMany(() => Product, { pivotColumns: ['quantity'] })
  public products: ManyToMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @computed()
  public get translatedStatus() {
    return translateStatus(this.status)
  }

  @computed()
  public get formatedPrice() {
    return formatPriceToFetch(this.total)
  }

  @computed()
  public get formatedDate() {
    return formatDate(this.createdAt)
  }
}

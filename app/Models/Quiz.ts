import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Client from './Client'

const consume = (value: string) => value.split(',').filter((i) => i)

const prepare = (value: string[]) => value.join(',')
export default class Quiz extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public hairType: string

  @column()
  public hairStructure: string

  @column()
  public hairSize: string

  @column()
  public scalpMoisture: string

  @column()
  public endsMoisture: string

  @column()
  public age: string

  @column({ consume, prepare })
  public treatments: Array<string>

  @column()
  public color: string

  @column()
  public washFrequence: string

  @column({ consume, prepare })
  public hairStyle: Array<string>

  @column({ consume, prepare })
  public workoutPlace: Array<string>

  @column()
  public workoutFrequence: string

  @column({ consume, prepare })
  public goals: Array<string>

  @column()
  public formulaName: string

  @column()
  public clientId: string

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

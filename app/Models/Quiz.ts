import { BaseModel, BelongsTo, belongsTo, column, computed } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import {
  translateAge,
  translateColor,
  translateGoals,
  translateHairSize,
  translateHairStructure,
  translateHairStyle,
  translateHairType,
  translateMoisture,
  translateTreatments,
  translateWorkoutPlace,
} from 'utils/translate'
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
  public clientId: number

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @computed()
  public get translated() {
    return {
      hairType: translateHairType(this.hairType),
      hairStructure: translateHairStructure(this.hairStructure),
      hairSize: translateHairSize(this.hairSize),
      scalpMoisture: translateMoisture(this.scalpMoisture),
      endsMoisture: translateMoisture(this.endsMoisture),
      age: translateAge(this.age),
      color: translateColor(this.color),
      goals: translateGoals(this.goals),
      hairStyle: translateHairStyle(this.hairStyle),
      treatments: translateTreatments(this.treatments),
      workoutPlace: translateWorkoutPlace(this.workoutPlace),
    }
  }
}

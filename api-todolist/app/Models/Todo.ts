import { DateTime } from 'luxon'
import { BaseModel, column, HasOne } from '@ioc:Adonis/Lucid/Orm'
import GroupTodo from './GroupTodo'

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public group_id: HasOne<typeof GroupTodo>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'quizzes'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('fragrance')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('fragrance')
    })
  }
}

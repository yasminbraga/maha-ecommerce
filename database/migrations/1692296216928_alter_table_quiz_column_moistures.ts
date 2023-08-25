import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'quizzes'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('scalp_moisture')
      table.dropColumn('ends_moisture')
      table.enum('moisture', ['dry', 'balanced', 'oily'])
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('moisture')
      table.enum('scalp_moisture', ['dry', 'balanced', 'oily'])
      table.enum('ends_moisture', ['dry', 'balanced', 'oily'])
    })
  }
}

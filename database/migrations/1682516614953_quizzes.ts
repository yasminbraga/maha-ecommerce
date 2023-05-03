import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'quizzes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enum('hair_type', ['straight', 'wavy', 'curly', 'coily'])
      table.enum('hair_structure', ['fine', 'medium', 'coarse'])
      table.enum('hair_size', ['short', 'medium', 'long', 'very_long'])
      table.enum('scalp_moisture', ['dry', 'balanced', 'oily'])
      table.enum('ends_moisture', ['dry', 'balanced', 'oily'])
      table.enum('age', ['2_10', '11_17', '18_24', '25_34', '35_44', '45_54', '55_64', '65+'])
      table.string('treatments')
      table.enum('color', ['blonde', 'black', 'brunette', 'red', 'gray_silver', 'fashion_color'])
      table.string('wash_frequence')
      table.string('hair_style')
      table.string('workout_place')
      table.string('workout_frequence')
      table.string('goals')
      table.string('formula_name')
      table.integer('client_id').references('id').inTable('clients').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

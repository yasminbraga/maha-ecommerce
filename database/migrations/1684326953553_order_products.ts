import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'order_product'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('order_id').unsigned().references('orders.id').onDelete('CASCADE')
      table.integer('product_id').unsigned().references('products.id').onDelete('CASCADE')
      table.integer('quantity')
      table.unique(['order_id', 'product_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

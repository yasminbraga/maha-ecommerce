import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.firstOrCreate({
      email: 'admin@email.com',
      password: '123456',
      name: 'Admin User',
    })
  }
}

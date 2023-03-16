import Route from '@ioc:Adonis/Core/Route'

Route.get('login', 'SessionsController.index')
Route.post('login', 'SessionsController.store')
Route.post('logout', 'SessionsController.logout')

Route.group(() => {
  Route.get('/', async ({ view }) => {
    return view.render('welcome')
  })

  Route.resource('products', 'ProductsController')
  Route.resource('kits', 'KitsController')
  Route.resource('users', 'UsersController')
}).middleware('auth')

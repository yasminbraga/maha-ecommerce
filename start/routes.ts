import Route from '@ioc:Adonis/Core/Route'

Route.get('login', 'SessionsController.index')
Route.post('login', 'SessionsController.store')
Route.post('logout', 'SessionsController.logout')

Route.group(() => {
  Route.get('products', 'ProductsController.index')
  Route.post('signup', 'ClientsController.store')
  Route.post('signin', 'SessionsController.store')
  Route.group(() => {
    Route.get('client', 'ClientsController.index')
  }).middleware('auth:apiClient')
})
  .namespace('App/Controllers/Http/Api')
  .prefix('api')

Route.group(() => {
  Route.get('/', async ({ view }) => {
    return view.render('welcome')
  })

  Route.resource('products', 'ProductsController')
  Route.resource('kits', 'KitsController')
  Route.resource('users', 'UsersController')
  Route.resource('clients', 'ClientsController')
}).middleware('auth')

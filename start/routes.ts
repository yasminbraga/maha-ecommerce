import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Route.get('/') -- Landing page
  // Route.get('ingredients', 'ProductsController.index')
  // Route.get('aboutus', 'ProductsController.index')
  Route.get('/', 'LandingpageController.index')
  Route.on('app').render('app/index')
  Route.on('quiz').render('public/quiz')

  Route.post('quiz', 'QuizController.store')

  Route.get('products', 'ProductsController.index')
  Route.get('signup', 'ClientsController.create')
  Route.post('signup', 'ClientsController.store')
  Route.resource('signin', 'SessionsController').only(['index', 'store'])
  Route.post('logout', 'SessionsController.logout')
  Route.get('reset-password', 'SessionsController.resetPage')
  Route.post('reset-password', 'SessionsController.resetPassword')

  Route.group(() => {
    Route.get('my-account', 'ClientsController.index')
  }).middleware(['auth:webClient'])
}).namespace('App/Controllers/Http/Public')

Route.group(() => {
  Route.get('login', 'SessionsController.index').as('admin.login')
  Route.post('login', 'SessionsController.store')
  Route.post('logout', 'SessionsController.logout')

  Route.group(() => {
    Route.resource('products', 'ProductsController')
    Route.resource('kits', 'KitsController')
    Route.resource('users', 'UsersController')
    Route.resource('clients', 'ClientsController')
  }).middleware('auth')
}).prefix('admin')

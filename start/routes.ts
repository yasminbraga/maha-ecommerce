import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'LandingpageController.index')

  Route.get('products', 'ProductsController.index')
  Route.get('signup', 'ClientsController.create')
  Route.post('signup', 'ClientsController.store')
  Route.on('ingredients').render('public/ingredients')

  Route.resource('signin', 'SessionsController').only(['index', 'store'])
  Route.post('logout', 'SessionsController.logout')
  Route.get('reset-password', 'SessionsController.resetPage')
  Route.post('reset-password', 'SessionsController.resetPassword')

  Route.group(() => {
    Route.get('/result', 'QuizController.index')
    Route.on('app/*').render('public/app')
    Route.on('quiz').render('public/quiz')
    Route.post('quiz', 'QuizController.store')

    Route.post('order', 'OrdersController.store')
    Route.post('payment', 'OrdersController.payment')

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
    Route.resource('orders', 'OrdersController')
    Route.resource('quiz', 'QuizController')
    Route.get('edit-status/:id', 'OrdersController.editStatus')
    Route.put('update-status/:id', 'OrdersController.update')
  }).middleware('auth')
}).prefix('admin')

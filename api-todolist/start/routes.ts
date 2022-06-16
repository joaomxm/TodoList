import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
    return { msg: 'hello world' }
  })

  Route.resource('/groups', 'GroupTodosController').apiOnly()
  Route.resource('/todos', 'TodosController').apiOnly()
}).prefix('api')

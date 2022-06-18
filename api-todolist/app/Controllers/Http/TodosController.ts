import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from 'App/Models/Todo'

export default class TodosController {
  public async index({ request }: HttpContextContract) {
    const { group: idTodoGroup } = request.qs()
    const todos = await Todo.query().where('group_id', idTodoGroup)

    return { data: todos, msg: 'Success' }
  }

  public async store({ request, response }: HttpContextContract) {
    const todoData = request.only(['name', 'description', 'group_id'])
    todoData['finished'] = false
    const newTodo = await Todo.create(todoData)

    response.status(201)
    return { data: newTodo, msg: 'Success' }
  }

  public async show({ params }: HttpContextContract) {
    const idTodo = params.id
    const todo = await Todo.findOrFail(idTodo)

    return { data: todo, msg: 'Success' }
  }

  public async update({ request, params }: HttpContextContract) {
    const idTodo = params.id
    const todoData = request.only(['name', 'description', 'group_id', 'finished'])
    const todo = await Todo.findOrFail(idTodo)

    todo.merge(todoData)
    await todo.save()

    return { data: todo, msg: 'Success' }
  }

  public async destroy({ params }: HttpContextContract) {
    const idTodo = params.id
    const todo = await Todo.findOrFail(idTodo)

    await todo.delete()

    return { data: todo, msg: 'Success' }
  }
}

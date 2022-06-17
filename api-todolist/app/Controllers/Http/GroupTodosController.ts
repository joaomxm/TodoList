import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GroupTodo from 'App/Models/GroupTodo'

export default class GroupTodosController {
  public async index({}: HttpContextContract) {
    const groupsTodos = await GroupTodo.all()
    return { data: groupsTodos, msg: 'Success' }
  }

  public async store({ request, response }: HttpContextContract) {
    const { name } = request.all()
    const slugName = name.split(' ').join('_').toLowerCase()
    const newGroup = await GroupTodo.create({ name, slugName })

    response.status(201)

    return { data: newGroup, msg: 'Success' }
  }

  public async show({ params }: HttpContextContract) {
    const idGroupTodo = params.id
    const groupsTodos = await GroupTodo.findOrFail(idGroupTodo)

    return { data: groupsTodos, msg: 'Success' }
  }

  public async update({ request, params }: HttpContextContract) {
    const idGroupTodo = params.id
    const { name } = request.all()

    const groupsTodos = await GroupTodo.findOrFail(idGroupTodo)
    const slugName = name.split(' ').join('_').toLowerCase()
    groupsTodos.name = name
    groupsTodos.slugName = slugName
    await groupsTodos.save()

    return { data: groupsTodos, msg: 'Success' }
  }

  public async destroy({ params }: HttpContextContract) {
    const idGroupTodo = params.id
    const groupsTodos = await GroupTodo.findOrFail(idGroupTodo)

    await groupsTodos.delete()

    return { data: [], msg: 'Success' }
  }
}

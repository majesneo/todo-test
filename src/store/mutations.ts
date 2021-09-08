import { State, Todo } from '@/store/state'
import { MutationTree } from 'vuex'

export enum MutationType {
  CREATE_TODO = 'CREATE_TODO',
  SET_TODO = 'SET_TODO',
  COMPLETE_TOD = 'COMPLETE_TOD',
  DELETE_TOD = 'DELETE_TOD',
  ALL_COMPETED='ALL_COMPETED'
}

export type Mutations = {
  [MutationType.CREATE_TODO](state: State, todo: Todo): void
  [MutationType.SET_TODO](state: State, todo: Todo): void
  [MutationType.COMPLETE_TOD](state: State, todo: Todo): void
  [MutationType.DELETE_TOD](state: State, todo: Todo): void
  [MutationType.ALL_COMPETED](state: State, todo: Todo): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.ALL_COMPETED] (state) {
    state.todos.forEach((todo: Todo) => {
      if (todo.days === 'today') {
        todo.completed = true
      }
    })
  },
  [MutationType.CREATE_TODO] (state, newTodo) {
    state.todos.unshift(newTodo)
  },
  [MutationType.SET_TODO] (state, newTodo) {
    state.todos = state.todos.concat(newTodo)
  },
  [MutationType.DELETE_TOD] (state, oldTodo) {
    state.todos = state.todos.filter(todo => todo.id !== oldTodo.id)
  },
  [MutationType.COMPLETE_TOD] (state, changedTodo) {
    console.log(changedTodo, 'changedTodo')
    const index = state.todos.findIndex(todo => todo.id === changedTodo.id)
    if (index === -1) return
    changedTodo.completed = !changedTodo.completed
    state.todos[index] = { ...state.todos[index], ...changedTodo }
  }
}

import { State, Todo } from '@/store/state'
import { GetterTree } from 'vuex'

export type Getters={
  todayTodo(state:State):Todo[]
  tomorrowTodo(state:State):Todo[]
}

export const getters: GetterTree<State, State>&Getters = {
  todayTodo (state: State): Todo[] {
    return state.todos.filter(todo => todo.days === 'today')
  },
  tomorrowTodo (state: State): Todo[] {
    return state.todos.filter(todo => todo.days === 'tomorrow')
  }
}

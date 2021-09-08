import { Mutations, MutationType } from '@/store/mutations'
import { ActionContext, ActionTree } from 'vuex'
import { State, Todo } from '@/store/state'

export enum ActionType {
  GET_TODOS = 'GET_TODOS'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: MutationType.SET_TODO,
    payload: Todo[]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionType.GET_TODOS](
    { commit }: AugmentedActionContext,
    payload: Array<Todo>
  ): Promise<Array<Todo>>
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionType.GET_TODOS] ({ commit }: AugmentedActionContext) {
    return new Promise(resolve => {
      setTimeout(() => {
        const todos:Todo[] = [
          { id: Date.now() * Math.floor(Math.random() * 100), title: 'Lorem ipsum dolore', completed: true, days: 'today' },
          {
            id: Date.now() * Math.floor(Math.random() * 100),
            title: 'Lorem ipsum dolore',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tellus nulla sed vitae nisl. Vulputate orci commodo feugiat egestas malesuada vel sed scelerisque.',
            completed: true,
            days: 'today'
          },
          { id: Date.now() * Math.floor(Math.random() * 100), title: 'Lorem ipsum dolore', completed: false, days: 'today' },
          {
            id: Date.now() * Math.floor(Math.random() * 100),
            title: 'Lorem ipsum dolore',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tellus nulla sed vitae nisl. Vulputate orci commodo feugiat egestas malesuada vel sed scelerisque.',
            completed: false,
            days: 'today'
          },
          {
            id: Date.now() * Math.floor(Math.random() * 100),
            title: 'Lorem ipsum dolore',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tellus nulla sed vitae nisl. Vulputate orci commodo feugiat egestas malesuada vel sed scelerisque.',
            completed: true,
            days: 'tomorrow'
          }
        ]
        commit(MutationType.SET_TODO, todos)
        resolve(todos)
      }, 2000)
    })
  }
}

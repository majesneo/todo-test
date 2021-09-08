export type Todo = {
  id: number,
  title: string,
  description?: string,
  completed: boolean,
  days: 'tomorrow' | 'today'
}

export type State = {
  todos: Todo[]
}
export const state: State = {
  todos: []
}

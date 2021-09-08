<template>
  <div style="display: flex;justify-content: center">
    <todo-block backgroundColor="#F2F2F2">
      <template v-slot:title>Add new one</template>
      <template v-slot:content>
        <div style="margin-bottom:25px">
          <input-app @valid="error=false" :error="error" v-model="todo.title" placeholder="TITLE"></input-app>
        </div>
        <div style="margin-bottom:25px">
          <textarea-app v-model="todo.description" placeholder="DESCRIPTION"></textarea-app>
        </div>
        <div style="margin-bottom:25px">
          <select-app v-model="todo.days" :options="days"></select-app>
        </div>
      </template>
      <template v-slot:btn>
        <button-app  @addTodo="addTodo" title="ADD"></button-app>
      </template>
    </todo-block>

    <todo-block backgroundColor="#C4C4C4">
      <template v-slot:title>My today todo</template>
      <template v-slot:content>
        <div v-if="todayTodo.length>0">
          <todo-item v-for="todo in todayTodo" :key="todo.id" :title="todo.title" :description="todo.description"
                     :completed="todo.completed">
            <template v-slot:actions>
              <complited-btn @complete="complitedTodo(todo)" @delete="deleteTodo(todo)"
                             :completed="todo.completed"></complited-btn>
            </template>
          </todo-item>
        </div>
        <div v-else class="loading">Loading today's todo...</div>
      </template>
      <template  v-slot:btn>
        <button-app @allComplete="allComplete" big title="SET ALL COMPLETE"></button-app>
      </template>
    </todo-block>

    <todo-block backgroundColor="#F2F2F2">
      <template v-slot:title>My tomorrow todo</template>
      <template v-slot:content>
        <div v-if="tomorrowTodo.length>0">
          <todo-item v-for="todo in tomorrowTodo" :key="todo.id" :title="todo.title" :description="todo.description"
                     :completed="todo.completed">
            <template v-slot:actions>
              <complited-btn @complete="complitedTodo(todo)" @delete="deleteTodo(todo)"
                             :completed="todo.completed"></complited-btn>
            </template>
          </todo-item>
        </div>
        <div v-else class="loading">Loading tomorrow's todo...</div>
      </template>
    </todo-block>
  </div>
</template>

<script lang="ts">
import TodoBlock from '@/components/TodoBlock.vue'
import InputApp from '@/components/common/Input.vue'
import TextareaApp from '@/components/common/Textarea.vue'
import SelectApp from '@/components/common/Select.vue'
import ButtonApp from '@/components/common/Button.vue'
import TodoItem from '@/components/TodoItem.vue'
import { ActionType } from '@/store/actions'
import ComplitedBtn from '@/components/ComplitedBtn.vue'
import { MutationType } from '@/store/mutations'
import { Todo } from '@/store/state'

export default {
  name: 'Home',
  data (): void {
    return {
      days: ['today', 'tomorrow'],
      error: false,
      todo: {
        title: '',
        description: '',
        days: 'today',
        completed: false,
        id: Date.now() * Math.floor(Math.random() * 100)
      }
    }
  },
  methods: {
    allComplete ():void {
      this.$store.commit(MutationType.ALL_COMPETED)
    },
    addTodo (): void {
      if (this.checkValidTitle()) {
        this.$store.commit(MutationType.CREATE_TODO, JSON.parse(JSON.stringify(this.todo)))
        this.reset()
      }
    },
    checkValidTitle (): boolean {
      if (this.todo.title === '') {
        this.error = true
        return false
      } else {
        return true
      }
    },
    complitedTodo (todo: Todo): void {
      this.$store.commit(MutationType.COMPLETE_TOD, todo)
    },
    deleteTodo (todo: Todo): void {
      this.$store.commit(MutationType.DELETE_TOD, todo)
    },
    reset (): void {
      this.todo.title = ''
      this.todo.description = ''
      this.todo.id = Date.now() * Math.floor(Math.random() * 100)
    }
  },
  computed: {
    todayTodo (): Todo[] {
      return this.$store.getters.todayTodo
    },
    tomorrowTodo (): Todo[] {
      return this.$store.getters.tomorrowTodo
    }
  },
  created (): void {
    this.$store.dispatch(ActionType.GET_TODOS)
  },
  components: {
    ComplitedBtn,
    TodoBlock,
    InputApp,
    TextareaApp,
    SelectApp,
    ButtonApp,
    TodoItem
  }
}
</script>

<style scoped>
.loading {
  margin-bottom: 20px;
}
</style>

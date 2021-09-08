<template>
  <div class="todo-item">
    <div style="display:flex; align-items: center;">
      <div class="todo-item__title">
        {{ title }}
      </div>
      <div class="todo-item__actions">
        <slot name="actions"></slot>
      </div>
    </div>
    <div :class="{'todo-item__description':description}">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

.todo-item {
  margin-bottom: 30px;
  max-width: 410px;
  background: #F8F8F8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  padding: 15px 15px;

  &__title {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    overflow: auto;
  }

  &__actions {
    margin-left: auto;
  }

  &__description {
    padding-top: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
    overflow: auto;
  }
}
</style>

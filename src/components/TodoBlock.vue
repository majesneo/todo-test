<template>
  <div class="add-todo" :style="{backgroundColor:backgroundColor}">
    <div class="add-todo__title">
      <slot name="title"></slot>
    </div>
    <div class="add-todo__content">
      <slot name="content"></slot>
    </div>
    <div class="add-todo__btn">
      <slot name="btn"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TodoBlock',
  props: {
    backgroundColor: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.add-todo {
  width: 487px;
  padding: 0 25px;
  min-height: 100vh;

  &__title {
    padding-top: 100px;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: #025B6F;
    line-height: 42px;
    margin-bottom: 60px;
  }

  &__content {

  }

  &__btn {
    margin-bottom: 32px;
    text-align: center;
  }
}
</style>

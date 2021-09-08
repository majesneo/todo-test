<template>
  <button @click="$emit('addTodo'),$emit('allComplete')" v-bind="$attrs" :class="{btn:true,btnBig:big}">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: ''
    },
    big: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  background: #025B6E;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  padding: 14px 40px;
}

.btnBig {
  padding-left: 110px;
  padding-right: 110px;
}
</style>

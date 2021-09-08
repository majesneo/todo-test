<template>
  <div>
    <div v-if="error" class="error">Поле обязательно</div>
    <input
      class="input"
      v-bind="$attrs"
      :placeholder="placeholder"
      :value="value"
      @input.stop.self="$emit('input', $event.target.value),$emit('valid')"
    >
  </div>
</template>

<script lang="ts">
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.26);
  box-sizing: border-box;
  border-radius: 5px;
  width: 433.81px;
  height: 50.47px;

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #E7E7E7;
  }
}

.error {
  color: red;
}
</style>

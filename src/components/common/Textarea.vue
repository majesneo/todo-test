<template>
  <div>
    <textarea
      v-bind="$attrs"
      class="textarea"
      :value="value"
      style="resize:none"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Textarea',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.textarea {
  width: 433.81px;
  height: 100.95px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.26);
  box-sizing: border-box;
  border-radius: 5px;

  &::placeholder {
    font-size: 14px;
    line-height: 16px;
    color: #E7E7E7;
  }
}
</style>

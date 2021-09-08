<template>
  <div>
    <select v-bind="$attrs" class="select" :value="value"
            @input.stop="$emit('input', $event.target.value)">
      <option value="" disabled hidden>{{ value }}</option>
      <option
        v-for="(option) in options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Select',
  data ():void {
    return {
      show: true
    }
  },
  props: {
    value: {
      type: String
    },
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.select {
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  color: #E7E7E7;
  width: 433.81px;
  height: 50.47px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.26);
  box-sizing: border-box;
  border-radius: 5px;
}
</style>

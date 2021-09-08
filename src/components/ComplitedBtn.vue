<template>
  <div>
    <button @click="$emit('complete')"
            :class="{'btn-icon':true ,'complitedIcon':completed,'notComplitedIcon':!completed}">
    </button>
    <button @click="$emit('delete')"
            :class="{'btn-icon':true ,'deleteIcon':true}">
    </button>
  </div>
</template>

<script>

export default {
  name: 'ComplitedBtn',
  props: {
    icon: {
      type: String
    },
    completed: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
.btn-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 5px;
}

.complitedIcon {
  background-image: url("../assets/ComplitedBtnIcon.svg");
  background-repeat: no-repeat;
  background-position: center;
  border: none;
}

.notComplitedIcon {
  background-image: url("../assets/notComplitedIcon.svg");
  background-repeat: no-repeat;
  background-position: center;
  border: none;
}

.deleteIcon {
  background-image: url("../assets/DeleteBtnIcon.svg");
  background-repeat: no-repeat;
  background-position: center;
  border: none;
}
</style>

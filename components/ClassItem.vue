<template>
  <div class="class-item">
    <h2>나는 {{title}}</h2>
    <p>나는 {{message}}</p>
    <p>덩어리 그대로 {{item}}</p>
    <div v-if="item">
      <p v-if="item.user">{{item.user.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
      require: false,
    },
    message: {
      type: String,
      default: "hello",
      require: true
    },
    item: {
      type: Object,
      require: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.class-item {
  padding: 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  width: fit-content
}
</style>
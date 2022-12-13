<template>
  <div class="parents">
    <h2>부모 컴포넌트</h2>
    <hr/>
    <p>아이템1</p>
    <slot name="item1"></slot>
    <hr/>
    <p>아이템2</p>
    <slot name="item2"></slot>
    <hr/>
    <strong v-if="hello">Hello</strong>
    <button @click="sayHello">여러분 인사합시다.</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: false,
    };
  },

  mounted() {},

  methods: {
    sayHello() {
      this.hello = !this.hello;
    }
  },
}
</script>

<style lang="scss" scoped>
.parents {
  border: 1px solid blue;
  padding: 40px;
}
</style>
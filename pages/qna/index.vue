<template>
  <div>
    <Parents class="custom-parents" id="parentsId" style="opacity: 0.8;" ref="parents_ref">
      <template slot="item1">얘는 아이템1</template>
      <template slot="item2">
        얘는 아이템2인데 child를 곁들인..
        <Child v-model="message"></Child>
      </template>
    </Parents>
    <button @click="hello">여러분 인사합시다.</button>
    <button @click="movePage">페이지 이동</button>
  </div>
</template>

<script>
import Parents from "@/components/Parents"
import Child from "@/components/Child"
export default {
  components: {Parents, Child},
  data() {
    return {
      message: '안녕'
    };
  },

  mounted() {
    
  },

  methods: {
    hello() {
      this.$refs.parents_ref.sayHello();
    },
    movePage() {
      this.$router.push("/qna/create")
    }
  },
}
</script>

<style lang="scss" scoped>
.custom-parents {
  background: beige;
  margin: 40px;
}
</style>
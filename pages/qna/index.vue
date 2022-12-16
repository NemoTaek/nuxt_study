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

    <ul>
      <li v-for="(item, index) in formattedList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Parents from "@/components/Parents"
import Child from "@/components/Child"
export default {
  components: {Parents, Child},
  data() {
    return {
      message: '안녕',
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

  computed: {
    formattedList() {
      return this.list.filter(el => el !== 6);
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-parents {
  background: beige;
  margin: 40px;
}
</style>
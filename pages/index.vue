<template>
  <div>
    <input type="text" v-model="inputValue" />
    <h2>컴포넌트 하드코딩</h2>
    <ClassItem :title="'제목'" :message="'내용'"></ClassItem>
    <ClassItem :message="'제목은 정말 없어도 되는걸까?'"></ClassItem>
    <ClassItem></ClassItem>
    <h2>반복문을 사용한 컴포넌트 (따로따로 전달)</h2>
    <ClassItem
      v-for="item in classList"
      :key="item.id"
      :title="item.title"
      :message="item.message"
    />
    <h2>반복문을 사용한 컴포넌트 (객체 한꺼번에 전달)</h2>
    <ClassItem v-for="item in classList" :key="item.id + 'a'" :item="item" />

    <div>
      <button @click="goPage('/product')">push 경로 이동</button>
      <button @click="goReplacePage('/product')">replace 경로 이동</button>
    </div>

    <div>
      <p>A VIEW {{ $store.state.count }}</p>
      <p>B VIEW {{ storeCount }}</p>
			<button @click="plus">+</button>
    </div>
  </div>
</template>

<script>
import ClassItem from "@/components/ClassItem";
export default {
  layout: "default",
  components: { ClassItem },
  data() {
    return {
      inputValue: null,
      classList: [
        {
          id: 1,
          title: "제목반복1",
          message: "내용반복1",
        },
        {
          id: 2,
          title: "제목반복2",
          message: "내용반복2",
          user: {
            id: 1,
            name: "너에겐 특별이 유저정보를 주겠다",
          },
        },
        {
          id: 3,
          title: "제목반복3",
          message: "내용반복3",
        },
      ],
      count: 0,
    };
  },
  mounted() {
    this.$store.dispatch('getCounter');
  },
  methods: {
    goPage(path) {
      this.$router.push({path: path, query: {id: 102}})
    },
    goReplacePage(path) {
      this.$router.replace({path: path, query: {id: 102}})
    },
    plus() {
      this.$store.commit('addCounter', 20);
    },
  },
  computed: {
    storeCount() {
      return this.$store.getters.getIncreaseCount;
    },
  },
  watch: {
    inputValue(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.class-item {
  padding: 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  width: fit-content;
  box-sizing: border-box;
  background: green;
  color: #fff;
}
</style>

<template>
  <div style="padding: 20px">
    <h2>Promise 연습하기</h2>
  </div>
</template>

<script>
import api from "@/mixin/api";

export default {
  mixins: [api],
  data() {
    return {};
  },
  methods: {
    //간단한 예제
    promise() {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(4), reject(new Error());
        }, 1000);
      });

      promise
      .then((response) => response += 3)
      .then((response) => console.log(response))
      .catch((error) => console.log("🚨"));
    },
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
    async getApple() {
      await this.delay(2000);
      return "🍎"
    },
    async getBanana() {
      await this.delay(1500);
      return "🍌"
    },
    async pickAllFruits() {
      // Promise.all은 안에 담긴 것을 실행해서 한꺼번에 보여준다. then 해서 보여주는 것은 배열로 보여준다.
      const response = await Promise.all([this.getApple(), this.getBanana()]);
      return response;
    },
    pickOnlyOne() {
      // Promise.race는 안에 담긴 것들 중 가장 빨리 실행되는거 하나만 출력해서 보여준다.
      return Promise.race([this.getApple(), this.getBanana()]);
    }
  },
  mounted() {
    // 7(바로), 바나나(1.5초), 사과(2초), [사과, 바나나](2초)
    this.promise();
    this.getApple().then(console.log)
    this.pickAllFruits().then(console.log)
    this.pickOnlyOne().then(console.log)
  },
};
</script>

<style lang="scss" scoped></style>

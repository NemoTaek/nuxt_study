<template>
  <div class="todo-list-container">
    <div class="todo-list-container__header">
      <span>Todo List</span>
      <span>{{today}}</span>
    </div>
    <div class="todo-list-container__main">
      <div class="todo-list-container__main__count">
        <!-- 완료 수 / 전체 개수 -->
        {{completeItemCount}} / {{storeTodoList.length}}
      </div>
      <div class="todo-list-container__main__input">
        <!-- input 박스에 작성하고 추가 버튼 누르면 추가 -->
        <input type="text" placeholder="추가할 오늘의 할 일을 작성하세요." v-model="currentTypingTodo">
        <button @click="addTodoListItem">추가</button>
      </div>
      <div class="todo-list-container__main__menu">
        <!-- 정렬, 전체삭제 버튼 -->
        <select v-model="selectedSort" @change="sortList">
          <option value="-created_at" selected>최신순</option>
          <option value="created_at">오래된순</option>
        </select>
        <button @click="clearList">전체 삭제</button>
      </div>
      <div class="todo-list-container__main__list">
        <div class="todo-list-container__main__list__item" v-for="(item, index) in storeTodoList" :key="index" :class="{complete: item.complete}" @click="completeItem(item)">
          <!-- 체크박스, 리스트 항목, x버튼, 생성날짜 -->
            <!-- <div class="todo-list-container__main__list__item__text">
              <label :for="item.id"><input type="checkbox" :id="item.id" v-model="item.complete" :value="item.complete">{{item.title}}</label>
            </div> -->
            <div class="todo-list-container__main__list__item__text">
              {{item.title}}
            </div>
            <div class="todo-list-container__main__list__item__option">
              <button @click="deleteItem(item)">X</button>
              <span>{{item.date}}</span>
            </div>
        </div>
      </div>
    </div>
    <div class="todo-list-container__footer">
      <!-- 뭐쓰지..? -->
      나는 푸터될거야
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      completeCount: 0,
      idCount: 1,
      today: null,
      todoList: [],
      currentTypingTodo: null,
      selectedSort: '-created_at',
    };
  },

  mounted() {
    this.today = this.$dayjs(new Date()).format('YYYY-MM-DD');
  },

  methods: {
    sortList() {
      this.$store.commit('sortTodoListContents', this.selectedSort);
    },
    addTodoListItem() {
      let todoItem = {};
      todoItem.id = this.idCount;
      todoItem.title = this.currentTypingTodo;
      todoItem.date = this.$dayjs(new Date()).format('M-D');
      todoItem.realDate = new Date();
      todoItem.complete = false;
      // this.todoList.push(todoItem)
      this.$store.commit('addTodoListContents', todoItem);
      this.idCount++;
    },
    deleteItem(todoItem) {
      // this.todoList.splice(itemIndex, 1);

      this.$store.commit('deleteTodoListContents', todoItem.id);
    },
    completeItem(todoItem) {
      this.$store.commit('modifyTodoListContents', todoItem);
    },
    clearList() {
      // this.todoList = [];
      this.$store.commit('clearTodoListContents');
    }
  },

  computed: {
    storeTodoList() {
      return this.$store.getters.getTodoListContents;
    },
    completeItemCount() {
      let count = 0;
      for(let i in this.storeTodoList) {
        if(this.storeTodoList[i].complete) count++;
      }
      return count
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-list-container {
  width: 500px;
  border: 1px solid #000000;
  margin: 20px 0 0 20px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__main {
    border-top: 1px solid #000000;
    padding: 10px;

    &__count {
      padding: 5px 0;
    }

    &__input {
      padding: 5px 0;
      height: 30px;
      input {
        width: 87%;
        line-height: 26px;
        padding: 0 3px;
      }
      button {
        width: 10%;
        height: 100%;
      }
    }

    &__menu {
      padding: 5px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {}
    }

    &__list {
      padding: 5px 0;
      border: 1px solid #000000;

      &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;

        &__text {
          display: inline-block;
          width: 90%;
        }
        &__option {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 10%;
          button {
            display: inline-block;
          }
        }
      }
    }
  }

  &__footer {
    border-top: 1px solid #000000;
  }
}

.complete {
  background-color: #EAFBF5;
}
</style>
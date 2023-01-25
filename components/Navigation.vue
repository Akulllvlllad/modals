<template>
  <div class="root">
    <h3 class="title">Группы</h3>
    <ul class="list">
      <li
        class="item"
        v-bind:class="{ active: item === pages.currentPage }"
        v-for="item in pages.all"
        v-on:click="changePage(item)"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
      required: false,
      default: {
        all: [],
      },
    },
    changePage: {},
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.root {
  overflow: hidden;
  background-color: white;
  border-radius: 20px;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.title {
  padding: 1rem 1.5rem;
  margin: 0;
  border-bottom: 1px black solid;
}
.list {
  padding: 1rem 0;
  margin: 0;
  list-style-type: none;
}

.item {
  position: relative;
  cursor: pointer;
  padding: 1rem 1.5rem;
  transition: all 0.5s linear 0s;
  user-select: none;
}
.item::after {
  opacity: 0;
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  background-color: lightblue;
  z-index: 2;
  height: 60%;
  width: 8px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;
}
.active.item::after {
  opacity: 1;
}

.item:hover {
  background-color: antiquewhite;
}
</style>

<template>
  <div class="search">
    <img class="search__icons" src="../assets/icons/search.svg" />
    <input
      placeholder="Искать"
      class="search__input"
      :value="searchTerm"
      @change="(e) => changeSearchTerm(e.target.value)"
    />
    <p
      class="search__delete"
      :class="{ active: searchTerm }"
      @click="changeSearchTerm('')"
    >
      <span>+</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "search",
  components: {},
  props: {
    searchTerm: {
      type: String,
    },
    changeSearchTerm: {},
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
.search {
  border-radius: 16px;
  background: #f1f5ff;
  position: relative;
  width: 100%;
  height: 46px;
  padding: 0rem 50px 0 50px;
}
.search__icons {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(20px, -50%);
}

.search__delete {
  visibility: hidden;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-20px, -50%);
  cursor: pointer;
}
.search__delete > span {
  display: block;
  transform: rotate(45deg);
}

.active.search__delete {
  visibility: visible;
}
.search__input {
  width: 100%;
  height: 100%;
  border: none;
}
.search__input:focus {
  border: none;
  box-shadow: none;
  outline: none;
}
.search__input {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}
</style>

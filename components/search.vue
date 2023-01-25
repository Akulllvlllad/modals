<template>
  <div class="search">
    <input
      class="search__input"
      :value="searchTerm"
      @change="changeSearchTerm"
    />
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

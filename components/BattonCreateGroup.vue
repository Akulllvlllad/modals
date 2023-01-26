<template>
  <button class="button">
    <img src="../assets/icons/add-circle.svg" />

    <span class="button__title">Создать новую группу</span>
  </button>
</template>

<script>
export default {
  name: "BattonCreateGroup",
  components: {},
  props: {},
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
.button {
  display: flex;
  align-items: center;
  background: #43a5d2;
  border-radius: 16px;
  border: none;
  height: 46px;
  cursor: pointer;
  padding: 0 18px;
  justify-content: space-between;
  max-width: 213px;
}
.button__title {
  color: white;
}
</style>

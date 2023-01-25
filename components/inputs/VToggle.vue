<template>
  <div class="toggle" @click="change" :class="{ active: current }">
    <p class="toggle__pen" :class="{ active: current }"></p>
  </div>
</template>

<script>
export default {
  name: "VToggle",
  props: {
    current: {},
    change: {},
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

.toggle {
  width: 60px;
  position: relative;
  height: 30px;
  overflow: hidden;
  border-radius: 100px;
  background-color: grey;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0.1s;
}
.toggle__pen {
  position: absolute;
  height: 26px;
  width: 26px;
  background-color: aqua;
  border-radius: 50%;
  transition: all 0.6s ease-in-out 0s;
  left: 0;
  top: 50%;
  transform: translate(2px, -50%);
}

.active.toggle {
  background-color: aqua;
}
.active.toggle__pen {
  background-color: grey;
  transform: translate(-2px, -50%);

  left: calc(100% - 26px);
}
</style>

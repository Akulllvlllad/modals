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
  width: 44px;
  height: 24px;
  position: relative;

  overflow: hidden;
  border-radius: 100px;
  background-color: #d2d5e0;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0.1s;
}
.toggle__pen {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #fbfbfb;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);

  border-radius: 50%;
  transition: all 0.4s ease-in-out 0s;
  left: 0;
  top: 50%;
  transform: translate(2px, -50%);
}

.active.toggle {
  background-color: #43a5d2;
}
.active.toggle__pen {
  transform: translate(-2px, -50%);

  left: calc(100% - 20px);
}
</style>

<template>
  <div class="vChoice">
    <h3 class="vChoice__title">Тип Группы</h3>
    <div class="vChoice__body">
      <div
        class="vChoice__item"
        @click="change(item.value)"
        v-for="item in list"
      >
        <p class="vChoice__box" :class="{ active: item.value === current }"></p>

        <span class="vChoice__name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VChoice",
  props: {
    list: {
      type: Array,
    },
    current: {
      type: Number,
    },
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
.vChoice {
}

.vChoice__item {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.vChoice__box {
  border: 1.2px solid #d2d5e0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.vChoice__title {
  margin-bottom: 0.8rem;
}

.active.vChoice__box {
  background: url("../../assets/icons/Vector.png") no-repeat 100% 100%;
  background-size: cover;
  border: none;
}
.vChoice__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>

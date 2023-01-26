<template>
  <div @click="isOpen = !isOpen" class="SelectFilterByTime">
    <p class="SelectFilterByTime__title">
      {{ current ? "Сначала старые" : "Сначала новые" }}
    </p>
    <span :class="{ active: isOpen }" class="SelectFilterByTime__array">
      <img src="../assets/icons/array.svg" alt=""
    /></span>
    <div class="SelectFilterByTime__options">
      <div
        v-if="isOpen"
        class="SelectFilterByTime__option"
        v-for="option in options"
        :key="option.value"
        @click="changeTime(option.value)"
      >
        <p
          class="SelectFilterByTime__box"
          :class="{ active: option.value === current }"
        ></p>
        <span>
          {{ option.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectFilterByTime",
  components: {},
  props: {
    current: {
      type: Number,
    },

    changeTime: {
      type: Function,
    },
  },
  data() {
    return {
      isOpen: false,
      options: [
        { value: 0, title: "Сначала новые" },
        { value: 1, title: "Сначала старые" },
      ],
    };
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
.SelectFilterByTime {
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
}

.SelectFilterByTime__title {
  color: #475569;
  mix-blend-mode: normal;
  font-size: 14px;
  line-height: 22px;
}

.SelectFilterByTime__options {
  top: calc(100% + 10px);
  left: calc(0% - 20px);
  position: absolute;
  background-color: white;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
}

.SelectFilterByTime__option {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.SelectFilterByTime__option:hover {
  background: #f9f9f9;
}
.SelectFilterByTime__array {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10px;
  height: 10px;
  transform: rotate(0);
  transition: all 0.3s ease-in-out 0s;
}
.active.SelectFilterByTime__array {
  transform: rotate(180deg);
}
.SelectFilterByTime__box {
  border: 1.2px solid #d2d5e0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.active.SelectFilterByTime__box {
  background: url("../assets/icons/Vector.png") no-repeat 100% 100%;
  background-size: cover;
  border: none;
}
</style>

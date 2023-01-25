<template>
  <article>
    <h3 class="select__name">{{ title }}</h3>

    <div @click="isOpen = !isOpen" class="select">
      <p class="select__title">{{ current || "Select" }}</p>
      <span class="select__reset" @click="change('')">+</span>
      <div class="select__options">
        <p
          v-if="isOpen"
          class="select__option"
          v-for="option in options"
          :key="option"
          @click="change(option)"
        >
          {{ option }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "VSelect",
  props: {
    title: {
      type: String,
      default: "select",
    },
    options: {
      type: Array,
    },
    current: {
      type: String,
    },
    change: {},
  },
  data() {
    return {
      isOpen: false,
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
.select {
  position: relative;
  width: 100%;
  padding: 0.4rem 1rem;
  border: 1px solid black;
  border-radius: 5px;
}

.select__name {
  margin-bottom: 0.8rem;
}
.select__title {
  user-select: none;
}
.select__options {
  position: absolute;
  top: calc(100% + 1px);
  right: 0;
  width: 100%;
  background-color: white;
  z-index: 2;
}
.select__option {
  padding: 0.5rem;
}
.select__option:hover {
  background-color: antiquewhite;
}
.select__reset {
  opacity: 1;
  position: absolute;
  right: 0;
  top: 50%;
  cursor: pointer;
  transform: translate(0, -50%);
}
</style>

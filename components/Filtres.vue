<template>
  <div class="root" :class="{ active: filters.isOpen }">
    <h3 class="title" @click="toggleFilters">Фильтр</h3>

    <div class="table">
      <VSelect
        :title="'Города'"
        :options="options1"
        :current="filters.location"
        :change="changeLocation"
      />
      <div class="verify">
        <span class="verify__title">Группа верефицированна</span>
        <VToggle :current="filters.verify" :change="toggleVerify" />
      </div>
      <VSelect
        :title="'Категория'"
        :options="options1"
        :current="filters.category"
        :change="changeCategory"
      />
      <VChoice
        :list="typeOfGroup"
        :change="changeTypeOfGroup"
        :current="filters.typeOfGroup"
      />
    </div>
  </div>
</template>

<script>
import VSelect from "./inputs/VSelect.vue";
import { options1, typeOfGroup } from "./data/data";
import VToggle from "./inputs/VToggle.vue";
import VChoice from "./inputs/VChoice.vue";
export default {
  name: "Filtres",
  components: {
    VSelect,
    VToggle,
    VChoice,
  },
  props: {
    filters: {
      type: Object,
      required: false,
    },
    changeLocation: {},
    toggleFilters: {},
    toggleVerify: {},
    changeCategory: {},
    changeTypeOfGroup: {},
  },
  data() {
    return {
      options1: options1,
      typeOfGroup: typeOfGroup,
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
.root {
  position: relative;
  overflow: hidden;

  background-color: white;
  border-radius: 20px;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.title {
  user-select: none;

  padding: 1rem 0.5rem;
}

.active .title {
  border-bottom: 1px solid black;
}

.active .table {
  height: 400px;
  padding: 1rem 0.8rem;
}

.table {
  height: 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.verify {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.verify__title {
  font-size: 1rem;
}
</style>

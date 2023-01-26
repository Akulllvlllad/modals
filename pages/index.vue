<template>
  <div class="app">
    <div class="wrapper">
      <Navigation :pages="pages" :changePage="changePage" />
      <Filtres
        :toggleFilters="toggleFilters"
        :filters="filters"
        :changeLocation="changeLocation"
        :toggleVerify="toggleVerify"
        :changeCategory="changeCategory"
        :changeTypeOfGroup="changeTypeOfGroup"
      />
      <search
        :searchTerm="filters.searchTerm"
        :changeSearchTerm="changeSearchTerm"
      />
      <BattonCreateGroup />
      <SelectFilterByTime
        :current="filters.filterByTime"
        :changeTime="changefilterByTime"
      />
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Filtres from "../components/Filtres.vue";
import search from "../components/search.vue";
import BattonCreateGroup from "../components/BattonCreateGroup.vue";
import SelectFilterByTime from "../components/SelectFilterByTime.vue";
export default {
  name: "IndexPage",
  components: {
    Navigation,
    Filtres,
    search,
    BattonCreateGroup,
    SelectFilterByTime,
  },
  data() {
    return {
      pages: {
        currentPage: "Поиск группы",
        all: ["Мои группы", "Рекомендации", "Поиск группы"],
      },
      filters: {
        searchTerm: "",
        isOpen: true,
        location: "",
        verify: false,
        category: "",
        typeOfGroup: 0,
        filterByTime: 0,
      },
    };
  },
  methods: {
    changePage: function (page) {
      this.pages.currentPage = page;
    },
    toggleFilters: function () {
      this.filters.isOpen = !this.filters.isOpen;
    },
    changeLocation: function (newLocation) {
      this.filters.location = newLocation;
    },
    toggleVerify: function () {
      this.filters.verify = !this.filters.verify;
    },
    changeCategory: function (newCategory) {
      this.filters.category = newCategory;
    },
    changeTypeOfGroup: function (newTypeOfGroup) {
      this.filters.typeOfGroup = newTypeOfGroup;
    },
    changeSearchTerm: function (e) {
      this.filters.searchTerm = e;
    },
    changefilterByTime: function (time) {
      this.filters.filterByTime = time;
    },
  },
};
</script>

<style>
.app {
  width: 360px;
  height: 100vh;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>

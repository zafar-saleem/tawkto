<template>
  <div id="category-container">
    <div class="category-info-container">
      <div class="category-info">
      <font-awesome-icon :icon="['fa', this.category.icon]" class="card-icon" />
      <h1 class="secondary-title">{{ this.category.title }}</h1>
      <TimeAgo :updatedOn="this.category.updatedOn" />
      </div>
      <div class="description-container">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'circle-info']" class="card-icon info-icon" />
        </div>
        <span class="category-description">{{ this.category.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import TimeAgo from "components/time-ago/TimeAgo.vue";

export default {
  name: "CategoryInfo",
  components: {
    TimeAgo,
  },
  data() {
    return {
      category: {},
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories () {
      const json = await Axios.get(`http://localhost:9000/api/categories`);
      this.category = this.findCategory(json.data);
    },
    findCategory (categories) {
      return categories.find(category => {
        if (category.id === this.$route.params.id) {
          return category;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
	@import "./CategoryInfo.scss";
</style>
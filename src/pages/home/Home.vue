<template>
  <div id="container">
    <div v-if="categories.length">
      <div v-for="category in categories" :key="category.id">
        <h2>{{ category.title }}</h2>
        <span>{{  category.totalArticle }} articles</span>
        <span>{{ category.updatedOn }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: "Home",
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      const json = await Axios.get("http://localhost:9000/api/categories");
      this.categories = json.data;
    },
  },
};
</script>

<style lang="scss" scoped>
	@import '../../scss/_variables.scss';

	#container{
		// text-align: center;
		font-family: $font-family;
		color: $text-black;
		padding: 20px;

		h1{
			font-style: normal;
			font-weight: bold;
			font-size: 34px;
			line-height: 41px;
		}

		h3{
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 24px;
		}
	}
</style>
<template>
  <div id="container">
    <div v-if="categories.length" class="categories-container">
      <div v-for="category in categories" :key="category.id" v-if="category.enabled === true" class="category-card">
        <font-awesome-icon :icon="['fa', category.icon]" class="card-icon" />
        <h2>{{ category.title }}</h2>
        <span class="article-counter">
          {{ category.totalArticle }}
          <span v-if="category.totalArticle < 2">article</span>
          <span v-if="category.totalArticle > 1">articles</span>
        </span>
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
      this.categories = json.data.sort((a, b) => a.order > b.order ? 1 : -1);
    },
  },
};
</script>

<style lang="scss" scoped>
	@import '../../scss/_variables.scss';

	#container{
		font-family: $font-family;
		color: $text-black;
		padding: 20px;
    max-width: 1000px;
    margin: auto;

    .categories-container {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1em;

      .category-card {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-direction: column;
        width: 315px;
        height: 220px;
        top: 359px;
        left: 148px;
        gap: 0px;
        padding: 1em;
        border: 1px 0px 0px 0px;
        opacity: 0px;
        border-width: 0px, 0px, 0px, 0px;
        border-style: solid;
        border-color: #EEEEEE;
        text-align: center;

        .card-icon {
          width: 43.89px;
          height: 55px;
          gap: 0px;
          opacity: 0px;
          // background: #4EB54826;
          // border: 3px solid #03A84E;
          color: #03A84E;
        }

        .article-counter {
          color: #03A84E;
          margin-bottom: 0.5em;
        }
      }

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
	}
</style>
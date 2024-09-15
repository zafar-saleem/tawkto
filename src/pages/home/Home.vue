<template>
  <div id="container">
    <div v-if="store.categories !== undefined && store.categories.length" class="categories-container">
      <router-link :to="{ name: 'Articles', params: { id: category.id }}" v-for="category in store.categories" :key="category.id" v-if="category.enabled === true" class="category-card">
        <font-awesome-icon :icon="['fa', category.icon]" class="card-icon" />
        <h2 class="primary-title">{{ category.title }}</h2>
        <span class="article-counter">
          {{ category.totalArticle }}
          <span v-if="category.totalArticle < 2">article</span>
          <span v-if="category.totalArticle > 1">articles</span>
        </span>
        <TimeAgo :updatedOn="category.updatedOn" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import { store } from 'store';
import TimeAgo from 'components/time-ago/TimeAgo.vue';

export default {
  name: "Home",
  components: {
    TimeAgo,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      const json = await Axios.get("http://localhost:9000/api/categories");
      store.categories = json.data.sort((a, b) => a.order > b.order ? 1 : -1);
    },
  },
};
</script>

<style lang="scss" scoped>
	@import '../../scss/_variables.scss';
  @import '../../scss/main.scss';

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

      @media screen and (max-width: 540px) {
        display: block;
      }

      .category-card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1em;
        border-style: solid;
        border-color: $light-white;
        background: $white;
        text-align: center;

        @media screen and (max-width: 540px) {
          margin-bottom: 10px;
        }

        .article-counter {
          color: $green;
          margin-bottom: 0.5em;
          font-size: 13px;
          margin: 0;
        }
      }
    }
	}
</style>
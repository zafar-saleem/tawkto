<template>
  <div id="articles-container">
    <ul>
      <li v-for="article in this.articles" v-if="article.status === 'published'">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', article.icon]" class="note-icon" />
        </div>
        <div class="info-container">
          <h2>{{ article.title }}</h2>
          <TimeAgo :updatedOn="article.updatedOn" />
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="arrow-icon note-icon" />
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from 'store';
import Axios from 'axios';
import TimeAgo from 'components/time-ago/TimeAgo.vue';

export default {
  name: "ArticleList",
  props: ["articleList"],
  components: {
    TimeAgo,
  },
  data() {
    return {
      articles: [],
      store,
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      const URL = `http://localhost:9000/api/category/${this.$route.params.id}`;
      const json = await Axios.get(URL);
      this.articles = json.data.map(article => {
        return article;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
	@import "./ArticleList.scss";
</style>
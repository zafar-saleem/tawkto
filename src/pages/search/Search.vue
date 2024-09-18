<template>
  <div id="container">
    <Breadcrumb pageTitle="Search results" />
    <h1 class="secondary-title" v-if="this.searchedItems.length >= 1">Showing results for <span class="focus-text">"{{ this.$route.params.query }}"</span></h1>
    <div id="articles-container">
      <div class="error" v-if="this.searchedItems.length <= 0">
        <font-awesome-icon :icon="['fas', 'search']" class="note-icon" />
        <p class="secondary-title">No search results</p>
        <p>Please, try again or <span>Submit a ticket</span></p>
      </div>
      <ul>
        <li v-for="articles in this.searchedItems" v-show="articles.status === 'published'">
          <div class="icon-container">
            <font-awesome-icon :icon="['fas', articles.icon]" class="note-icon" />
          </div>
          <div class="info-container">
            <h2 class="article-title">{{ articles.title }}</h2>
            <p>
              {{ articles.content.substring(0, 200) }}
              {{
                articles.content.length > 200
                ?
                "..."
                :
                null
              }}
            </p>
          </div>
          <font-awesome-icon :icon="['fas', 'chevron-right']" class="arrow-icon note-icon" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import router from "../../router/";
import { store } from "store";
import Axios from "axios";
import Breadcrumb from "components/breadcrumb/Breadcrumb.vue";

export default {
  name: "Search",
  components: {
    Breadcrumb,
  },
  data () {
    return {
      articles: [],
      searchedItems: [],
    }
  },
  mounted () {
    this.search();
  },
  methods: {
    async search () {
      const URL = `http://localhost:9000/api/category/${this.$route.params.query}`;
      const json = await Axios.get(URL);
      const articles = json.data.find(article => {
        if (article.title.toLowerCase().search(this.$route.params.query.toLowerCase()) === 0) {
          return [article];
        }
      });
      this.searchedItems = [{...articles}];
      console.log(this.searchedItems);
    }
  },
}
</script>
<style lang="scss" scoped>
  @import "../../scss/_variables.scss";
  @import "../../scss/main.scss";
  @import "../category/components/article-list/ArticleList.scss";

  #articles-container {
    .info-container {
      .article-title {
        color: $green;
      }
    }
  }

  .focus-text {
    color: $green;
  }

  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      margin: 0.5em;
    }

    span {
      color: $green;
      cursor: pointer;
    }

    svg {
      width: 100%;
      height: 150px;
    }
  }
</style>
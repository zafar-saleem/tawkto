<template>
  <div id="container">
    <div>
      <Breadcrumb />
      <CategoryInfo />
    </div>
    <div>
      <ArticleList :articleList="this.articles" />
    </div>
  </div>
</template>

<script>
import Breadcrumb from "components/breadcrumb/Breadcrumb.vue";
import CategoryInfo from 'components/category-info/CategoryInfo.vue';
import ArticleList from './components/article-list/ArticleList.vue';
import { store } from 'store';

export default {
  name: "Category",
  components: {
    Breadcrumb,
    CategoryInfo,
    ArticleList,
  },
  data() {
    return {
      articles: [],
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
	@import '../../scss/_variables.scss';

	#container{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1em;
		font-family: $font-family;
		color: $text-black;
		padding: 20px;
    max-width: 1000px;
    margin: auto;

    @media screen and (max-width: 790px) {
      display: block;
    }

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
        border-color: $light-white;
        text-align: center;

        .card-icon {
          width: 43.89px;
          height: 55px;
          gap: 0px;
          opacity: 0px;
          color: $green;
        }

        .article-counter {
          color: $green;
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
<template>
  <div id="breadcrumb-container">
    <router-link :to="{ name: 'Home' }" class="all-list">All categories</router-link>
    <span class="category-name"> > {{ this.pageTitle || store.category.title }}</span>
  </div>
</template>

<script>
import { store } from 'store';

export default {
  name: "Breadcrumb",
  props: ["pageTitle"],
  data() {
    return {
      store,
    };
  },
  mounted() {
    store.getTitle(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
	@import "./Breadcumb.scss";
</style>
<template>
	<div id="header-wrapper">
		<div id="header-text">
			<h1>Knowledge base doesn't have to be boring</h1>
			<h3>Everything you need to manage your messaging</h3>
      <input type="search" name="search" ref="searchValue" v-on:keyup.enter="searchArticle"  placeholder="Search for answers" />
      <button v-on:click="searchArticle">
        <font-awesome-icon :icon="['fa', 'search']" class="card-icon" />
      </button>
		</div>
	</div>
</template>

<script>
import { store } from 'store';
import router from '../../router/';

export default {
  name: "Header",
  data () {
    return {
      store,
      preValue: "",
      temp: [],
    }
  },
  methods: {
    handleSearch () {
      const _searchValue = this.$refs.searchValue.value;
      const _length = store.categories.length;
      
      if (this.temp.length <= 0) this.temp = store.categories;

      if ((_length === 1 && this.preValue !== _searchValue) || !_searchValue) {
        store.categories = this.temp;
        return;
      }
      store.categories = store.categories.find(category => {
        if (category.title.toLowerCase().search(_searchValue.toLowerCase()) === 0) {
          return category;
        }
      });

      if (store.categories === undefined) store.categories = this.temp;
      if (!store.categories.length) store.categories = [{ ...store.categories }];
      this.preValue = _searchValue;
      this.$refs.searchValue.value = "";
    },
    searchArticle () {
      router.push({ name: "Search", params: { query: this.$refs.searchValue.value } });
      this.$refs.searchValue.value = "";
    }
  }
}
</script>

<style lang="scss" scoped>
	@import "./Header.scss";
</style>
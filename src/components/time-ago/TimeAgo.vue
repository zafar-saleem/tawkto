<template>
  <span class="time-ago">{{ this.timeAgo }}</span>
</template>
<script>
  import moment from 'moment';

  export default {
    name: "TimeAgo",
    props: ["updatedOn"],
    data() {
      return {
        timeAgo: "",
      }
    },
    mounted() {
      this.updateTime();
    },
    methods: {
      updateTime() {
        this.timeAgo = moment(this.updatedOn).fromNow();
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "./TimeAgo.scss";
</style>

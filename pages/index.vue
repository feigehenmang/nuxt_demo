<template>
  <div>
    <NuxtLink to="/login">Login</NuxtLink>
    <h2>Index Detail</h2>
    <ul>
      <li v-for="item in movies" :key="item.id">{{item.name}}</li>
    </ul>
    <button @click="getMovie()">click</button>
  </div>
</template>

<script>
  export default {
    asyncData() {

    },
    computed: {
      movies() {
        return this.$store.state.movies;
      }
    },
    methods: {
      getMovie() {
        this.$store.dispatch('getMovies', {})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
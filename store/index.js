export const state = () => ({
  movies: []
})
export const mutations = {
  setMovie(state, newMovie) {
    state.movies = newMovie;
  }
}
export const getters = {
  moviesLength(state) {
    return state.movies.length;
  }
}
export const actions = {
  getMovies(store, param) {
    // console.log(store, param);
    this.$axios.$get('https://jsonplaceholder.typicode.com/users/', param)
    .then(res => {
      console.log(res);
      store.commit('setMovie', res);
    })
  }
}
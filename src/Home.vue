<template>
  <div id="app">
    <Header v-bind:page="page"/>
    <Main v-bind:sm_imgs="sm_imgs" />
    <Footer />
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Main from "./components/Main.vue";
  import Footer from "./components/Footer.vue";
  export default {

    name: 'app',
    data() {
      return{
        sm_imgs: 1,
        page: 1
      }
      },



    components: {Header, Main, Footer}

  }

</script>

<style>
/* @import "assets/styles/style.css"; */

</style>

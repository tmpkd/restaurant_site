<template>
  <div id="app">
    <SiteMenu :titles="titles"/>
    <Main :titles="titles"/>
  </div>
</template>

<script>
import SiteMenu from "@/components/SiteMenu";
import Main from "@/components/Main";
import {Title} from "@/title.js"

export default {
  name: 'App',
  components: {
    Main,
    SiteMenu
  },
  data: function() {
    return {
      titles: [
        new Title("Welcome", "WelcomeSection"),
        new Title("About us", "AboutSection"),
        new Title("Menu", "MenuSection"),
        new Title("Interior", "InteriorSection"),
        new Title("Location", "LocationSection")
      ]
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 10px;
}
</style>

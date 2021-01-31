<template>
  <div>
    <SiteMenu :titles="titles"/>
    <Main :titles="titles"/>
  </div>
</template>

<script>
import Main from "@/components/Main";
import SiteMenu from "@/components/SiteMenu";
import {Title} from "@/title"

export default {
  name: "Appp",
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

<style scoped>

</style>
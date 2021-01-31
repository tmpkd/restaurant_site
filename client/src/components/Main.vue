<template>
  <div>
    <SiteMenu :titles="titles"/>
    <main>
      <section v-for="title in titles" :key="title.id" :id="title.id" class="section hero is-primary is-fullheight">
        <div :id="title.type" class="container">
          <h1 class="heading title is-1">{{title.header}}</h1>
          <component :is="title.type"></component>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import WelcomeSection from "./WelcomeSection";
import MenuSection from "./MenuSection"
import InteriorSection from "./InteriorSection";
import LocationSection from "./LocationSection";
import AboutSection from "./AboutSection";
import SiteMenu from "@/components/SiteMenu";
import {Title} from "@/title";

export default {
  name: "Main",
  components: {
    SiteMenu,
    WelcomeSection,
    MenuSection,
    InteriorSection,
    LocationSection,
    AboutSection,
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
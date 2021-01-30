<template>
  <main>
    <section v-for="title in titles" :key="title.id" :id="title.id" class="section hero is-primary is-fullheight">
      <div :id="title.type" class="container">
        <h1 class="heading title is-1">{{title.header}}</h1>
        <component :is="title.type"></component>
      </div>
    </section>
  </main>
</template>

<script>
import WelcomeSection from "./WelcomeSection";
import MenuSection from "./MenuSection"
import InteriorSection from "./InteriorSection";
import LocationSection from "./LocationSection";
import AboutSection from "./AboutSection";

export default {
  name: "Main",
  components: {
    WelcomeSection,
    MenuSection,
    InteriorSection,
    LocationSection,
    AboutSection,
  },
  props: {
    titles: Array
  }
}
</script>

<style scoped>

</style>
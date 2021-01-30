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
import MenuSection from "@/components/MenuSection"
import InteriorSection from "@/components/InteriorSection";
import LocationSection from "@/components/LocationSection";
import AboutSection from "@/components/AboutSection";

export default {
  name: "Main",
  components: {
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
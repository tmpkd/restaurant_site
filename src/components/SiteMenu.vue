<template>
  <header id="site-header" class="nav is-fixed">
      <div class="menu">
        <scrollactive class="my-nav">
          <ul class="nav-center">
            <li v-for="title in titles" :key="title.id">
              <a :href="'#' + title.type" class="scrollactive-item nav-item">{{ title.header }}</a>
            </li>
          </ul>
        </scrollactive>
      </div>
      <div class="contacts">
        <ul class="contacts">
          <li><a href="tel:+73431234567" class="tel"><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;+7 (343) 123–45–67</a></li>
          <li><a href="https://vk.com/tmpkd/" target="_blank"><i class="fa fa-vk" aria-hidden="true"></i></a></li>
          <li><a href="https://www.instagram.com/tmpkd/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
  </header>
</template>

<script>
export default {
  name: "SiteMenu",
  props: {
    titles: Array
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
div.contacts {
  width: 50%;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul.contacts {
  width: 100%;
  vertical-align: middle;
  text-align: right;
}
ul.contacts li{
  display: inline;
  padding-inline: 2%;
}
a:hover {
  color: black;
}
</style>
<template>
  <div class="iframe-maps">
    <iframe :src="google_maps_url" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>
</template>

<script>
export default {
  name: "LocationSection",
  data: function() {
    return {
      google_maps_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d34912.976488622706!2d60.591774!3d56.84489700000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x76f8aab1e242e945!2z0JHQsNGA0JHQvtGA0LjRgQ!5e0!3m2!1sru!2sru!4v1611961518580!5m2!1sru!2sru"
    };
  }
}
</script>

<style scoped>
.iframe-maps iframe {
  border: none;
  width: 100% !important;
  height: 100% !important;
}
</style>
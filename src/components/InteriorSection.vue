<template>
  <silent-box :gallery="gallery"></silent-box>
</template>

<script>
export default {
  name: "InteriorSection",
  data() {
    return {
      images: [
        "https://avatars.mds.yandex.net/get-altay/998620/2a0000016233c14d2477b041ecc353039c9b/XXXL",
        "https://avatars.mds.yandex.net/get-altay/758053/2a0000016233c149b35f6d013cdf685e7010/XXXL",
        "https://avatars.mds.yandex.net/get-altay/758053/2a0000016233c14ab39094cb24296cae8fe1/XXXL",
        "https://avatars.mds.yandex.net/get-altay/474904/2a0000016233c14bec6ee974512b78aadad4/XXXL",
        "https://avatars.mds.yandex.net/get-altay/1090799/2a0000016233c33e4bf895f6cfee201d87cd/XXXL",
        "https://avatars.mds.yandex.net/get-altay/1025206/2a0000016233c150829635fa4040000bf8b5/XXXL",
        "http://bycenter.ru/upload/iblock/6d7/6d7e638e204f35a30bbae49de09ed1eb.jpg"
      ],
      gallery: [
        {
          src: "https://avatars.mds.yandex.net/get-altay/474904/2a0000016233c14bec6ee974512b78aadad4/XXXL",
          thumbnailWidth: '1200px'
        },
        {
          src: "https://avatars.mds.yandex.net/get-altay/998620/2a0000016233c14d2477b041ecc353039c9b/XXXL",
          thumbnailWidth: '600px'
        },
        {
          src: "https://avatars.mds.yandex.net/get-altay/758053/2a0000016233c149b35f6d013cdf685e7010/XXXL",
          thumbnailWidth: '600px'
        },
        {
          src: "https://avatars.mds.yandex.net/get-altay/758053/2a0000016233c14ab39094cb24296cae8fe1/XXXL",
          thumbnailWidth: '1200px'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
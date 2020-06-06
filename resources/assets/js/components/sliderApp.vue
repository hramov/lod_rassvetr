<template>
	<v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: 'https://mtdata.ru/u18/photo4484/20308524103-0/original.jpg',
          },
          {
            src: 'https://prigorod.info/images/places/altay/prirodnye-ob-ekty/katunskiy-zapovednik/2.jpg',
          },
          {
            src: 'https://a.d-cd.net/a888685s-1920.jpg',
          },
        ],
      }
    },
}
</script>
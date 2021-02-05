<template>
  <div class="q-gutter-md row flex-center">
    <q-carousel
      v-show="slides"
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      infinite
      arrows
      :autoplay="2500"
      class="carousel bg-dark"
    >
      <q-carousel-slide
        class="column flex-center"
        v-for="slide in slides"
        :key="slide.id"
        :name="slide.id"
      >
      <img
        :src="slide.imageLink"
        class="col-10 col-md-10 col-xs-12"
      />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      slide: 1,
      slides: null
    }
  },
  beforeCreate () {
    return this.$axios.get('https://nwc3iihrp1.execute-api.us-east-2.amazonaws.com/Prod/images/get/all-in-one-auto/website').then((response) => {
      if (response.data.type === 'success') {
        this.slides = response.data.payload
        console.log(response.data.payload)
      }
    })
  }
}
</script>

<style lang="scss">
</style>

<template>

  <q-page-container class="q-pt-xl">
    <h1 class="text-grey-3 text-center text-weight-bold header-1"
    >
      {{ title }}
    </h1>
    <div
      class="row q-pt-xl content-center desktop-only mobile-hide"
      style="background-color:#262626;"
    >
      <div
        v-for="slide in slideLanguage"
        :key="slide.id"
        :name="slide.id"
        class="col flex flex-center q-pt-xl"
      >
        <img
          :src="slide.imagePath"
          class="team-img q-mt-xl q-mb-xl"
        >
        <div class="custom-caption bg-primary q-mb-xl" >
          <p class="text-grey-2">
            {{ slide.name }}
          </p>
          <p class="text-grey-2" style="font-size: 1.25rem;">
            {{ slide.position }}
          </p>
        </div>
      </div>
    </div>

    <q-carousel
      v-model="slide"
      swipeable
      animated
      autoplay
      navigation
      infinite
      control-color="white"
      class="mobile-only desktop-hide"
      style="background-color:#262626; height:600px;"
    >
      <q-carousel-slide
        v-for="slide in slideLanguage"
        :key="slide.id"
        :name="slide.id"
        class="column flex-center"
      >
        <img
          :src="slide.imagePath"
          class="q-pa-md team-img"
        >
        <div class="custom-caption bg-primary" >
          <p class="text-grey-2">{{ slide.name }}</p>
          <p class="text-grey-2" style="font-size: 1.25rem;">{{ slide.position }}</p>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page-container>

</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  },
  props: {
    teamData: Object,
    selectedLang: String
  },
  computed: {
    slideLanguage () {
      return this.selectedLang === 'es' ? this.teamData.es.teamSlides : this.teamData.en.teamSlides
    },
    title () {
      return this.selectedLang === 'es' ? this.teamData.es.title : this.teamData.en.title
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

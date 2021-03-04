<template>
  <div>
    <h1 class="text-gradient text-center text-weight-bold header-1">
      {{ title }}
    </h1>
    <div class="flex flex-center row q-gutter-md">
      <div
        v-for="slide in slideLanguage"
        :key="slide.id"
        :name="slide.id"
        class="text-center col-xl-3 col-lg-4 col-md-6 col-10"
      >
        <img
          :src="'/statics/'+ slide.imagePath"
          class="team-img"
        />
        <div class="team-block gradient q-mb-xl  col-10" >
          <div class="text-grey-2" style="font-size: 2.5em;">
            {{ slide.name }}
          </div>
          <p class="text-grey-2 q-pa-md" style="font-size: 1.5rem;">
            {{ slide.position }}
          </p>
        </div>
      </div>
    </div>
</div>
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
    },
    imagePath (path) {
      return '/statics/' + path
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="desktop">
      <img src="wave.svg" style="margin-top:-1px;"/>
      <h1
        class="text-gradient text-center text-weight-bold header-1"
        style="padding-top:2em;"
      >
        {{ title }}
      </h1>

      <div
        class="text-grey-7 about-description"
      >
        {{ description }}
      </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  props: {
    aboutUsData: Object,
    selectedLang: String
  },
  computed: {
    aboutLanguage () {
      return this.selectedLang === 'es' ? this.aboutUsData.es.cards : this.aboutUsData.en.cards
    },
    title () {
      return this.selectedLang === 'es' ? this.aboutUsData.es.title : this.aboutUsData.en.title
    },
    description () {
      return this.selectedLang === 'es' ? this.aboutUsData.es.description : this.aboutUsData.en.description
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

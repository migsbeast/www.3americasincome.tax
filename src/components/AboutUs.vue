<template>
  <q-page-container>
      <h1
        class="text-grey-9 text-center text-weight-bold header-1"
      >
        {{ title }}
      </h1>

      <div
        class="row inline q-pa-lg text-center text-secondary description-section"
      >
        {{ description }}
      </div>

      <!-- <div class="row flex-center items-stretch q-pa-xl cards-section">
        <Card
          v-for="card in aboutLanguage"
          :key="card.id"
          v-bind="card"
          class="aboutus-card"
        />
      </div> -->

  </q-page-container>
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

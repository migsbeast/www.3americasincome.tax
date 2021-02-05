<template>
  <q-page class="q-pt-lg">
    <h1
      class="text-grey-3 text-center text-weight-bold title-shadow header-1"
    >
      {{ title }}
    </h1>

    <div id='serviceCard' class='row flex-center items-stretch'>
      <Card
        v-for="card in languageCards"
        :key="card.id"
        v-bind="card"
        :selectedLang="selectedLang"
        class="service-card"
      >
      </Card>
    </div>
  </q-page>
</template>

<script>
import Card from 'components/Card'
export default {
  name: 'Services',
  props: {
    serviceData: Object,
    selectedLang: String
  },
  computed: {
    languageCards () {
      return this.selectedLang === 'es' ? this.serviceData.es.cards : this.serviceData.en.cards
    },
    title () {
      return this.selectedLang === 'es' ? this.serviceData.es.title : this.serviceData.en.title
    }
  },
  components: {
    Card
  }
}
</script>

<style>

</style>

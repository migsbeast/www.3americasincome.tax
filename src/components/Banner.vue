<template>
  <div class="row flex-center text-center text-secondary gradient" style="padding-top: 8em; padding-bottom: 64px;">
      <div class="text-center text-h3 text-weight-bold header-1 col-12 q-mb-xl"
      style="color:white!important;">
        {{ bannerTitle }}
      </div>
      <Card
        v-for="card in bannerLanguage"
        v-bind="card"
        :key="card.id"
        @click="handleClick(card.id)"
        class="banner-card"
      />

  </div>
</template>

<script>
import Card from 'components/Card'
export default {
  name: 'Banner',
  props: {
    bannerData: Object,
    selectedLang: String
  },
  components: {
    Card
  },
  methods: {
    handleClick (id) {
      this.$emit('click', id)
    }
  },
  computed: {
    bannerLanguage () {
      return this.selectedLang === 'es' ? this.bannerData.es.cards : this.bannerData.en.cards
    },
    bannerTitle () {
      return this.selectedLang === 'es' ? this.bannerData.es.label : this.bannerData.en.label
    }
  }
}
</script>

<style lang="scss">

</style>

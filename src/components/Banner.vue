<template>
  <div class="row flex-center text-center text-secondary gradient" style="padding-top: 64px; padding-bottom: 64px;">

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
    }
  }
}
</script>

<style lang="scss">

</style>

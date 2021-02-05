<template>
  <q-page-container>
    <div class="row q-gutter-md flex-center q-my-xl">
      <q-card
        v-for="card in portfolioData"
        :key="card.id"
        class="image-post"
      >
          <q-img
            :src="card.imagePath"
            class="image-post"
            @click='goToLink(card.permalink)'
          >
            <div v-if="card.hover" class="absolute-full text-subtitle2 flex flex-center">
              <q-icon
                size="75px"
                name= "link"
                class="row"
                color="primary"
              />
            </div>
          </q-img>
      </q-card>
    </div>
  </q-page-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    portfolioData: Array
  },
  methods: {
    ...mapMutations('portfolio', ['changeHover']),
    goToLink (link) {
      window.open(link)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

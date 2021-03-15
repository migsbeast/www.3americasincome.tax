<template>
  <div>
    <q-carousel
      animated
      infinite
      swipeable
      control-color="white"
      arrows
      transition-prev="scale"
      transition-next="scale"
      v-model="slide"
      class="gradient slider"
    >

      <q-carousel-slide
        v-for="slide in slideLanguage"
        :key="slide.id"
        :name="slide.id"
        class="text-center container text-grey-1"
      >
          <div v-if="slide.title || slide.title1 || slide.welcomeMsg">
            <q-img class="slider-img col-4" :src="'statics/' + slide.imagePath"/>
            <div class="header-1">
              <div>
                {{ slide.welcomeMsg }}
              </div>
              <div>
                {{ slide.title }}
              </div>
              <div class="welcome">
                {{ slide.title1 }}
              </div>
              <div style="background: rgba( 25, 118, 210, 0.8);">
                {{ slide.title2 }} {{ slide.title3 }}
              </div>
            </div>
          </div>

          <div class="header-2">
            {{ slide.descriptionTitle }}
          </div>

          <div class="subtitle-1">
            {{ slide.subtitle1 }}
            <br>
            {{ slide.subtitle2 }}
            <br>
            {{ slide.subtitle3 }}
          </div>

          <div class="header-3">
            {{ slide.description1 }}
            <br>
            {{ slide.description2 }}
          </div>

          <q-btn
            target="_blank"
            :href="slide.buttonLink"
            :label="slide.buttonLabel"
            type="a"
            color="primary"
            style="width:250px"
            v-if="slide.buttonLink"
          />
          <q-btn
            :label="slide.buttonLabel2"
            color="secondary"
            v-if="slide.buttonLink2 === 'https://goo.gl/maps/6EmhihQ1iK7Xm6SQ7/'"
            target="_blank"
            type="a"
            :href="slide.buttonLink2"
            class="text-grey-1 q-ma-md"
            style="width:250px"
          />
          <q-btn
            :label="slide.buttonLabel"
            color="primary"
            v-if="slide.buttonLink === ''"
            @click="handleClick(slide.id)"
            style="margin-top:10rem;width:250px"
          />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    sliderData: Object,
    selectedLang: String
  },
  data () {
    return {
      slide: 1
    }
  },
  methods: {
    handleClick (id) {
      console.log('emit button:', id)
      this.$emit('sliderButtonClick', id)
    }
  },
  computed: {
    slideLanguage () {
      return this.selectedLang === 'es' ? this.sliderData.es.slides : this.sliderData.en.slides
    }
  }
}
</script>

<style lang="scss">

</style>

<template>
  <div style="margin-top:78px">
    <q-carousel
      animated
      infinite
      swipeable
      control-color="primary"
      navigation
      arrows
      transition-prev="scale"
      transition-next="scale"
      v-model="slide"
      style="height:50rem;background-color:#E4F3EB;"
    >

      <q-carousel-slide
        :style="{ backgroundImage: `${slide.backgroundImage}` }"
        v-for="slide in slideLanguage"
        :key="slide.id"
        :name="slide.id"
        class="column justify-center content-center text-center"
      >
        <div class="background-block">

          <div
            class="full-width q-gutter-y-lg"
          >

            <div class="header-1 text-grey-1">
              <span class="text-primary q-pb-xl">
                {{ slide.welcomeMsg }}
              </span>
              <q-space/>
              {{ slide.title }}
            </div>

            <div class="header-2 text-primary">
              {{ slide.descriptionTitle }}
            </div>

            <div class="header-3 text-grey-1">
              {{ slide.description }}
            </div>

            <div class="header-3 text-grey-1">
              {{ slide.description2 }}
            </div>

            <div class="header-3 text-secondary q-pt-xl">
              <strong>{{ slide.descriptionYellow }}</strong>
            </div>

            <div class="caption text-primary q-mt-none">
              {{ slide.restrictions }}
            </div>

            <q-space/>
            <q-btn
              target="_blank"
              :href="slide.buttonLink"
              :label="slide.buttonLabel"
              type="a"
              color="primary"
              style="width:250px"
              v-if="slide.buttonLink"
              class="q-ma-md"
            />
            <q-btn
              :label="slide.buttonLabel2"
              color="secondary"
              v-if="slide.buttonLink2 === 'https://goo.gl/maps/6EmhihQ1iK7Xm6SQ7/'"
              target="_blank"
              type="a"
              :href="slide.buttonLink2"
              class="text-grey-9 q-ma-md"
              style="width:250px"
            />
            <q-btn
              :label="slide.buttonLabel"
              color="primary"
              v-if="slide.buttonLink === ''"
              @click="handleClick(slide.id)"
              style="margin-top:10rem;width:250px"
            />
          </div>
        </div>
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

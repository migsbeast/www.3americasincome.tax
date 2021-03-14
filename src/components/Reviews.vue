<template>
  <div class="flex flex-center column review" style="background: rgba( 25, 118, 210, 0.1);">
    <div class="header-1 text-gradient text-center">{{ title }} </div>
    <div class="col">
      <div class="flex flex-center row items-stretch">
        <div id="map" class="desktop-hide mobile-hide"></div>
        <q-card
          v-for="review in reviewData"
          :key="review.author_name"
          class="col-9 col-sm-6 col-md-3 q-ma-lg"
        >
          <q-card-section class="bg-primary">
            <div class="text-h6 text-white">
              <img align="right" :src='review.profile_photo_url' height=50rem width=50rem/>
              {{ review.author_name }}
            </div>
            <q-rating readonly v-model='review.rating' :max="5" size="medium"/>
            <div class="text-subtitle2 text-white">{{ review.relative_time_description }}</div>
          </q-card-section>
          <q-separator dark />
          <q-card-section class="text-grey-9">
            <div v-if='review.showMore === true || review.text.length<150' style="font-size:20px;"> {{ review.text  }} </div>
            <div v-else> {{ review.text.substr(0,150)+'...' }} </div>
            <q-btn
              flat
              label="Read More"
              class="bg-primary text-white"
              v-if='review.text.length>150'
              v-show='!review.showMore'
              @click='showMore(review)'
              />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import gmapsInit from 'src/utils/greviews'
export default {
  name: 'Reviews',
  data () {
    return {
      review_slide: '1',
      reviewData: []
    }
  },
  props: {
    toolBarData: Object,
    selectedLang: String
  },
  methods: {
    placesService (places, status) {
      this.reviewData = places.reviews
      console.log(this.reviewData)
      this.reviewData.sort(this.sortbyNewest).splice(3, 3)
      this.reviewData.forEach(review => {
        review.showMore = false
      })
    },
    sortbyNewest (a, b) {
      var dateA = new Date(a.time).getTime()
      var dateB = new Date(b.time).getTime()
      return dateA < dateB ? 1 : -1
    },
    showMore (review) {
      var modRev = review
      modRev.showMore = !review.showMore
      var idx = this.reviewData.indexOf(review)
      this.$set(this.reviewData, idx, modRev)
    }
  },
  computed: {
    title () {
      return this.selectedLang === 'es' ? this.toolBarData.es.tabs[4].label : this.toolBarData.en.tabs[4].label
    }
  },
  async mounted () {
    try {
      const google = await gmapsInit()
      var map = new google.maps.Map(document.getElementById('map'), { center: { lat: 29.8419388, lng: -95.35828 }, zoom: 22 })
      var request = {
        placeId: 'ChIJZ7QetuS3QIYRnG4QTrQd3IM',
        fields: ['reviews']
      }
      var service = new google.maps.places.PlacesService(map)
      service.getDetails(request, this.placesService)
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style>
</style>

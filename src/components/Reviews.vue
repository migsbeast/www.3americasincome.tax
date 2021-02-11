<!-- <template>
  <q-page-container>

    <div class="row flex-center items-stretch">
      <div id="map" class="desktop-hide mobile-hide"></div>
      <q-card
        v-for="review in reviewData"
        :key="review.author_name"
        class="col-lg-4 col-xs-11 bg-dark text-white q-ma-lg"
      >
        <q-card-section class="col-6 bg-grey">
          <div class="text-h6">
            <img align="right" :src='review.profile_photo_url' height=50rem width=50rem/>
            {{ review.author_name }}
          </div>
          <q-rating readonly v-model='review.rating' :max="5" size="medium"/>
          <div class="text-subtitle2">{{ review.relative_time_description }}</div>
        </q-card-section>
        <q-separator dark />
        <q-card-section>
          <div v-if='review.showMore === true || review.text.length<150'> {{ review.text  }} </div>
          <div v-else> {{ review.text.substr(0,150)+'...' }} </div>
          <q-btn
            flat
            label="Read More"
            class="bg-primary"
            v-if='review.text.length>150'
            v-show='!review.showMore'
            @click='showMore(review)'
            />
        </q-card-section>
      </q-card>
    </div>

  </q-page-container>
</template>

<script type="text/javascript">
import gmapsInit from 'src/utils/greviews'
export default {
  name: 'Testimonial',
  data () {
    return {
      review_slide: '1',
      reviewData: []
    }
  },
  methods: {
    placesService (places, status) {
      this.reviewData = places.reviews
      this.reviewData.sort(this.sortbyNewest).splice(4, 1)
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
  async mounted () {
    try {
      const google = await gmapsInit()
      var map = new google.maps.Map(document.getElementById('map'), { center: { lat: 29.8419388, lng: -95.35828 }, zoom: 22 })
      var request = {
        placeId: 'ChIJ7SR8rNC5QIYRhaJzAB1a4XI',
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

 -->
<template>
  <q-card>
    <div class='pricing' id='id_pricing'>
      <div class='' style='background-color: #000000ad !important;'>
          <div class='row'>
            <div class='col-md-12 col-lg-12 col-xs-12 col-sm-12'>
              <h5 class='text-center text-white'>{{ title }}
                <br>
                <span
                  class='text-center text-grey text-h6'>{{ titleDescription }}</span>
              </h5>
            </div>
          </div>
          <div class='row q-col-gutter-sm q-px-xl'>
            <PricingCard
              v-for="card in cards"
              :key="card.id"
              v-bind="card"
            />
          </div>
        <br>
        <br>
      </div>
    </div>
  </q-card>
</template>

<script>
import PricingCard from 'components/PricingCard'
export default {
  name: 'Pricing',
  props: {
    title: String,
    titleDescription: String,
    cards: Array
  },
  components: {
    PricingCard
  }
}
</script>

<style>

</style>

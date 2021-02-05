<template>
    <q-card
      @click="handleClick"
      class="object-contain text-center box-shadow q-ma-sm items-stretch"
      style="border-radius: 20px;"
    >
      <q-card-section
        class="px-20" transition="nudge-in"
        v-if="imagePath"
      >
        <img
          :class="caption ? 'igImage':'responsive-img'"
          :src="'statics/'+ imagePath"
        >
      </q-card-section>

      <q-card-section
        v-if="services"
      >
          <p class="text-grey-3 text-h6 text-weight-bold title-red-tag">
            {{ title }}
          </p>

          <div class="text-grey-9 text-h6 text-weight-bold q-pb-none">
            {{ subtitle }}
          </div>
      </q-card-section>

      <q-card-section
        v-if="(title && icon) || description"
        class="bg-primary"
      >
          <q-icon
            v-if="icon"
            size="75px"
            :name= "icon"
          />
          <p class="text-white text-h6">
            {{ title }}
          </p>

      </q-card-section>

      <q-card-section
        v-if="simpleCaption"
        class="row flex-center igCaption q-px-8 q-py-4 text-white"
      >
        <p style="height:9.5rem"> {{ simpleCaption }} </p>
        <q-btn
          class="q-mb-8 igBtn self-end"
          type="a"
          target="_blank"
          :href="link"
          color="primary"
          style="background-color:white;"
          round icon="link"
        />
      </q-card-section>

      <q-card-section
        v-if="description"
        class="text-grey-9"
      >
        {{ description }}
      </q-card-section>

      <q-card-section v-if="services">
        <div
          class='column'
          v-for="service in services"
          :key="service.id"
        >
          <li class="text-left q-pt-sm text-h6 text-grey-9 description-list">
            + {{ service.serviceDescription }}
          </li>
        </div>
      </q-card-section>
    </q-card>
</template>
<script>
export default {
  name: 'Card',
  props: {
    id: String,
    icon: String,
    title: String,
    subtitle: String,
    estitle: String,
    caption: String,
    description: String,
    link: String,
    imagePath: String,
    themeColor: String,
    selectedLang: String,
    services: Array,
    esservices: Array
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  },
  computed: {
    simpleCaption () {
      if (this.caption && this.caption.includes('#')) {
        var simpleCaption = this.caption.substring(0, this.caption.indexOf('#'))
        console.log(simpleCaption)
        return simpleCaption
      } else {
        return this.caption
      }
    }
  }
}
</script>
<style lang="scss">

</style>

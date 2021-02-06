<template>
  <div>
      <div class="text-grey-9 text-center q-mb-md">
        <p style="font-size:1.5rem">3 Americas Income Tax Services</p>
        <p> 7515 Airline Dr. Ste. 3 Houston, TX 77037 </p>
        <q-list class="column flex-center" color="acent">
          <q-item class="subtitle2 text-bold">{{ footerLanguage.hours }}</q-item>
          <q-item>{{ footerLanguage.weekday }}</q-item>
          <q-item>{{ footerLanguage.weekend }}</q-item>
        </q-list>
      </div>
      <div class="text-center q-mb-lg text-grey-4"
      >
        <p>
          <q-icon name="copyright" />
          All Rights Reserved. 2021
        </p>
    </div>

    <q-footer class="flex flex-center desktop-hide gradient">
      <div id="business-info" class="text-center col-3">
        <div class="row">
          <q-btn
            type=a
            href="tel:8325826067"
            icon="phone"
            color="white"
            flat
          />
          <q-btn
            type=a
            href="https://goo.gl/maps/UVQ9xicgCJ2wZUyd6"
            icon="pin_drop"
            color="white"
            target="_blank"
            flat
          />
          <q-btn
            type="a"
            href="https://www.facebook.com/3americas.srvcs/"
            icon="ion-logo-facebook"
            class="white"
            target="_blank"
            flat
          />
        </div>
      </div>
<!--       <div class="text-right text-grey-4 q-mb-xs q-mt-md col-3">
        <p class="text-h7 q-mb-sm">
          Powered by
        </p>
        <img
          src="public/logo-desktop.png"
          style="height: 45px; width: auto;"
          @click="goToLink('https://www.cleancode.llc')"
        >
        <p>
          <q-icon name="copyright" />
          <a target="_blank" href="https://www.cleancode.llc"> All Rights Reserved. 2020</a>
        </p>
      </div> -->
    </q-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      en: {
        hours: 'HOURS',
        weekday: 'MONDAY - FRIDAY:  8AM-6PM',
        weekend: 'SATURDAY       :  9AM-2PM',
        call: 'CALL NOW',
        directions: 'DIRECTIONS'

      },
      es: {
        hours: 'HORAS',
        weekday: 'LUNES - VIERNES:  8AM-6PM',
        weekend: 'SABADO         :  9AM-2PM',
        call: 'LLAMANOS',
        directions: 'DIRECCIONES'
      }
    }
  },
  props: {
    selectedLang: String
  },
  computed: {
    footerLanguage () {
      return this.selectedLang === 'es' ? this.es : this.en
    }
  },
  methods: {
    goToLink (link) {
      window.open(link)
    }
  }
}
</script>

<style>
a, a:active, a:visited {
  color: white;
}
a:hover {
  color: #00A79D;
}
</style>

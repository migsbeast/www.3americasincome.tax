<template>
  <div>
      <div class="text-grey-9 text-center q-mb-md">
        <p style="font-size:1.5rem">3 Americas Income Tax Services</p>
        <p> 7515 Airline Dr. Ste. 3 Houston, TX 77037 </p>
        <q-list class="column flex-center" color="acent">
          <q-item class="subtitle2 text-bold">{{ footerLanguage.hours }}</q-item>
          <q-item>{{ footerLanguage.weekday }}</q-item>
          <q-item>{{ footerLanguage.weekend }}</q-item>
          <q-item>{{ footerLanguage.sunday }}</q-item>
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
            href="tel:2819991920"
            icon="phone"
            color="white"
            flat
          />
          <q-btn
            type=a
            href="https://goo.gl/maps/t1D4RXzp793SxbfK7"
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
        weekday: 'MONDAY - FRIDAY:  9AM-7PM',
        weekend: 'SATURDAY       :  10AM-4PM',
        sunday: 'SUNDAY          :  12PM-4PM',
        call: 'CALL NOW',
        directions: 'DIRECTIONS'

      },
      es: {
        hours: 'HORAS',
        weekday: 'LUNES - VIERNES:  9AM-7PM',
        weekend: 'SABADO         :  10AM-4PM',
        sunday: 'DOMINGO         :  12-4PM',
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

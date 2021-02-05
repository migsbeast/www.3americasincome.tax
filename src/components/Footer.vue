<template>
  <div>
    
      <div class="text-white text-center q-mb-md">
        <p style="font-size:1.5rem">All In One Automotive</p>
        <p>9001 W Hardy ST. Houston, TX 77022</p>
        <q-list class="column flex-center" color="acent">
          <q-item class="subtitle2 text-bold">{{ footerLanguage.hours }}</q-item>
          <q-item>{{ footerLanguage.weekday }}</q-item>
          <q-item>{{ footerLanguage.weekend }}</q-item>
        </q-list>
      </div>
      <div id="business-info" class="flex-center text-center q-mb-md">
        <q-list>
            <div>
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
                color="white"
                icon="pin_drop"
                target="_blank"
                flat
              />
              <q-btn
                type="a"
                href="https://www.facebook.com/allinoneautomotive1/"
                name="facebook"
                icon="ion-logo-facebook"
                target="_blank"
                color="white"
                flat
              />
              <q-btn
                type="a"
                href="https://www.instagram.com/allinoneautomotive1/"
                icon="ion-logo-instagram"
                color="white"
                target="_blank"
                flat
              />
            </div>
        </q-list>
      </div>
      <div class="text-center q-mb-lg text-grey-4"
      >
        <p class="text-h7 q-mb-md">
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
    </div>

    <q-footer class="flex flex-center row mobile-hide q-py-md q-pb-xl">
      <div
        class="text-white subtitle q-pt-sm q-mb-xs col-3"
        style="border-radius:20px;"
      >
        <q-list style="margin-top:none">
          <q-item class="subtitle2 text-bold">{{ footerLanguage.hours }}</q-item>
          <q-item>{{ footerLanguage.weekday }}</q-item>
          <q-item>{{ footerLanguage.weekend }}</q-item>
        </q-list>
      </div>
      <div id="business-info" class="text-center col-3">
        <div class="text-white text-h6">
          <div class="q-mt-lg ">All In One Automotive</div>
          <p>9001 W Hardy ST. Houston, TX 77022</p>
        </div>
        <q-list class="text-white">
          <div class="q-pt-sm">
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
              href="https://www.facebook.com/allinoneautomotive1/"
              icon="ion-logo-facebook"
              target="_blank"
              color="white"
              flat
            />
            <q-btn
              type="a"
              href="https://www.instagram.com/allinoneautomotive1/"
              icon="ion-logo-instagram"
              color="white"
              target="_blank"
              flat
            />
          </div>
        </q-list>
      </div>
      <div class="text-right text-grey-4 q-mb-xs q-mt-md col-3">
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
      </div>
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

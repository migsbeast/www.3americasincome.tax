<template>
  <q-layout view="lHh lpr lFf">
    <ToolBar
      :toolBarData="toolBarData"
      @tabClicked="tabClicked"
      @changeLanguage="changeLanguage"
      @updateDialogState="updateLoginDialogState"
    />
    <SigninDialog
      :signInDialog="signInDialog"
      @updateDialogState="updateLoginDialogState"
    />
     <Slider
      id="id_home"
      :sliderData="sliderData"
      :selectedLang="toolBarData.selectedLang"
      @sliderButtonClick="sliderButtonClick"
    />
    <!-- ANIMATED BUTTON -->
    <div
      class="flex flex-center gradient" style="padding-top:12%;"
      @click="goToCard('id_about_us')">
      <div
        class="bounce text-white"
        style="border-radius:100%; padding-left: none;"
      >
        <q-icon
          class="text-white"
          name="arrow_drop_down_circle"
          size="lg"
        />
      </div>
    </div>
    <Banner
      id="id_services"
      :bannerData="bannerData"
      :selectedLang="toolBarData.selectedLang"
      @click="goToCard"
    />

    <AboutUs
      id="id_about_us"
      :aboutUsData="aboutUsData"
      :selectedLang="toolBarData.selectedLang"
    />
    <Footer
      :selectedLang="toolBarData.selectedLang"
    />
    <Contact
      id="id_contact_us"
      :selectedLang="toolBarData.selectedLang"
      :contactDialog="contactDialog"
      @submitContact="submitContact"
      @updateDialogState="updateContactDialogState"
    />

<!--     <Team
      id="id_team"
      :teamData="teamData"
      :selectedLang="toolBarData.selectedLang"
    />
    <Reviews
      id="id_testimonial"
    /> -->

    <!-- <q-btn
      round
      id="fixedButton"
      class="bg-blue text-white q-mb-md q-mr-md"
      icon="message"
      @click="contactDialog = true"
    /> -->
  </q-layout>
</template>

<script>
import ToolBar from 'components/ToolBar'
import Banner from 'components/Banner'
import Slider from 'components/Slider'
import AboutUs from 'components/AboutUs'
import SigninDialog from 'components/Auth/SigninDialog'
// import Services from 'components/Services'
import Contact from 'components/Contact'
// import Team from 'components/Team'
// import Reviews from 'components/Reviews'
import Footer from 'components/Footer'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'PageIndex',
  data () {
    return {
      contactDialog: false,
      signInDialog: false
    }
  },
  components: {
    ToolBar,
    AboutUs,
    Banner,
    Slider,
    Footer,
    SigninDialog,
    // Services,
    Contact
    // Team,
    // Reviews
  },
  methods: {
    ...mapActions('portfolio', ['loadIgPics']),
    ...mapActions('contact', ['submitContactData']),
    ...mapMutations('contact', ['setName', 'setEmail', 'setPhone', 'setMessage']),
    ...mapMutations('toolBar', ['setBgColor', 'setThemeColor', 'setSelectedTab', 'setLanguage']),
    submitContact (form) {
      console.log(form)
      this.submitContactData(form)
    },
    tabClicked (id, referenceElement) {
      this.setSelectedTab(id)
      if (id === 't_5') {
        this.contactDialog = true
      } else {
        const el = document.getElementById(referenceElement)
        const target = getScrollTarget(el)
        const offset = el.offsetTop + 3
        const duration = 900
        setScrollPosition(target, offset, duration)
      }
    },
    changeLanguage (selectedLanguage) {
      this.setLanguage(selectedLanguage)
    },
    goToCard (title) {
      const el = document.getElementById('id_services')
      const target = getScrollTarget(el)
      const offset = el.offsetTop + 3
      const duration = 900
      setScrollPosition(target, offset, duration)
    },
    updateLoginDialogState (state) {
      this.signInDialog = state
    },
    updateContactDialogState (state) {
      this.contactDialog = state
    },
    sliderButtonClick (id) {
      if (id === 1) {
        this.contactDialog = true
      }
    }
  },
  created () {
    this.loadIgPics()
  },
  computed: {
    ...mapGetters('aboutUs', ['aboutUsData']),
    ...mapGetters('toolBar', ['toolBarData']),
    ...mapGetters('services', ['serviceData']),
    ...mapGetters('portfolio', ['portfolioData']),
    ...mapGetters('contact', ['contactName', 'contactEmail', 'contactPhone', 'contactMessage']),
    ...mapGetters('banner', ['bannerData']),
    ...mapGetters('slider', ['sliderData']),
    ...mapGetters('team', ['teamData'])
  }
}
</script>

<style>
#fixedButton {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 0;
}
/*SRC: https://codeconvey.com/pure-css-arrow-down-bouncing-animation/*/
.bounce {
  -moz-animation: bounce 3s infinite;
  -webkit-animation: bounce 3s infinite;
  animation: bounce 3s infinite;
}
@-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
</style>

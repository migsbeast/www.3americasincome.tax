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
</style>

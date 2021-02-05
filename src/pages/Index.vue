<template>
  <q-layout view="lHh lpr lFf">
    <ToolBar
      :toolBarData="toolBarData"
      @tabClicked="tabClicked"
      @changeLanguage="changeLanguage"
    />
     <Slider
      :sliderData="sliderData"
      :selectedLang="toolBarData.selectedLang"
      @sliderButtonClick="sliderButtonClick"
    />
    <Banner
      :bannerData="bannerData"
      :selectedLang="toolBarData.selectedLang"
      @click="goToCard"
    />

    <AboutUs
      id="id_about_us"
      :aboutUsData="aboutUsData"
      :selectedLang="toolBarData.selectedLang"
    />
    <!--
    <Team
      id="id_team"
      :teamData="teamData"
      :selectedLang="toolBarData.selectedLang"
    />
    <Services
      id="id_services"
      :serviceData="serviceData"
      :selectedLang="toolBarData.selectedLang"
    />
    <InstagramDisplay
      id="id_portfolio"
      :portfolioData="portfolioData.cards"
    />
    <DoneProjects
    />
    <Testimonial
      id="id_testimonial"
    />
    <Contact
      id="id_contact_us"
      :selectedLang="toolBarData.selectedLang"
      :contactDialog="contactDialog"
      @submitContact="submitContact"
      @updateDialogState="updateDialogState"
    />
    <Footer
      :selectedLang="toolBarData.selectedLang"
    />
    <q-btn
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
// import Services from 'components/Services'
// import Contact from 'components/Contact'
// import Team from 'components/Team'
// import Reviews from 'components/Reviews'
// import Footer from 'components/Footer'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'PageIndex',
  data () {
    return {
      contactDialog: false,
      firstName: 'Julio',
      lastName: 'Gonzalez'
    }
  },
  components: {
    ToolBar,
    AboutUs,
    Banner,
    Slider
    // Services,
    // Contact,
    // InstagramDisplay,
    // DoneProjects,
    // Team,
    // Testimonial,
    // Footer
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
    changeBgColor (bgColor) {
      this.setThemeColor(bgColor)
      this.setBgColor('background-color:' + bgColor.split(')')[0] + ',0.7)')
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
    updateDialogState (state) {
      this.contactDialog = state
    },
    sliderButtonClick (id) {
      if (id === 1) {
        console.log('Pop up ContactUs')
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
    ...mapGetters('team', ['teamData']),
    fullName () {
      var fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
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

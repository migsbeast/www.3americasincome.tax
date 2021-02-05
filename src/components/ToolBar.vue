<template>
  <q-header>
    <q-toolbar class="desktop-only bg-primary text-grey-1">
      <img
        src="~assets/icon.png"
        class="desktop-only mobile-hide"
        style="width:5rem;height:auto;text-align:center"
      >
      <q-tabs active-color="secondary" shrink>
        <ToolBarTab
          v-for="tab in tabLanguage"
          :key="tab.id"
          v-bind="tab"
          :selectedTab="toolBarData.selectedTab"
          @click="handleClick"
          class="desktop-only mobile-hide q-mx-md"
          style="width:15vh"
        />
      </q-tabs>
      <q-btn
        class="q-ml-lg"
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
        color="white"
        target="_blank"
        flat
      />

      <q-btn-dropdown
        auto-close
        class="text-white q-mx-md"
        :label='languageLabel'
        flat
        menu-anchor="top middle"
        menu-self="bottom middle"
      >
        <q-list
          class="column"
          style="min-width: 150px"
        >
          <q-btn
            flat
            v-for="language in toolBarData.languages"
            :key="language"
            :label="language"
            @click="switchLanguage(language);"
          />
        </q-list>
      </q-btn-dropdown>
      <q-btn
        flat
        :label="appointmentLanguage"
        class="q-mx-md"
      />
      <q-btn
        flat
        :label="loginLanguage"
        class="bg-secondary text-grey-9 q-mx-md"
      />
    </q-toolbar>

    <div class="mobile-only">
      <div class="row flex-center no-wrap">
        <q-btn
          flat
          icon="menu"
          class="mobile-only desktop-hide grey-5">
          <q-menu
            persistent auto-close
            transition-show="flip-right"
            transition-hide="flip-left"
          >
            <q-list
              class="column mobile-only desktop-hide"
              style="min-width: 150px"
            >
              <ToolBarListItem
                active-color="primary"
                v-for="tab in tabLanguage"
                :key="tab.id"
                v-bind="tab"
                :selectedTab="toolBarData.selectedTab"
                @click="handleClick"
              />
            </q-list>
          </q-menu>
        </q-btn>
        <div class="column ">
          <img class="mobile-only" src="~assets/icon.png" style="width:4rem; height:auto; position: relative; left: 50%; top:0; margin-left:-1rem;">
          <div class="row q-mx-lg" style="margin-left: 53px;">
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
              color="white"
              target="_blank"
              flat
            />
          </div>
        </div>
        <q-btn-dropdown
          auto-close
          class="text-white"
          :label='languageLabel'
          flat
          menu-anchor="top middle"
          menu-self="bottom middle"
        >
          <q-list
            class="column"
            style="min-width: 150px"
          >
            <q-btn
              flat
              v-for="language in toolBarData.languages"
              :key="language"
              :label="language"
              @click="switchLanguage(language);"
            />
          </q-list>
        </q-btn-dropdown>
      </div>
      <!-- <div class="row">
        <q-btn
          flat
          :label="loginLanguage"
          class="bg-secondary text-grey-9 q-mx-md"
        />
      </div> -->
    </div>
  </q-header>
</template>

<script>
import ToolBarTab from 'components/ToolBarTab'
import ToolBarListItem from 'components/ToolBarListItem'
export default {
  name: 'ToolBar',
  data () {
    return {
      esLabel: 'English',
      enLabel: 'Español'
    }
  },
  props: {
    toolBarData: Object
  },
  methods: {
    handleClick (id, referenceElement) {
      this.$emit('tabClicked', id, referenceElement)
    },
    switchLanguage (language) {
      this.$emit('changeLanguage', language)
    }
  },
  computed: {
    tabLanguage () {
      return this.toolBarData.selectedLang === 'en' ? this.toolBarData.en.tabs : this.toolBarData.es.tabs
    },
    appointmentLanguage () {
      return this.toolBarData.selectedLang === 'en' ? this.toolBarData.en.appointment : this.toolBarData.es.appointment
    },
    loginLanguage () {
      return this.toolBarData.selectedLang === 'en' ? this.toolBarData.en.login : this.toolBarData.es.login
    },
    languageLabel () {
      return this.toolBarData.selectedLang === 'en' ? this.esLabel : this.enLabel
    }
  },
  components: {
    ToolBarTab,
    ToolBarListItem
  }
}
</script>

<style lang="scss">
.q-btn__wrapper{
    padding: 4px 8px;
}
</style>

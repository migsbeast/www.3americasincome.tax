<template>
  <div>
    <q-header>
      <div class="desktop-only gradient flex flex-center">
        <q-toolbar class="desktop-only text-grey-1">
          <div class="col-4">
            <q-btn
              type=a
              href="tel:2819991920"
              icon="phone"
              color="white"
              flat
            />
            <q-btn
              type=a
              href="https://goo.gl/maps/E7rTcP8bycMs3a7a9"
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
              menu-anchor="top left"
              menu-self="center start"
            >
              <q-list class="column" style="min-width: 150px">
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
          <div class="col-4 flex flex-center">
            <img
              src="~assets/icon.png"
              style="width:3rem;height:auto;text-align:center"
            >
          </div>
          <div class="col-4">
<!--           <div class="column items-end">
            <div class="col-4">
            <q-btn
              flat
              :label="loginLanguage"
              class="bg-primary text-grey-1"
              @click="loginClick"
            />
            </div>
          </div> -->
        </div>
          <!-- <q-btn
            flat
            :label="appointmentLanguage"
            class="q-mx-md"
          /> -->
        </q-toolbar>
      </div>

      <!--  TABS                -->
      <div class="desktop-only gradient flex-flex-center">
        <q-tabs class="col" active-color= "secondary" >
          <ToolBarTab
            v-for="tab in tabLanguage"
            :key="tab.id"
            v-bind="tab"
            :selectedTab="toolBarData.selectedTab"
            @click="handleClick"
          />
        </q-tabs>
      </div>

      <!--  MOBILE              -->
      <div class="mobile-only gradient flex flex-center">
        <q-toolbar class="flex flex-center">
          <div class="column">
            <div class="col-12 flex flex-center text-center">
              <img class="mobile-only" src="~assets/icon.png" style="width: 10vh; height: 10vh;">
            </div>
            <div class="col-12 q-mb-md">
              <div class="row items-center">
                <q-btn
                  flat
                  icon="menu"
                  class="mobile-only desktop-hide grey-5">
                  <q-menu
                    persistent auto-close
                    transition-show="flip-right"
                    transition-hide="flip-left"
                    :offset="[50, 10]"
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
                <q-btn-dropdown
                  auto-close
                  class="text-white"
                  :label='languageLabel'
                  flat
                  menu-anchor="bottom right"
                  menu-self="top middle"
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
<!--                 <q-btn
                  flat
                  :label="loginLanguage"
                  class="bg-primary text-grey-1"
                  @click="loginClick"
                /> -->
              </div>
            </div>
          </div>
        </q-toolbar>
        <!-- <div class="row">
          <q-btn
            flat
            :label="loginLanguage"
            class="bg-secondary text-grey-9 q-mx-md"
          />
        </div> -->
      </div>
    </q-header>
  </div>
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
    },
    loginClick () {
      this.$emit('updateDialogState', true)
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
/*.q-btn__wrapper{
    padding: 4px 8px;
}*/
.logo {
  position: absolute;
  margin: 0 0 0 50%;
  padding: 0 0 0 0;
  transform: translateX(-25%);
}
.rightHeaderSection {;
  flex-flow: column-reverse;
  padding-left: 35%;
}
.tabs {
  padding-top: 2.5vh;
}
.fixedButton {
  position: fixed;
  bottom: 100px;
  right: 0px;
  z-index: 0;
}
</style>

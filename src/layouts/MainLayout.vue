<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="flex-center">
        <!-- mobile menu <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->
        <q-tabs>
          <q-tab
            id="menuTabs"
            v-for="tab in menuTabs"
            :key="tab.title"
            :label="tab.title"
          />
        </q-tabs>
        <div>
          <q-btn-dropdown
            auto-close
            class="text-white q-ml-lg"
            :label='languageLabel'
            flat
            menu-anchor="bottom end"
            menu-self="bottom end"
            cover
          >
            <q-list
              class="column"
              style="min-width: 150px"
            >
              <q-btn
                flat
                v-for="language in languages"
                :key="language"
                :label="language"
                @click="switchLanguage(language);"
              />
            </q-list>
          </q-btn-dropdown>

        </div>
      </q-toolbar>
    </q-header>

    <!-- mobile menu<q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
const englishTabs = [
  {
    title: 'Home',
    link: 'https://www.3americasincometax.com'
  },
  {
    title: 'Services'
  },
  {
    title: 'About Us'
  },
  {
    title: 'Team'
  },
  {
    title: 'Reviews'
  }
]
const spanishTabs = [
  {
    title: 'Inicio',
    link: 'https://www.3americasincometax.com'
  },
  {
    title: 'Servicios'
  },
  {
    title: 'Sobre Nosotros'
  },
  {
    title: 'El Equipo'
  },
  {
    title: 'Recomendaciónes'
  }
]

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      selectedLanguage: 'English',
      languages: ['Español', 'English'],
      esLabel: 'Español',
      enLabel: 'English'
    }
  },
  methods: {
    tabClicked (id, referenceElement) {
      const el = document.getElementById(referenceElement)
      const target = getScrollTarget(el)
      const offset = el.offsetTop + 3
      const duration = 900
      setScrollPosition(target, offset, duration)
    },
    switchLanguage () {
      if (this.selectedLanguage === 'English') {
        this.selectedLanguage = 'Español'
      } else if (this.selectedLanguage === 'Español') {
        this.selectedLanguage = 'English'
      }
    }
  },
  computed: {
    languageLabel () {
      return this.selectedLanguage === 'English' ? this.enLabel : this.esLabel
    },
    menuTabs () {
      return this.selectedLanguage === 'English' ? englishTabs : spanishTabs
    }
  }
}
</script>

<style>
</style>

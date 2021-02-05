import Vue from 'vue'
import Vuex from 'vuex'
import slider from './slider'
import banner from './banner'
import aboutUs from './aboutUs'
import toolBar from './toolBar'
import services from './services'
import contact from './contact'
import portfolio from './portfolio'
import team from './team'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      slider,
      banner,
      aboutUs,
      toolBar,
      services,
      contact,
      portfolio,
      team
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}

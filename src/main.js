// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import router from './router'

// Install Material component
Vue.use(VueMaterial)
Vue.material.registerTheme({
  default: {
    primary: 'blue-grey',
    accent: 'teal'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

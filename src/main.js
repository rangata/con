import Vue from 'vue'
import App from './App.vue'

import SuiVue from 'semantic-ui-vue';
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
Vue.use(SuiVue)
Vue.use(VueFormWizard)

import routes from './router/routes'

// import '../semantic/dist/semantic.min.css';

Vue.config.productionTip = false
const Router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')

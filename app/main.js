import Vue from 'nativescript-vue'
import RadDataForm from 'nativescript-ui-dataform/vue'
import RadChart from 'nativescript-ui-chart/vue'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
import RadListView from 'nativescript-ui-listview/vue'
import VueDevtools from 'nativescript-vue-devtools'

import routes from '~/router'
import store from '~/store'
import sideDrawer from '~/components/sideDrawer'
import drawerContent from '~/components/drawerContent'

import './styles.scss'

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

// TNSFontIcon.debug = true; // load all icon in app when start
TNSFontIcon.paths = {
  'fa': './assets/css/fontawesome.min.css',
  'far': './assets/css/regular.min.css',
  'fas': './assets/css/solid.min.css',
  'fab': './assets/css/brands.min.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

// Prints Vue logs when --env.production is *NOT* set while building
// Vue use component of nativescript-ui
Vue.use(RadDataForm)
Vue.use(RadChart)
Vue.use(RadSideDrawer)
Vue.use(RadListView)


// Set up routes as a prototype to use throuhout the app.
Vue.prototype.$routes = routes

if (TNS_ENV !== 'production') {
    Vue.use(VueDevtools)
  }
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

// handle base login or not choose page to start Home or LoginPage => demo LoginPage

new Vue({
    store,
    render: h => {
        return h(
            sideDrawer,
            [
                h(drawerContent, { slot: 'drawerContent' }),
                h(routes.LoginPage, { slot: 'mainContent' })
            ]
        )
    }
}).$start()
import Vue from 'nativescript-vue'
import Vuex from 'vuex'

import sideDrawer from './modules/sideDrawer'
import user from './modules/user'

Vue.use(Vuex)

let debug = process.env.NODE_ENV !== 'production'

let store = new Vuex.Store({
    modules: {
        sideDrawer,
        user
    },
    strict: debug
})

Vue.prototype.$store = store

export default store

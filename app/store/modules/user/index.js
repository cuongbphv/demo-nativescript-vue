import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  ids: [],
  entities: {},
  page: 0,
  total_pages: 0,
  total: 0,
  per_page: 0 // number items per page
}
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

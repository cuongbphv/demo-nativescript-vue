import CommonModelMap from '~/models/CommonModelMap'

const GET_USERS = (state, payload) => {
    const newUserIds = Array.from(new Set(payload.data.map(user => user.id)))
    const newUserEntities = payload.data.reduce((users, user) => {
        users[user.id] = new CommonModelMap(user)
        return users
    }, {})
  state.page = payload.page
  state.per_page = payload.per_page
  state.total = payload.total
  state.total_pages = payload.total_pages
  state.ids = newUserIds
  state.entities = Object.assign({}, state.entities, newUserEntities)
}

export default {
    GET_USERS
}

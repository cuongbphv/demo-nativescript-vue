import user from '~/api/user'

const getUsers = ({ commit }) => {
  return user.getUsers().then(res => {
      console.info(res)
      commit('GET_USERS', res)
  }).catch(error => {
    throw error
  })
}

export default {
    getUsers
}

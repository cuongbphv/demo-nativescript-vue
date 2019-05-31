import Api from './api'

export default {
  getUsers () {
    return Api.get('/users').then(res => res.data)
  }
}



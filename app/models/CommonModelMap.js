import snakeCaseKeys from 'snakecase-keys'

export default class CommonModelMap {
  constructor(data = {}) {
    Object.keys(data).map(key => {
      this[key] = data[key]
    })
  }

  static toParam(param) {
    return snakeCaseKeys(param)
  }
}

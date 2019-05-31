const users = state => {
    return state.ids.map(id => state.entities[id])
}

export default {
    users
}

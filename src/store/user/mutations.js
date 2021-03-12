
export function setToken (state, payload) {
  this._vm.$set(state.user, 'token', payload)
}

export function setType (state, payload) {
  state.user.type = payload
}

export function setData (state, payload) {
  state.user.data = payload
}

export function resetUser (state) {
  state.user = {
    token: null,
    type: null
  }
}

// Use dispatch/rootGetters to call admin/customer vuex
export function setFirstName (state, payload) {
  // state.admin.first_name = payload
  // console.log(state.admin.first_name)
}

export function setNotificationType (state, payload) {
  // state.admin.notification_type = payload
}

import { Auth } from 'aws-amplify'

export async function signIn ({ commit }, payload) {
  return Auth.signIn(payload.username, payload.password)
    .catch((err) => {
      this._vm.$q.notify({
        color: 'warning',
        textColor: 'grey-9',
        icon: 'error',
        message: err.message
      })
    })
}

export function loadToken ({ commit }, payload) {
  commit('setToken', payload)
}

export function loadType ({ commit }, payload) {
  commit('setType', payload)
}

export async function signUp ({ commit }, payload) {
  try {
    var { user } = await Auth.signUp({
      username: payload.username,
      password: payload.password,
      attributes: {
        phone: '+1' + payload.username,
        name: payload.name
      }
    }).then(response => {
      commit('setData', user)
    })
  } catch (error) {
    console.log('error signing up:', error)
  }
}

export async function confirmSignUp ({ commit }, payload) {
  try {
    return Auth.confirmSignUp(payload.username, payload.code)
  } catch (error) {
    let err = null
    !error.message ? err = { message: error } : err = error
    this.setState({
      errors: {
        ...this.state.errors,
        cognito: err
      }

    })
  }
}

export async function completeNewPin ({ commit }, payload) {
  return Auth.completeNewPassword(payload.user, payload.newPin)
}

export async function forgotPin ({ commit }, payload) {
  return Auth.forgotPassword(payload).then((response) => {
    return true
  }).catch((err) => {
    this._vm.$q.notify({
      color: 'warning',
      textColor: 'grey-9',
      icon: 'error',
      message: err.message
    })
  })
}

export async function submitForgotPin ({ commit }, payload) {
  return Auth.forgotPasswordSubmit(payload.username, payload.code, payload.newPin).then((response) => {
    return true
  }).catch((err) => {
    this._vm.$q.notify({
      color: 'warning',
      textColor: 'grey-9',
      icon: 'error',
      message: err.message
    })
  })
}

export async function updatePin ({ commit }, payload) {
  await Auth.currentAuthenticatedUser()
    .then(user => {
      return Auth.changePassword(user, payload.oldPin, payload.newPin).then((response) => {
        return response
      }).catch((err) => {
        this._vm.$q.notify({
          color: 'warning',
          textColor: 'grey-9',
          icon: 'error',
          message: err.message
        })
      })
    })
}

export async function signOut ({ commit }) {
  return Auth.signOut({ global: true }).then(() => {
    commit('user/resetUser', null, { root: true })
    this.$router.push({ name: 'SignIn' })
  }).catch((err) => {
    this._vm.$q.notify({
      color: 'warning',
      textColor: 'grey-9',
      icon: 'error',
      message: err.message
    })
  })
}

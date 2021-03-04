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

export async function completeNewPin ({ commit }, payload) {
  return Auth.completeNewPassword(payload.user, payload.newPin)
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

export async function forgotPin ({ commit }, payload) {
  return Auth.forgotPassword(`+1${payload}`).then((response) => {
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
    commit('admin/resetAdmin', null, { root: true })
    commit('shop/resetShop', null, { root: true })
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

// We will handle Signing Up via a Lambda Function to create the user in the DB
export async function signUp ({ commit }, payload) {
  try {
    var { user } = await Auth.signUp({
      username: payload.username,
      password: payload.password,
      attributes: {
        email: payload.email,
        phone: payload.phone,
        'custom:userType': 'customer'
      }
    })
    console.log(user)
  } catch (error) {
    console.log('error signing up:', error)
  }
}

export function updateProfile ({ commit }, payload) {
  return this._vm.$axios.post('user/update-profile', payload).then((response) => {
    var options = [{ type: 'success', color: 'positive', icon: 'save' },
      { type: 'warning ', color: 'warning', icon: 'warning' },
      { type: 'error', color: 'negative', icon: 'error' }]
    var notifyType = options.find(option => option.type === response.data.type)
    this._vm.$q.notify({
      color: notifyType.color,
      textColor: 'grey-2',
      icon: notifyType.icon,
      message: response.data.message
    })
  })
}

// export function updateProfileState ({ commit }, payload) {
//   if (payload.userType !== 'customer') {
//     commit('admin/updateAdminProfile', payload, { root: true })
//   } else {
//     console.log('Call updateCustomerProfile mutation')
//   }
// }

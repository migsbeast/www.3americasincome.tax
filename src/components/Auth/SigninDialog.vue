<template>
  <q-dialog v-model="dialog">
    <q-card style="width:500px: height:50%;">
      <q-form @submit="handleSignIn()">
              <q-card-section class="bg-primary">
                <div class="text-h4 text-center text-grey-1">Sign In</div>
              </q-card-section>
              <q-input
                outlined
                bg-color="white"
                v-model="username"
                label="Phone Number/E-mail"
                class="q-my-md q-mx-xl"
              />
              <q-input
                bg-color="white"
                outlined
                v-model="pin"
                label="Pin"
                :type="isPin ? 'password' : 'text'"
                unmasked-value
                mask="##########"
                class="q-mb-md q-mx-xl"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPin ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPin = !isPin"
                  />
                </template>
              </q-input>

              <q-card-section class="row justify-evenly items-center q-mx-lg">
                <q-btn
                  class="text-grey-1 bg-info q-mb-md q-mx-xl col-xs-12"
                  label="Sign In"
                  type="submit"
                  :loading="loading"
                />
                <q-btn
                  class="text-grey-1 bg-positive q-mb-md col q-mr-xs"
                  label="Sign Up"
                  to='sign-up'
                />
                <q-btn
                  class="text-grey-1 bg-negative q-mb-md col"
                  label="Forgot Pin"
                  @click="showVerifyAccount()"
                />
              </q-card-section>
            </q-form>
            <div v-if="authState !== 'signedin'">You are signed out.</div>
                <amplify-authenticator>
                  <div v-if="authState === 'signedin' && user">
                    <div>Hello, {{user.username}}</div>
                  </div>
                  <amplify-sign-out></amplify-sign-out>
                </amplify-authenticator>
    </q-card>
  </q-dialog>
</template>

<script>
import { QSpinnerGears } from 'quasar'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { mapActions } from 'vuex'
export default {
  name: 'SignIn',
  data () {
    return {
      username: null,
      pin: null,
      isPin: true,
      loading: false,
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined
    }
  },
  props: {
    msg: String,
    signInDialog: Boolean
  },
  computed: {
    dialog: {
      get () {
        return this.signInDialog
      },
      set (value) {
        this.$emit('updateDialogState', value)
      }
    }
  },
  created () {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState
      this.user = authData
    })
  },
  methods: {
    ...onAuthUIStateChange((nextAuthState, authData) => {
      if (nextAuthState === AuthState.SignedIn) {
        console.log('user successfully signed in!')
        console.log('user data: ', authData)
      }
      if (!authData) {
        console.log('user is not signed in...')
      }
    }),
    ...mapActions('user', ['signIn', 'loadToken']),
    handleSignIn () {
      this.loading = true
      this.signIn({ username: this.username, password: this.pin }).then((user) => {
        if (!user) this.loading = false
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          this.showSetPin(user)
          this.loading = false
        } else {
          this.loadToken(user.signInUserSession.idToken.jwtToken).then(() => {
            this.$axios.defaults.headers.common.Authorization = `Bearer ${user.signInUserSession.idToken.jwtToken}`
            if (user.attributes['custom:userType'] === 'admin' || user.attributes['custom:userType'] === 'superAdmin') {
              this.loadAdmin({ phone: user.attributes.phone_number, userType: user.attributes['custom:userType'] }).then((admin) => {
                this.$router.push({ name: 'Customers', params: { admin_id: admin.id, shop_id: admin.shop_id } })
                this.$q.loading.show({
                  spinner: QSpinnerGears,
                  backgroundColor: 'dark',
                  message: '<h2>Loading Data...</h2>'
                })
                this.loadAllData().then(() => {
                  this.$q.loading.hide()
                })
              })
            } else if (user.attributes['custom:userType'] === 'customer') {
              console.log('Call loadCustomer action')
            }
          })
        }
      })
    }
  }
}
</script>

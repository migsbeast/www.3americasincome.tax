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
                label="Username"
                class="q-my-md q-mx-xl"
              />
              <q-input
                bg-color="white"
                outlined
                v-model="pin"
                label="Password"
                :type="isPin ? 'password' : 'text'"
                unmasked-value
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
                  @click="showSignUp()"
                />
                <q-btn
                  class="text-grey-1 bg-negative q-mb-md col"
                  label="Forgot Pin"
                  @click="showVerifyAccount()"
                />
              </q-card-section>
            </q-form>
<!--             <div v-if="authState !== 'signedin'">You are signed out.</div>
                <amplify-authenticator>
                  <div v-if="authState === 'signedin' && user">
                    <div>Hello, {{user.username}}</div>
                  </div>
                  <amplify-sign-out></amplify-sign-out>
                </amplify-authenticator> -->
    </q-card>
  </q-dialog>
</template>

<script>
import VerifyAccount from 'components/Auth/VerifyAccount'
import SetPin from 'components/Auth/SetPin'
import SignUp from 'components/Auth/SignUp'
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
  methods: {
    showSignUp () {
      this.$q.dialog({
        component: SignUp,
        parent: this
      })
    },
    showVerifyAccount () {
      this.$q.dialog({
        component: VerifyAccount,
        parent: this
      })
    },
    showSetPin (user) {
      this.$q.dialog({
        component: SetPin,
        parent: this,
        user: user
      })
    },
    ...mapActions('user', ['signIn', 'loadToken']),
    handleSignIn () {
      this.loading = true
      this.signIn({ username: this.username, password: this.pin })
        .then((user) => {
          if (!user) this.loading = false
          if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            this.showSetPin(user)
            this.loading = false
          } else {
            this.loadToken(user.signInUserSession.idToken.jwtToken).then(() => {
              this.$axios.defaults.headers.common.Authorization = `Bearer ${user.signInUserSession.idToken.jwtToken}`
            })
          }
        })
    }
  }
}
</script>

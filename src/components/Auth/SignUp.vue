<template>
  <q-dialog persistent ref="dialog">
    <q-card v-if="firstStep" class="col-10">
      <q-card-section class="bg-primary">
        <div class="text-h4 text-center text-white">Sign Up</div>
      </q-card-section>

      <q-card-section class="row justify-around q-pb-none q-mt-sm">
        <q-input
          filled
          v-model="firstName"
          label="First Name"
          type="text"
          class="q-px-md col-xl col-md col-xs-12"
          :rules="[val => !!val || 'Please enter first name',
                   val => /^[A-Za-z]+$/.test(val) || 'Please enter text only']"
        />
        <q-input
          filled
          v-model="lastName"
          label="Last Name"
          type="text"
          class="q-px-md col-xl col-md col-xs-12"
          :rules="[val => !!val || 'Please enter last name',
                   val => /^[A-Za-z]+$/.test(val) || 'Please enter text only']"

        />
      </q-card-section>

      <q-card-section class="row justify-around q-pb-none">
        <q-input
          filled
          v-model="phone"
          label="Phone Number"
          fill-mask
          unmasked-value
          mask="+1 (###) - ### - ####"
          class="q-px-md col-xl col-md col-xs-12"
          :rules="[val => !!val || 'Please enter phone number',
                   val => /^[0-9]*$/.test(val) || 'Please enter numbers only',
                   val => val.length === 10 || 'Please enter a valid phone number']"
        />
        <q-input
          filled
          v-model="pin"
          label="Pin"
          :type="isPin ? 'password' : 'text'"
          class="q-px-md col-xl col-md col-xs-12"
          :rules="[val => !!val || 'Please enter a pin',
                   val => /^[0-9]*$/.test(val) || 'Please enter numbers only',
                   val => val.length >= 6 || 'Please enter a minimum of 6 digits']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPin ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPin = !isPin"
            />
          </template>
        </q-input>
      </q-card-section>

      <q-card-section class="row justify-around q-pb-none">
        <q-toggle
          v-model="useReferral"
          color="red"
          label="Have a referral?"
          checked-icon="check"
          unchecked-icon="clear"
          class="q-px-md col-xl col-md col-xs-12"
        />

        <q-toggle
          v-model="useEmail"
          color="red"
          label="Have an email?"
          checked-icon="check"
          unchecked-icon="clear"
          class="q-px-md col-xl col-md col-xs-12"
        />
      </q-card-section>

      <q-card-section class="row justify-around q-pb-none">
        <q-input
          v-if="useReferral"
          filled
          v-model="referral"
          label="Referral Number"
          fill-mask
          unmasked-value
          mask="(###) ### - ####"
          class="q-px-md col-xl col-md-6 col-xs-12"
          :rules="[val => !!val || 'Please enter phone number',
                   val => /^[0-9]*$/.test(val) || 'Please enter numbers only',
                   val => val.length === 10 || 'Please enter a valid phone number']"
        />

        <q-input
          v-if="useEmail"
          filled
          v-model="email"
          label="Email"
          type="email"
          class="q-px-md col-xl col-md-6 col-xs-12"
          lazy-rules
          :rules="[val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(val) || 'E-mail must be valid']"
        />
      </q-card-section>

      <q-card-section>
          <div class="row flex-center q-gutter-xl">
            <q-btn
              class="q-mb-md text-grey-1 bg-positive"
              label="Sign Up"
              @click="handleSignUp()"
              style="width:20vh"
            />
            <q-btn
              class="q-mb-md text-grey-1 bg-grey-7"
              label="Close"
              @click="hide"
              style="width:20vh"
            />
          </div>
          <div class="row flex-center">
            <router-link :to="{ name: 'SignIn'}">Already Signed Up? Sign In</router-link>
          </div>
      </q-card-section>
    </q-card>
      <!--
      Once the user enters signs up, they will get a text with a verification code and will have to enter it to access their profile
       -->
    <q-card v-if="sendVerificationCode">
      <q-card-section class="bg-primary">
        <div class="text-h4 text-center text-white">Sign Up Confirmation</div>
      </q-card-section>
      <q-card-section>
        <q-input
          rounded outlined
          bg-color="white"
          v-model="code"
          label="Verification Code"
          class="q-mb-md"
        />
        <q-btn
          v-if="sendVerificationCode"
          rounded
          class="bg-blue text-white"
          label="Submit"
          @click="handleConfirmation()"
          to="login"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SignUp',
  data () {
    return {
      firstName: '',
      lastName: '',
      phone: '+1',
      email: '',
      referral: '',
      pin: '',
      code: '',
      isPin: true,
      useReferral: false,
      useEmail: false,
      sendVerificationCode: false,
      firstStep: true
    }
  },
  methods: {
    ...mapActions('user', ['signUp', 'confirmSignUp']),
    handleSignUp () {
      this.phone = '+1' + this.phone
      this.signUp({ username: this.phone, password: this.pin, email: this.email })
      this.firstStep = false
      this.sendVerificationCode = true
    },
    handleConfirmation () {
      this.confirmSignUp({ username: this.phone, code: this.code })
    },
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    onCancel () {
      this.hide()
    },
    onDialogHide () {
      this.$emit('hide')
    }
  }
}
</script>

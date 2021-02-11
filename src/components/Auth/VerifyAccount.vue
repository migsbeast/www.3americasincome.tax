<template>
  <q-dialog persistent ref="dialog">
    <q-card>
      <q-banner rounded class="bg-primary text-grey-1 q-mb-lg text-center">
        <span class="text-h5">Enter Account Phone Number</span>
      </q-banner>
      <q-form
        @submit="verifyAccount()"
      >
        <q-card-section class="row justify-evenly items-center q-mx-lg">
          <q-input
            outlined
            bg-color="grey-1"
            v-model="username"
            label="Phone Number"
            unmasked-value
            mask="(###) ### - ####"
            class="q-px-xl col-xl-10 col-md-10 col-xs-12"
            :rules="phoneRules"
          />
        </q-card-section>
        <q-card-actions class="row justify-evenly items-center q-mx-lg q-mb-sm">
          <q-btn
            class="bg-info text-grey-1 col-5 col-xs-5"
            label="Send Code"
            type="submit"
          />
          <q-btn
            class="bg-negative text-grey-1 col-5 col-xs-5"
            label="Cancel"
            @click="onCancel"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import VerifyCode from 'components/Authorization/VerifyCode'
import { mapActions } from 'vuex'
export default {
  name: 'VerifyAccount',
  data () {
    return {
      username: null,
      phoneRules: [val => !!val || 'Please enter phone number',
        val => /^[0-9]*$/.test(val) || 'Please enter numbers only',
        val => val.length === 10 || 'Please enter a valid phone number']
    }
  },
  methods: {
    ...mapActions('user', ['forgotPin']),
    verifyAccount () {
      this.forgotPin(this.username).then((response) => {
        if (response) {
          console.log(response)
          this.hide()
          this.$q.dialog({
            component: VerifyCode,
            parent: this,
            username: this.username
          })
        }
      })
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

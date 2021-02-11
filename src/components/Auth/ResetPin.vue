<template>
  <q-dialog persistent ref="dialog">
    <q-card>
      <q-banner rounded class="bg-primary text-grey-1 q-mb-lg text-center">
        <span class="text-h5">Reset Pin</span>
      </q-banner>
      <q-form
        @submit="onSubmit"
      >
        <q-card-section class="row justify-evenly items-center q-mx-lg">
          <q-input
            bg-color="white"
            outlined
            v-model="pin1"
            label="Pin"
            :type="showPin ? 'password' : 'text'"
            class="q-px-xl col-xl-8 col-md-8 col-xs-12"
            unmasked-value
            mask="######"
            lazy-rules
            :rules="pin1rules"
          >
            <template v-slot:append>
              <q-icon
                :name="showPin ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPin = !showPin"
              />
            </template>
          </q-input>

          <q-input
            bg-color="white"
            outlined
            v-model="pin2"
            label="Re-enter Pin"
            :type="showPin ? 'password' : 'text'"
            class="q-px-xl col-xl-8 col-md-8 col-xs-12"
            unmasked-value
            mask="######"
            lazy-rules
            :rules="pin2rules"
          >
            <template v-slot:append>
              <q-icon
                :name="showPin ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPin = !showPin"
              />
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions class="row justify-evenly items-center q-mx-lg q-mb-sm">
          <q-btn
            class="bg-info text-grey-1 col q-mr-md"
            label="Submit"
            type="submit"
          />
          <q-btn
            class="bg-negative text-grey-1 col"
            label="Cancel"
            @click="onCancel"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'ResetPin',
  props: {
    code: String,
    username: String
  },
  data () {
    return {
      showPin: true,
      pin1: null,
      pin2: null,
      pin1rules: [
        value => !!value || 'Required.',
        value => value.length >= 6 || 'Min 6 digits'
      ],
      pin2rules: [
        value => !!value || 'Required.',
        value => value.length >= 6 || 'Min 6 digits',
        value => value === this.pin1 || 'Pins do not match'
      ]
    }
  },
  methods: {
    ...mapActions('user', ['submitForgotPin']),
    onSubmit () {
      var body = {
        username: `+1${this.username}`,
        code: this.code,
        newPin: this.pin2
      }
      this.submitForgotPin(body).then((response) => {
        this.hide()
        if (response) {
          this.$q.notify({
            color: 'positive',
            textColor: 'grey-1',
            icon: 'vpn_key',
            message: 'New Pin has been set, Please Sign In'
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

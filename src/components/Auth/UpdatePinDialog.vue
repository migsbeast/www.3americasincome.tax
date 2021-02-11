<template>
  <q-dialog ref="dialog">
    <q-card class="bg-secondary">
      <q-banner rounded class="bg-primary text-grey-1 q-mb-lg text-center">
        <span class="text-h5"> Update Pin </span>
      </q-banner>

      <q-form
        @submit="onSubmit"
        @reset="onCancel"
      >
        <q-card-section class="row justify-around q-pa-xs">
          <q-input
            outlined
            bg-color="grey-1"
            v-model="form.currentPin"
            label="Current Pin"
            :type="hidePassword ? 'password' : 'text'"
            unmasked-value
            mask="##########"
            class="q-px-md col-xl-12 col-md-12 col-xs-12"
            lazy-rules
            :rules="pinRequirements"
          >
            <template v-slot:append>
              <q-icon
                :name="hidePassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="hidePassword = !hidePassword"
              />
            </template>
          </q-input>

          <q-input
            outlined
            bg-color="grey-1"
            v-model="form.newPin"
            label="New Pin"
            :type="hidePassword ? 'password' : 'text'"
            unmasked-value
            mask="##########"
            class="q-px-md col-xl-12 col-md-12 col-xs-12"
            lazy-rules
            :rules="pinRequirements"
          >
            <template v-slot:append>
              <q-icon
                :name="hidePassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="hidePassword = !hidePassword"
              />
            </template>
          </q-input>

          <q-input
            outlined
            bg-color="grey-1"
            v-model="form.newPinConfirm"
            label="Re-enter Pin"
            :type="hidePassword ? 'password' : 'text'"
            unmasked-value
            mask="##########"
            class="q-px-md col-xl-12 col-md-12 col-xs-12"
            lazy-rules
            :rules="pinConfirmed"
            >
              <template v-slot:append>
                <q-icon
                  :name="hidePassword ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="hidePassword = !hidePassword"
                />
              </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="center" class="q-py-md">
          <q-btn
            class="col-3 bg-positive text-grey-1 col-xs-3"
            label="Save"
            type="submit"
          />
          <q-btn
            class="col-3 bg-negative text-grey-1 col-xs-3"
            label="Cancel"
            type="reset"
            v-close-popup
          />
        </q-card-actions>
      </q-form>

    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UpdatePinDialog',
  data () {
    return {
      hidePassword: true,
      form: {
        currentPin: null,
        newPin: null,
        newPinConfirm: null
      },
      pinRequirements: [
        value => !!value || 'Required.',
        value => /^[0-9]*$/.test(value) || 'Please enter numbers only',
        value => value.length >= 6 || 'Min 6 digits'
      ],
      pinConfirmed: [
        value => !!value || 'Required.',
        value => value.length >= 6 || 'Min 6 digits',
        value => /^[0-9]*$/.test(value) || 'Please enter numbers only',
        value => value === this.form.newPin || 'Pins do not match'
      ]
    }
  },
  methods: {
    ...mapActions('user', ['updatePin']),
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    shake () {
      this.$refs.dialog.shake()
    },
    onSubmit () {
      this.updatePin({ oldPin: this.form.currentPin, newPin: this.form.newPinConfirm })
        .then((response) => {
          this.shake()
          this.form.currentPin = null
          this.form.newPin = null
          this.form.newPinConfirm = null
          this.hide()
          this.$q.notify({
            color: 'positive',
            textColor: 'grey-1',
            icon: 'vpn_key',
            message: 'New Pin has been set'
          })
        }).catch(
          this.shake())
    },
    onCancel () {
      this.currentPin = null
      this.newPin = null
      this.newPinConfirm = null
    }
  }
}
</script>

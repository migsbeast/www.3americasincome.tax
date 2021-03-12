<template>
  <q-dialog ref="dialog" persistent @hide="onDialogHide">
    <q-card>
      <q-banner rounded class="bg-primary text-grey-1 q-mb-lg text-center">
        <span class="text-h5"> Enter New Pin </span>
      </q-banner>
      <q-form
        persistant
        class="form"
        @submit="onSubmit"
      >
        <q-card-section class="row justify-evenly items-center q-mx-xl">
          <q-input
            bg-color="grey-1"
            outlined
            v-model="pin1"
            label="Pin"
            :type="showPin ? 'password' : 'text'"
            class="q-px-xl col-xl-12 col-md-12 col-xs-12"
            unmasked-value
            lazy-rules
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
            bg-color="grey-1"
            outlined
            v-model="pin2"
            label="Re-enter Pin"
            :type="showPin ? 'password' : 'text'"
            unmasked-value
            class="q-px-xl col-xl-12 col-md-12 col-xs-12"
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
        <q-card-actions class="row justify-evenly items-center q-mx-xl q-mb-sm">
          <q-btn
            class="text-grey-1 col bg-info"
            label="Submit"
            type="submit"
          />
          <q-btn
            class="text-grey-1 col bg-negative"
            label="Cancel"
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
  name: 'SetPin',
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
        value => value === this.pin1 || 'Pin does not match'
      ]
    }
  },
  props: {
    user: Object
  },
  methods: {
    ...mapActions('user', ['completeNewPin']),
    onSubmit () {
      this.completeNewPin({ user: this.user, newPin: this.pin2 }).then((reponse) => {
        this.$q.notify({
          color: 'positive',
          textColor: 'grey-1',
          icon: 'vpn_key',
          message: 'New Pin has been set, Please Sign In'
        })
        this.hide()
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

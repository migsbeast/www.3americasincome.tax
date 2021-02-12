<template>
  <q-dialog persistent ref="dialog">
    <q-card>
      <q-banner rounded class="bg-primary text-grey-1 q-mb-lg text-center">
        <span class="text-h5">Enter Verification Code</span>
      </q-banner>
      <q-form
        @submit="onSubmit()"
      >
        <q-card-section class="row justify-evenly items-center q-mx-lg">
          <q-input
            outlined
            bg-color="grey-1"
            v-model="code"
            label="Verification Code"
            unmasked-value
            mask="######"
            class="q-px-xl col-xl-8 col-md-8 col-xs-12"
            :rules="[
              val => !!val || 'Please enter verification code',
              val => val.length === 6 || 'Please enter the 6 digit code']"
          />
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
import ResetPin from 'components/Auth/ResetPin'
export default {
  name: 'VerifyCode',
  props: {
    username: String
  },
  data () {
    return {
      code: null
    }
  },
  methods: {
    onSubmit () {
      this.hide()
      this.$q.dialog({
        component: ResetPin,
        parent: this,
        code: this.code,
        username: this.username
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

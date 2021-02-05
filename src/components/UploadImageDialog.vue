<template>
  <q-dialog ref="dialog" persistent @hide="onDialogHide">
    <div class="row flex-center">
      <q-card
        class="col-4 col-xs-10 col-md-4 bg-accent absolute-center"
        style="border-radius: 20px;"
      >
        <q-banner inline-actions rounded class="bg-primary text-grey-1 q-mb-lg text-center">
        <span class="text-h5"> Image Upload </span>
        </q-banner>
        <q-card-section class="row flex-center">
          <q-uploader
             :url="url"
             method="PUT"
             label="Select image"
             :headers="[{'Content-Type': 'image/png'}]"
             max-files="1"
             color="primary"
             :send-raw="true"
             class="bg-secondary col-6 col-xs-10"
          />
        </q-card-section>
        <q-card-actions class="row justify-center items-center">
          <q-btn
            class="col-4 col-xs-6 text-grey-1 bg-primary q-mb-md q-mt-none"
            label="Go Back Home"
            @click="routeHome()"
          />
        </q-card-actions>

      </q-card>
    </div>
  </q-dialog>
</template>

<script>
export default {
  name: 'UploadImageDialog',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    onDialogHide () {
      this.$emit('hide')
    },
    routeHome () {
      this.hide()
      this.$router.push({ path: '/' })
    }
  }
}
</script>

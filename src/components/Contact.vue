<template>
  <q-dialog v-model="dialog">
    <q-card>
      <q-card class="bg-secondary">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-white">{{ contactLanguage.title }}</div>
          <q-space />
        </q-card-section>

        <q-form class="contact-form" @submit="onSubmit">
          <q-card-section>
           <q-input
              type="text"
              v-model="form.name"
              :label="contactLanguage.nameLabel"
              :hint="contactLanguage.nameHint"
              bg-color="white"
              outlined
              class="input"
            >
              <template v-slot:append>
                <q-icon
                  name="contacts"
                  color="primary"
                />
              </template>
            </q-input>
          </q-card-section>

          <q-card-section>
            <q-input
              type="email"
              v-model="form.recipient"
              :label="contactLanguage.emailLabel"
              :hint="contactLanguage.emailHint"
              bg-color="white"
              outlined
              class="input"
            >
              <template v-slot:append>
                <q-icon
                  name="email"
                  color="primary"
                />
              </template>
            </q-input>
          </q-card-section>

          <q-card-section>
            <q-input
              type="number"
              v-model="form.phone"
              :label="contactLanguage.phoneLabel"
              :hint="contactLanguage.phoneHint"
              bg-color="white"
              outlined
              class="input"
            >
              <template v-slot:append>
                <q-icon
                  name="call"
                  color="primary"
                />
              </template>
            </q-input>
          </q-card-section>

          <q-card-section>
            <q-input
              type="textarea"
              v-model="form.message"
              :label="contactLanguage.messageLabel"
              :hint="contactLanguage.messageHint"
              bg-color="white"
              outlined
              class="input"
            >
              <template v-slot:append>
                <q-icon
                  name="chat"
                  color="primary"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn
              type="submit"
              :label="contactLanguage.submitLabel"
              color="primary"
              icon="send"
              style="width:125px"
            />
            <q-btn
              type=a
              href="tel:8325826067"
              color="green"
              :label="contactLanguage.call"
              class="full"
              icon="phone"
              style="width:125px"
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-card>
  </q-dialog>
</template>
<script>

export default {
  name: 'Contact',
  data () {
    return {
      en: {
        title: 'Contact Us',
        nameLabel: 'Name *',
        nameHint: 'First Name or Full Name',
        emailLabel: 'Email (Optional)',
        emailHint: 'Email',
        phoneLabel: 'Phone Number *',
        phoneHint: 'Mobile',
        messageLabel: 'Your message (Optional)',
        messageHint: 'Let us know how we can help!',
        submitLabel: 'Send',
        call: 'Call'
      },
      es: {
        title: 'Contactenos',
        nameLabel: 'Nombre *',
        nameHint: 'Primer Nombre o Nombre Completo',
        emailLabel: 'Email (Opcional)',
        emailHint: 'Email',
        phoneLabel: 'Numero de Telefono *',
        phoneHint: 'Mobile',
        messageLabel: 'Mensaje (Opcional)',
        messageHint: 'Dejenos saber como podemos ayudarle!',
        submitLabel: 'Enviar',
        call: 'Llamenos'
      },
      form: {
        sender: 'office@allin1auto.com',
        name: null,
        recipient: null,
        phone: null,
        message: null
      }
    }
  },
  props: {
    contactDialog: Boolean,
    selectedLang: String
  },
  computed: {
    dialog: {
      get () {
        return this.contactDialog
      },
      set (value) {
        this.$emit('updateDialogState', value)
      }
    },
    contactLanguage () {
      console.log(this.selectedLang)
      return this.selectedLang === 'es' ? this.es : this.en
    }
  },
  methods: {
    onSubmit () {
      console.log('submit', this.form)
      this.$emit('submitContact', this.form)
      this.dialog = false
    }
  }
}
</script>

<style lang='scss'>

</style>

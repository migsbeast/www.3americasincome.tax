export function submitContactData ({ commit }, form) {
  console.log('SEND DATA TO API', form)
  return this._vm.$axios.post('ses/send-email', form).then((response) => {
    console.log(response)
    if (response.status === 200) {
      this._vm.$q.notify({
        type: 'positive',
        position: 'bottom',
        message: 'Email Sent!'
      })
    }
  })
}

const token = 'IGQVJXMi1CV0RsNTBwSEZA0M19LWU5oWUNRVEZAHdGNrTmZALZAXRfUEE0RWllVXFVbl8zOVRPSTRkaS1QTWZAxa1hlZA1VxN185R0xHS01SMXJRRkdnd3FGQjRZAZA2RVNml0dVIxTzNoQzhZAejg5a0xibUN2TgZDZD'
const url = 'https://graph.instagram.com/me/media?fields=media_url,permalink&access_token=' + token
export function loadIgPics ({ commit }) {
  this._vm.$axios.get(url).then(response => {
    const igData = response.data.data
    commit('setPics', igData)
  })
}

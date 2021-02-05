
export function setPics (state, payload) {
  state.portfolioData.cards.forEach(function (card, idx) {
    card.imagePath = payload[idx].media_url
    card.permalink = payload[idx].permalink
  })
}

export function changeHover (state, payload) {
  state.portfolioData.cards.forEach(card => {
    if (card.id === payload) {
      var theCard = card
      theCard.hover = !theCard.hover
      card = theCard
    }
  })
}

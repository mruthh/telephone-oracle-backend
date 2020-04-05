window.addEventListener('DOMContentLoaded', () => {
  
  const hostGameButton = document.querySelector('#host-game')
  hostGameButton.addEventListener('click', (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'api/game',
      data: { name }
    })
      .then(({ data }) => {

        // window.location.href = `/game/${data.game.hash}`
        console.log(data)
      })
      .catch((e) => { console.error(e) })
  })
})
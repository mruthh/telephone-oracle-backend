window.addEventListener('DOMContentLoaded', () => {
  const hostGameButton = document.querySelector('#host-game')
  hostGameButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('whee!')
  })
})
window.addEventListener('DOMContentLoaded', () => {
  
  const hostGameButton = document.querySelector('#host-game')
  hostGameButton.addEventListener('click', (e) => {
    e.preventDefault()
    const startScreen = document.querySelector('#start-screen')
    startScreen.classList.add('hidden')

    const nextScreen = document.querySelector('#next-screen')
    nextScreen.classList.remove('hidden')
  })

  const nameForm = document.querySelector('#enter-name')
  nameForm.addEventListener('submit', (e) => {
    // set name in localStorage
    // post to game API
    // get a hash
    // display a link
  })
})
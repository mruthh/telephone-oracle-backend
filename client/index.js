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
        console.log(data)
      })
      .catch((e) => { console.log(e) })
  })

  // const nameForm = document.querySelector('#enter-name')
  // nameForm.addEventListener('submit', (e) => {
  //   e.preventDefault()
  //   const name = nameForm.querySelector('#name-input').value
  //   axios({
  //     method: 'post',
  //     url: 'api/game',
  //     data: { name }
  //   })
  //     .then(({ data }) => {
  //       console.log(data)
  //     })
  //     .catch((e) => { console.log(e) })
  //   // set name in localStorage
  //   // post to game API
  //   // get a hash
  //   // display a link
  // })
})
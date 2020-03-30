// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('li.like span').forEach(elem => addEventListener('click', handleClick))
})


// element => console.log(element)
function hideError() {
  errorId = document.querySelector('#modal')
  errorId.classList.add('hidden')
}

function showError() {
  errorId = document.querySelector('#modal')
  errorId.classList.remove('hidden')
}

function showFullHeart(li) {
  li.textContent = FULL_HEART
  li.classList.add('activated-heart')
}

function clearHeart(li) {
  li.textContent = EMPTY_HEART
  li.classList.remove('activated-heart')
}

function handleClick(e) {
  // alert('Clicked!')
  mimicServerCall()
  .then(response => {
    hideError()
    console.log(e.target)
    if (e.target.textContent === EMPTY_HEART) {
      showFullHeart(e.target)
    } else {
      clearHeart(e.target)
    }
    // console.log(e)

  })
  .catch((error) => {
    showError()
  })

}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

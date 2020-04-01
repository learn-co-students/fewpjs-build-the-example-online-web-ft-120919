// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

hideModal()
document.addEventListener('DOMContentLoaded', () => {
  addClickListeners()
})

function hideModal() {
  const modal = document.getElementById('modal')
  modal.setAttribute('class', 'hidden')
}

function showModal() {
  const modal = document.getElementById('modal')
  modal.setAttribute('class', '')
  setTimeout(function() {
    hideModal()
  }, 5000)
}

function addClickListeners() {
  //give all hearts listeners
  const likes = document.getElementsByClassName('like')
  for(let like of likes) {
    like.addEventListener('click', function(e) {
      e.preventDefault()
      toggleHeart(like.children[0])
    })
  }
}

function toggleHeart(node) {
  let response = mimicServerCall()
    //.then(resp => resp.json())
    .then(json => {
      console.log(json)
      if (node.innerText == EMPTY_HEART) {
        // notify server
        node.innerText = FULL_HEART
        node.setAttribute('class', 'activated-heart')
      } else {
        // notify server
        node.innerText = EMPTY_HEART
        node.setAttribute('class', '')
      }
    })
    .catch(error => {
      showModal()
      document.getElementById('modal').innerText += ` ${error}`
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

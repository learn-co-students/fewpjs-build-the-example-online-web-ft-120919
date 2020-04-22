// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("modal")
  const modalMessage = document.getElementById("modal-message")
  const likes = document.querySelectorAll(".like-glyph")

  likes.forEach(like => {
    like.addEventListener('click', clickHeart)
  })

  function clickHeart(e) {
    let likedPost = e.target
    mimicServerCall()
      .then(response => {
        if (response == "Pretend remote server notified of action!") {
          changeHeart(likedPost)
        }
      })
      .catch(error => {
        modalMessage.innerText = error
        modal.className = ""
        setTimeout(function () {
          modalMessage.innerText = ""
          modal.className = "hidden"
        }, 5000)
      })
  }

})

function changeHeart(like) {
  if (like.innerHTML == EMPTY_HEART) {
    like.innerHTML = FULL_HEART
    like.className = "activated-heart"
  } else {
    like.innerHTML = EMPTY_HEART
    like.className = ""
  }
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

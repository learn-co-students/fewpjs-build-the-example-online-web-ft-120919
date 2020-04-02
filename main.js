// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

  let glyphStates = {
    '♡' : '♥',
    '♥' : '♡'
  }

  let colorStates = {
    "red" : "",
    "" : "red"
  }
// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", (e) => {
  let articleHearts = document.querySelectorAll(".like-glyph")

  for (let glyph of articleHearts) {
    glyph.addEventListener("click", likeCallBack)
  }

  function likeCallBack(e) {
    let heart = e.target
    mimicServerCall("someUrl")
      .then(function(serverMessage){
        heart.innerText = glyphStates[heart.innerText]
        heart.parentElement.style.color = colorStates[heart.style.color]
      })
      .catch(function(error) {
        displayError(error)
        setTimeout(hideErrors, 3000)
      })
  }
  function displayError(e) {
    document.getElementById("modal").className = ""
    errorSpot = document.getElementById("modal-message")
    errorSpot.innerText = e
  }

  function hideErrors() {
    document.getElementById("modal").className = "hidden"
  }
})



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

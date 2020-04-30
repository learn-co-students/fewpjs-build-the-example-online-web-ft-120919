// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

window.addEventListener("DOMContentLoaded", () => {

  function displayError() {
    const errorModal = document.querySelector("#modal");
    errorModal.className = "";
  }

  function displayLike(heart) {
    heart.innerText = FULL_HEART;
    heart.style.color = "red";
  } 

  document.addEventListener("click", (e) => {
    if (e.target.className == "like-glyph") {
      let heart = e.target;
      mimicServerCall("url")
        .then(resolved => displayLike(heart))
        .catch(error => displayError());
    }
  });
});


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        // const modal = document.querySelector("#modal");
        // modal.className = '';
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

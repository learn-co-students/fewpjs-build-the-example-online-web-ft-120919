// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorDiv = document.querySelector('div#modal')
errorDiv.className = 'hidden'
const heart = document.querySelector('li.like span')
heart.addEventListener('click', () => {
  mimicServerCall()
  .then(() => {
    if (heart.className == 'like-glyph') {
      heart.className = 'activated-heart'
      heart.textContent = FULL_HEART
    } else {
      heart.className = 'like-glyph'
      heart.textContent = EMPTY_HEART
    }
  })
  .catch(function(error) {
    errorDiv.className = ''
    errorDiv.lastChild.textContent = error.message
    setTimeout(() => {errorDiv.className = 'hidden'}, 5000)
  })
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
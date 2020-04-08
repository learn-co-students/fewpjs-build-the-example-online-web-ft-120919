// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.getElementById('modal');
const errorMessage = document.getElementById('modal-message');
const allPosts = document.getElementsByClassName('media-post');

function hideError() {
  errorModal.className = "hidden";
}

function showError() {
  errorModal.className = "";
}

function toggleHeart(event) {
  const heart = event.target;
  mimicServerCall()
  .then(() => {
    hideError();
    if(heart.className === "like-glyph") {
      heart.className = "like-glyph  activated-heart";
      heart.innerText = FULL_HEART;
    }  else {
      heart.className = "like-glyph";
      heart.innerText = EMPTY_HEART;
    }
  })
  .catch((error) => {
    showError();
    errorMessage.innerText = error;
  })
}

function init() {
  hideError();
  for(post of allPosts) {
    const likeButton = post.getElementsByClassName('like')[0];
    likeButton.addEventListener('click', toggleHeart);
  }
}

document.addEventListener('DOMContentLoaded', init);
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

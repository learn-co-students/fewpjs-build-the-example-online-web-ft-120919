// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", init);

function init(){


  // attach ids to the likes & then attach action listeners
  let posts = document.getElementsByClassName("media-post");
  for (let post of posts){
      let likeBttn = post.getElementsByTagName("li")[0]; 
      // likeBttn: <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
      likeBttn.addEventListener("click", changeHeart);
    }
}

/*
   likeBttn: <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
 */
function changeHeart(event){
  let likeBttn = event.target;
  let spanTagWlikeGlyph= likeBttn.getElementsByTagName("span")[0];
  /**
      When a user clicks on an empty heart:
        Invoke mimicServerCall to simulate making a server request
        When the "server" returns a success status:
            Change the heart to a full heart
            Add the .activated-heart class to make the heart appear red
   */  
  if (spanTagWlikeGlyph.innerText==EMPTY_HEART){
    let responseAsPromise = mimicServerCall();
    responseAsPromise.then(
      (fulfilled, rejected)=> {
        spanTagWlikeGlyph.innerText= FULL_HEART;
        spanTagWlikeGlyph.setAttribute("class", "activated-heart");
      }
      ).catch(
        (rejected)=> {
        /**        
        When the "server" returns a failure status:
            Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
            Display the error modal by removing the .hidden class
            Display the server error message in the modal
            Use setTimeout to hide the modal after 3 seconds (add the .hidden class) */
            let errorModal = document.getElementById("modal");
            errorModal.removeAttribute("class");
            let errorModalMessage = document.getElementById("modal-message");
            errorModalMessage.innerText=rejected;

            setTimeout(() => {
              errorModal.setAttribute("class", "hidden");
            }, 3000);
      }
    )
  } else {
   /**
      When a user clicks on a full heart:
        Change the heart back to an empty heart
        Remove the .activated-heart class
   */

        spanTagWlikeGlyph.innerText= EMPTY_HEART;
        spanTagWlikeGlyph.setAttribute("class", "like-glyph");

  }
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

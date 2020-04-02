// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const emptyHearts = document.getElementsByClassName("like-glyph");
const modal = document.getElementById("modal");


for (const elt of emptyHearts) {
  elt.addEventListener("click", function(event) {
    mimicServerCall().then(function(response) {
      event.target.classList.add("activated-heart")
      //debugger 
      toggleHeart(event.target);//Also make heart full
    }).catch(function(error) {
      //console.log(error);
      modal.classList.remove("hidden");
      modal.querySelector("p").innerText = error;
      //Use setTimeout to hide the model (add hidden class) after 5 seconds
      window.setTimeout(function(){modal.classList.add("hidden");}, 5000)
    })
    done();
  })//event listener click empty heart
}


function toggleHeart(elt) {
  console.log("Inside toggleHeart")
  //debugger 
  if(elt.innerHTML == EMPTY_HEART) {
    elt.innerHTML = FULL_HEART;
  }
  else {
    elt.innerHTML = EMPTY_HEART;
    elt.classList.remove("activated-heart")
  }//if
}//toggleHeart



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

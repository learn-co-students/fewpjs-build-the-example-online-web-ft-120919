// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", init);

function init(){


  // attach ds to the likes & then attach action listeners
  let posts = document.getElementsByClassName("media-post");
  posts.forEach(
    (post)=>{
      let likeBttn = post.getElementsByClassName("like")[0];
      likeBttn.setAttribute("id",post.id);
      likeBttn.addEventListener("click", changeHeart);
    }
  )
}


function changeHeart(event){
  let likeBttn = event.likeBttn;
  let likeGlyph= likeBttn.getElementsByClassName("like-glyph")[0];
  if (likeGlyph.innerText==EMPTY_HEART){
    likeGlyph.innerText= FULL_HEART;
  } else {
    likeGlyph.innerText= EMPTY_HEART;
  }
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

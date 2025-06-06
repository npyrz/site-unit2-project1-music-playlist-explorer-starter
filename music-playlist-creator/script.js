function createReviewElement(review) {
   const reviewDiv = document.createElement('div');
   reviewDiv.setAttribute('class', 'playlist-item')

   const playlistImg = document.createElement("img");
   playlistImg.setAttribute("class", "playlist-image");
   playlistImg.src = review.playlist_image;
   reviewDiv.appendChild(playlistImg);

   const playlistName = document.createElement("h1");
   playlistName.textContent = review.playlist_name;
   reviewDiv.appendChild(playlistName);

   const playlistAuthor = document.createElement("p");
   playlistAuthor.textContent = review.playlist_author;
   reviewDiv.appendChild(playlistAuthor);

   const likesIcon = document.createElement("i");
   likesIcon.setAttribute("class", "fa-regular fa-heart");
   reviewDiv.appendChild(likesIcon);

   likesIcon.addEventListener('click', function() {
      console.log("HEY")
      var likeStatus = false;

      if (likeStatus = false) {
         likesIcon.setAttribute("class", "fa-regular fa-heart");
         reviewDiv.appendChild(likesIcon);
         likeStatus = true;
      };
      elseif (likeStatus = true) {
         likesIcon.setAttribute("class", "fa-solid fa-heart");
         reviewDiv.appendChild(likesIcon);
         likeStatus = false;
      }
   });

   // add event handler to check if clickec then changed to 
   // <i class="fa-solid fa-heart"></i>
   // increment 
   // if clicked added then decrement and change back

   const playlistLikes = document.createElement("p");
   playlistLikes.textContent = review.playlist_likes;
   reviewDiv.appendChild(playlistLikes);


   playlistImg.addEventListener('click', function() {
   const modal = document.getElementById("modal-overlay");
   const span = document.getElementsByClassName("close")[0];
   const headerModal = document.getElementById('playlistTitle');
   headerModal.innerHTML = review.playlist_name;
   const authorModal = document.getElementById('artistName');
   authorModal.innerHTML = review.playlist_author;
   const imgModal = document.getElementById('playlistImage');
   imgModal.src = review.playlist_image;

   review.songs.forEach(song => {
      const songTitle = document.getElementById("songTitle");
      songTitle.innerHTML = song.title;
      const songArtist = document.getElementById("songArtist")
      songArtist.innerHTML = song.artist;
      const songDuration = document.getElementById("songDuration");
      //songDuration.innerHTML = song.duration;
      const songImg = document.getElementById('songImg');
      songImg.src = song.img;
      const songAlbum = document.getElementById('songAlbum');
      songAlbum.innerHTML = song.album;
      // FIX THE LOCATION OF DURATION
   })

   
   modal.style.display = "block";
   span.onclick = function() {
   modal.style.display = "none";
   }
   window.onclick = function(event) {
      if (event.target == modal) {
         modal.style.display = "none";
      }
   }
   })
   return reviewDiv;
}

function loadReviews() {
   const reviewList = document.getElementById('playlist-cards')
   
   for (const review of reviews) {
      const reviewElement = createReviewElement(review)
      reviewList.appendChild(reviewElement)
   }
}













function errorPlaylistNotify() {
   const reviewDiv = document.createElement('div');
   reviewDiv.setAttribute('class', 'playlist-item');
   const playlistName = document.createElement("h1");
   playlistName.textContent = `Error: There are no playlists added!`;
   reviewDiv.appendChild(playlistName);
   return reviewDiv;
}

function loaderrorPlaylists() {
   const reviewList = document.getElementById('playlist-cards')
   
   for (const review of reviews) {
      const reviewElement = errorPlaylistNotify(review)
      reviewList.appendChild(reviewElement)
   }
}

document.addEventListener("DOMContentLoaded", (event) => {
   try {
      loadReviews();
   }
   catch(error) {
      loaderrorPlaylists();
   }
   // need to add support for whne the content of data.js for playlists is empty
});
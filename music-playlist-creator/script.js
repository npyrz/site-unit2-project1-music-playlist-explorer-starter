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

   const playlistLikes = document.createElement("p");
   playlistLikes.textContent = review.playlist_likes;
   reviewDiv.appendChild(playlistLikes);


   reviewDiv.addEventListener('click', function() {
   const modal = document.getElementById("modal-overlay");
   const span = document.getElementsByClassName("close")[0];
   const headerModal = document.getElementById('playlistTitle');
   headerModal.innerHTML = review.playlist_name;
   const authorModal = document.getElementById('artistName');
   authorModal.innerHTML = review.playlist_author;
   const imgModal = document.getElementById('playlistImage');
   imgModal.src = review.playlist_image;
   
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
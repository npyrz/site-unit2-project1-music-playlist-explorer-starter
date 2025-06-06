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
   playlistAuthor.textContent = "Creator: " + review.playlist_author;
   reviewDiv.appendChild(playlistAuthor);

   const likesIcon = document.createElement("button");
   likesIcon.setAttribute("class", "like-button");
   likesIcon.innerHTML = "Like";
   reviewDiv.appendChild(likesIcon);

   const playlistLikes = document.createElement("p");
   playlistLikes.textContent = review.playlist_likes;
   reviewDiv.appendChild(playlistLikes);


   let liked = false;
   likesIcon.addEventListener('click', function() {
      let amount = parseInt(review.playlist_likes);
      if (!liked) {
         likesIcon.classList.add("liked");
         likesIcon.innerHTML = "Liked";
         amount++;
         liked = true;
      }  
      else {
         amount;
         liked = false;
         likesIcon.classList.remove("liked");
         likesIcon.innerHTML = "Like";
      }

      playlistLikes.textContent = amount;
      review.playlistLikes = amount.toString();
   });


   playlistImg.addEventListener('click', function() {
   const modal = document.getElementById("modal-overlay");
   const span = document.getElementsByClassName("close")[0];
   const headerModal = document.getElementById('playlistTitle');
   headerModal.innerHTML = review.playlist_name;
   const authorModal = document.getElementById('artistName');
   authorModal.innerHTML = "Creator: " + review.playlist_author;
   const imgModal = document.getElementById('playlistImage');
   imgModal.src = review.playlist_image;

   const songList = document.getElementById("songList");
   songList.innerHTML = " ";

   review.songs.forEach(song => {
      const songContainer = document.createElement("div");
      songContainer.classList.add("songLeftSide");

      const img = document.createElement("img");
      img.src = song.img;
      img.classList.add("songImg");

      const songInfo = document.createElement("div");
      songInfo.classList.add("songInfo");

      const title = document.createElement("h2");
      title.classList.add("songTitle");
      title.textContent = song.title;
      songInfo.appendChild(title);

      const artist = document.createElement("p");
      artist.classList.add("songArtist");
      artist.textContent = "Artist: " + song.artist;
      songInfo.appendChild(artist);

      const album = document.createElement("p");
      album.classList.add("songAlbum");
      album.textContent = song.album;
      songInfo.appendChild(album);

      const duration = document.createElement("p");
      duration.classList.add("songAlbum");
      duration.textContent = song.duration;
      songInfo.appendChild(duration);

      songContainer.appendChild(img);
      songContainer.appendChild(songInfo);
      songList.appendChild(songContainer);

      const shuffleButton = document.getElementById("shuffle-button");
   shuffleButton.onclick = function() {
   console.log("clicked");
   const shuffle = [...review.songs];
   for (let i = shuffle.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
      console.log("New songs");

      songList.innerHTML = " ";

      shuffle.forEach(song => {
      const songContainer = document.createElement("div");
      songContainer.classList.add("songLeftSide");

      const img = document.createElement("img");
      img.src = song.img;
      img.classList.add("songImg");

      const songInfo = document.createElement("div");
      songInfo.classList.add("songInfo");

      const title = document.createElement("h2");
      title.classList.add("songTitle");
      title.textContent = song.title;
      songInfo.appendChild(title);

      const artist = document.createElement("p");
      artist.classList.add("songArtist");
      artist.textContent = "Artist: " + song.artist;
      songInfo.appendChild(artist);

      const album = document.createElement("p");
      album.classList.add("songAlbum");
      album.textContent = song.album;
      songInfo.appendChild(album);

      const duration = document.createElement("p");
      duration.classList.add("songAlbum");
      duration.textContent = song.duration;
      songInfo.appendChild(duration);

      songContainer.appendChild(img);
      songContainer.appendChild(songInfo);
      songList.appendChild(songContainer);
   });
   }
   };
   });

   
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
};



document.addEventListener("DOMContentLoaded", (event) => {
   try {
      loadReviews();
   }
   catch(error) {
      loaderrorPlaylists();
   }
   // need to add support for whne the content of data.js for playlists is empty
});
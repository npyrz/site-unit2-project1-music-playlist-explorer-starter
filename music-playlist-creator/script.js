function createPlaylistElement(playlist) {
   const playlistDiv = document.createElement('div');
   playlistDiv.setAttribute('class', 'playlist-item')

   const playlistImg = document.createElement("img");
   playlistImg.setAttribute("class", "playlist-image");
   playlistImg.src = playlist.playlist_image;
   playlistDiv.appendChild(playlistImg);

   const playlistName = document.createElement("h1");
   playlistName.textContent = playlist.playlist_name;
   playlistDiv.appendChild(playlistName);

   const playlistAuthor = document.createElement("p");
   playlistAuthor.textContent = "Creator: " + playlist.playlist_author;
   playlistDiv.appendChild(playlistAuthor);

   const likesIcon = document.createElement("a");
   likesIcon.setAttribute("class", "like-button");
   likesIcon.innerHTML = "🤍";
   playlistDiv.appendChild(likesIcon);

   const playlistLikes = document.createElement("p");
   playlistLikes.textContent = playlist.playlist_likes;
   playlistDiv.appendChild(playlistLikes);

   let liked = false;
   likesIcon.addEventListener('click', function() {
      let amount = parseInt(playlist.playlist_likes);
      if (!liked) {
         likesIcon.innerHTML = "❤️";
         amount++;
         liked = true;
      }  
      else {
         amount;
         liked = false; 
         likesIcon.innerHTML = "🤍";
      }

      playlistLikes.textContent = amount;
      playlist.playlistLikes = amount.toString();
   });
   
   // Clicking on image of playlist loads modal overlay
   playlistImg.addEventListener('click', function() {
   const modal = document.getElementById("modal-overlay");
   const span = document.getElementsByClassName("close")[0];
   const headerModal = document.getElementById('playlistTitle');
   headerModal.innerHTML = playlist.playlist_name;
   const authorModal = document.getElementById('artistName');
   authorModal.innerHTML = "Creator: " + playlist.playlist_author;
   const imgModal = document.getElementById('playlistImage');
   imgModal.src = playlist.playlist_image;

   const songList = document.getElementById("songList");
   songList.innerHTML = " ";

   playlist.songs.forEach(song => {
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
   const shuffle = [...playlist.songs];
   for (let i = shuffle.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];

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
   return playlistDiv;
}

function loadPlaylists() {
   const playlistList = document.getElementById('playlist-cards')
   for (const playlist of playlists) {
      const playlistElement = createPlaylistElement(playlist)
      playlistList.appendChild(playlistElement)
   }
}

function errorPlaylistNotify() {
   const playlistDiv = document.createElement('div');
   playlistDiv.setAttribute('class', 'playlist-item');
   const playlistName = document.createElement("h1");
   playlistName.textContent = `Error: There are no playlists added!`;
   playlistDiv.appendChild(playlistName);
   return playlistDiv;
}

function loadErrorPlaylists() {
   const playlistList = document.getElementById('playlist-cards')
   for (const playlist of playlists) {
      const playlistElement = errorPlaylistNotify(playlist)
      playlistList.appendChild(playlistElement)
   }
};

document.addEventListener("DOMContentLoaded", (event) => {
   try {
      loadPlaylists();
   }
   catch(error) {
      loadErrorPlaylists();
   }
   // TODO: Need to add support for wheN the content of data.js for playlists is empty
});
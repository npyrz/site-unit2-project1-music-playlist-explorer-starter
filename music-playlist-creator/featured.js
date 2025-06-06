function createFeaturedElement(playlist) {
    const randomPlaylist = Math.floor(Math.random() * playlists.length);
    const selectedRandom = playlists[randomPlaylist]; 
    const featuredDiv = document.getElementById('featuredList');

    const playlistImg = document.getElementById("featuredImg");
    playlistImg.src = selectedRandom.playlist_image;
    featuredDiv.appendChild(playlistImg);

    const playlistName = document.getElementById("featuredTitle");
    playlistName.innerHTML = selectedRandom.playlist_name;
    featuredDiv.appendChild(playlistName);

    const playlistAuthor = document.getElementById("featuredAuthor");
    playlistAuthor.innerHTML = "Creator: " + selectedRandom.playlist_author;
    featuredDiv.appendChild(playlistAuthor);

    const featuredButton = document.getElementById("songButton");
    featuredDiv.appendChild(featuredButton);

    featuredButton.addEventListener('click', function() {
    const modal = document.getElementById("modal-overlay");
    const span = document.getElementsByClassName("close")[0];

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
    });

    return featuredDiv;
}

function loadFeatured() {
    const featuredList = document.getElementById('featuredList')

    for (const playlist of playlists) {
        const featuredElement = createFeaturedElement(playlist)
        featuredList.appendChild(featuredElement)
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    loadFeatured();
})
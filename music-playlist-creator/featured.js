function createFeaturedElement(review) {
    const randomPlaylist = Math.floor(Math.random() * reviews.length);
    const selectedRandom = reviews[randomPlaylist]; 

    const reviewDiv = document.getElementById('featuredList');

    const playlistImg = document.getElementById("featuredImg");
    playlistImg.src = selectedRandom.playlist_image;
    reviewDiv.appendChild(playlistImg);

    const playlistName = document.getElementById("featuredTitle");
    playlistName.innerHTML = selectedRandom.playlist_name;
    reviewDiv.appendChild(playlistName);

    const playlistAuthor = document.getElementById("featuredAuthor");
    playlistAuthor.innerHTML = "Creator: " + selectedRandom.playlist_author;
    reviewDiv.appendChild(playlistAuthor);

    const featuredButton = document.getElementById("songButton");
    reviewDiv.appendChild(featuredButton);

    featuredButton.addEventListener('click', function() {
    const modal = document.getElementById("modal-overlay");
    const span = document.getElementsByClassName("close")[0];

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
    });

//     review.songs.forEach(song => {
//     const songTitle = document.getElementById("songTitle");
//     songTitle.innerHTML = song.title;
//     const songArtist = document.getElementById("songArtist")
//     songArtist.innerHTML = "Artist: " + song.artist;
//     const songDuration = document.getElementById("songDuration");
//     songDuration.innerHTML = song.duration;
//     const songImg = document.getElementById('songImg');
//     songImg.src = song.img;
//     const songAlbum = document.getElementById('songAlbum');
//     songAlbum.innerHTML = "Album: " + song.album;
// })

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

function loadFeatured() {
    const reviewList = document.getElementById('featuredList')

    for (const review of reviews) {
        const reviewElement = createFeaturedElement(review)
        reviewList.appendChild(reviewElement)
    }
}



document.addEventListener("DOMContentLoaded", (event) => {
    loadFeatured();
})






   // review.songs.forEach(song => {
    //     const songTitle = document.getElementById("songTitle");
    //     songTitle.innerHTML = song.title;
    //     const songArtist = document.getElementById("songArtist")
    //     songArtist.innerHTML = "Artist: " + song.artist;
    //     const songDuration = document.getElementById("songDuration");
    //     songDuration.innerHTML = song.duration;
    //     const songImg = document.getElementById('songImg');
    //     songImg.src = song.img;
    //     const songAlbum = document.getElementById('songAlbum');
    //     songAlbum.innerHTML = "Album: " + song.album;
    // })
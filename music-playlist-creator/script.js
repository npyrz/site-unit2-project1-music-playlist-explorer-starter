// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("modal-overlay");
const span = document.getElementsByClassName("close")[0];

function openModal(playlist) {
   document.getElementById('playlistImage').src = playlist.imageUrl;
   document.getElementById('playlistTitle').innerText = playlist.name;
   document.getElementById('artistName').innerText = `Dates: ${playlist.dates}`;
   document.getElementById('playlistSongs').innerHTML = `${playlist.lineup.join(', ')}`;
   modal.style.display = "block";
}

span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}



document.addEventListener("DOMContentLoaded",() => {
   
})
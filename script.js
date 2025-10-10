// Infinite scroll duplication
const track = document.querySelector('.slider-track');
const clone = track.innerHTML;
track.innerHTML += clone;

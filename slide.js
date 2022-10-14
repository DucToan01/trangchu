window.onscroll = function () {

  this.oldScroll = this.scrollY;
}
var video = document.querySelectorAll('video');
var video1 = document.querySelector('.video1');
var video2 = document.querySelector('.video2');
let img = document.querySelector('.img');
let oldValue = 0
let newValue = 0

window.addEventListener('scroll', () => {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    video1.style.display = 'none';
    img.style.display = 'none';
    video2.style.display = 'block';

    var isPlaying = video2.currentTime > 0 && !video2.paused && !video2.ended
      && video2.readyState > video2.HAVE_CURRENT_DATA;

    if (!isPlaying) {
      video2.play();
    }


  } else if (oldValue > newValue) {
    video1.style.display = 'block';
    img.style.display = 'none';
    video2.style.display = 'none';
    var isPlaying = video1.currentTime > 0 && !video1.paused && !video1.ended
      && video1.readyState > video1.HAVE_CURRENT_DATA;

    if (!isPlaying) {
      video1.play();
    }
    video1.play(this);


  }

  oldValue = newValue;
});


var timer = null;
window.addEventListener('scroll', function () {
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    video1.pause(this);
    video2.pause(this);
  }, 10);
}, false);

video2.onclick = function () {
  img.style.display = 'block';
  video2.style.display = 'none';
  

}
video1.onclick = function (e) {
  img.style.display = 'block';
  video1.style.display = 'none';

}
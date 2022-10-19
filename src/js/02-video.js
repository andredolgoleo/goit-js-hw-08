import Player from '@vimeo/player'
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const throtted = throttle(function(sec) {
  localStorage.setItem('videoplayer-current-time', sec);
}, 1000);

player.on('timeupdate', e => {
  throtted(e.seconds);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

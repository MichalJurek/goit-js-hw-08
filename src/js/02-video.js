import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const throttledTimeUpdate = throttle(seconds => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

player.on('timeupdate', function (data) {
  throttledTimeUpdate(data.seconds);
});

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime !== null && !isNaN(parseFloat(savedTime))) {
  player.setCurrentTime(parseFloat(savedTime));
}

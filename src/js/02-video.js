import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

populatePlayer();

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
  const timePlay = evt.seconds;
  // console.log(timePlay);
  localStorage.setItem('videoplayer-current-time', timePlay);
}

function populatePlayer() {
  const saveTime = localStorage.getItem('videoplayer-current-time');
  if (saveTime) {
    player.setCurrentTime(saveTime);
  }
}

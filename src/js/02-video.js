import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const data = function (data) {
  localStorage.setItem('videoplayer-current-time', Math.floor(data.seconds));
};

player.on('timeupdate', throttle(data, 1000));

const timeBeforeFailure = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(timeBeforeFailure);

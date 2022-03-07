import {Display} from 'rot-js';
import {
  GAME_HEIGHT,
  GAME_WIDTH,
} from 'game/configuration/constants';

const display = new Display({
  height: GAME_HEIGHT,
  width: GAME_WIDTH,
});

document.body.appendChild(display.getContainer());

display.drawText(35, 12, "Hello World");

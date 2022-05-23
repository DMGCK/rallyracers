import { Racer } from "../Models/Racers.js";
import { ProxyState } from "../AppState.js";


let _raceInterval = '';

function _draw() {
  let template = '';
  
  ProxyState.racers.forEach(r => {template += r.Template});
  document.getElementById('race-start').innerHTML = template
}

function _moveRacers() {
  ProxyState.racers.forEach(r => {
    const rand = Math.floor(Math.random() * 4);
    
    if (r.distance <= 95) {
      // console.log(r.name, r.distance); 
      r.distance += rand;
      r.move(r.number);
    }

    if (r.distance > 95) {
      console.log('Race has finished!', r.number, 'was the one to win!'); 
      
      clearInterval(_raceInterval);
    }
  })
}
export class RacerController {
  constructor() {
    _draw()
  }

  Start() {
     _raceInterval = setInterval(_moveRacers, 100);
     _raceInterval;
  }

  Reset() {
    ProxyState.racers.forEach(r => r.distance = 0)
    _draw()
  }

 
}
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { RacerController } from "./Controllers/RacerController.js";
import { Racer } from "./Models/Racers.js";
class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  racers = [new Racer('Jimmy', '🎉'), new Racer('Jimothy', '🐱‍👤')];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

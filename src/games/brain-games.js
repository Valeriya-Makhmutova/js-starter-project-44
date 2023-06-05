#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../cli.js';


const startBrainGames = () => {
sayHi();
askNameAndGreet();
};

export default startBrainGames;
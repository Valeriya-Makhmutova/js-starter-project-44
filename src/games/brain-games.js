#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../helpers/cli.js';

const startBrainGames = () => {
    sayHi();
    askNameAndGreet();
};

export default startBrainGames;

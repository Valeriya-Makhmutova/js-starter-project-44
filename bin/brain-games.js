#!/usr/bin/env node
import { greeting, askUserName } from '../src/cli.js';

greeting();
const userName = askUserName();
console.log(`Hello, ${userName}!`);

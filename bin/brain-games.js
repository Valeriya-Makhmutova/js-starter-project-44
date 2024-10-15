#!/usr/bin/env node
import { askUserName } from '../src/cli';

console.log('Welcome to the Brain Games!');

const userName = askUserName();
console.log(`Hello, ${userName}!`);

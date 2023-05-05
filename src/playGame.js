import readlineSync from 'readline-sync';

export const playGame = (gameConfig, userName) => {
    if (!gameConfig.length && gameConfig.isArray()) return;
    let counter = 0;

    while (counter < gameConfig.length) {
        const question = gameConfig[counter][0];
        const correctAnswer = gameConfig[counter][1];
        console.log(`Question: ${question}`);
        const userAnswer = Number(readlineSync.question('Your answer:'));
        if (correctAnswer === userAnswer) {
            counter += 1;
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
            break;
        }
    }
    if(counter === 3) console.log(`Congratulations, ${userName}!`);
}
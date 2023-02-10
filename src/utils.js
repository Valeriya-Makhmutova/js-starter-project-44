export const getMaxOfArray = (numArray) => {
    return Math.max.apply(null, numArray);
}

export const getGeneralDivider = (firstNum, secondNum) => {
    const arrayOfGeneralDividers = [];
    let counter = 1;
    while ((firstNum / counter) >= 1 || (secondNum / counter) >= 1) {
        if (firstNum % counter === 0 && secondNum % counter === 0) {
            arrayOfGeneralDividers.push(counter);
        }
        counter += 1;
    }
    return getMaxOfArray(arrayOfGeneralDividers);
}
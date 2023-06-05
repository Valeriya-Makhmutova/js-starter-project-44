const generateNumber = (min, max) => {
  let number = -1;
  while (number < min || number > max) {
    number = Math.floor(Math.random() * (max + 1));
  }
  return  number;
};

export default generateNumber;



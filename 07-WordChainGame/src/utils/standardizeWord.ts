const standardizeWord = (word: string) => word
  .trim()
  .toLowerCase()
  .split('')
  .reduce((acc, letter, index) => {
    if (index === 0 || word[index - 1] === '-' || word[index - 1] === ' ') {
      acc += letter.toUpperCase();
    } else {
      acc += letter;
    }

    return acc;
  }, '');

export default standardizeWord;

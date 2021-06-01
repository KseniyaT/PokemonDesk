const toCapitalizeFirstLetter = (line: string) => {
  if (!line) {
    return '';
  }
  const arr = line.split(' ').map((word, index) => {
    if (index === 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return word.toLowerCase();
  });

  return arr.join(' ');
};

export default toCapitalizeFirstLetter;

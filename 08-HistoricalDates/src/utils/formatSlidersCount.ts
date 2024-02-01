const formatSlidersCount = (number: number): string => {
  if (number > 9) {
    return String(number);
  }
  return String(number).padStart(2, '0');
};

export default formatSlidersCount;

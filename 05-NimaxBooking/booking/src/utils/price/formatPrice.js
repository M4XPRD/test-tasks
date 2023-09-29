const formatPrice = (num) => {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regex, ' ');
};

export default formatPrice;

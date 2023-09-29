import formatPrice from './formatPrice';

const prices = {
  roomType: {
    Эконом: 1800,
    Стандарт: 2800,
    Люкс: 4000,
  },
  children5To12: 0.5,
  insurance: 0.1,
};

const countPrice = (values) => {
  const {
    roomType, adultsAmount, children5To12, nightsAmount, insurance,
  } = values;
  const priceForAdults = prices.roomType[roomType] * adultsAmount;
  const priceForChildren = prices.roomType[roomType] * children5To12 * prices.children5To12;
  const priceForNights = (priceForAdults + priceForChildren) * nightsAmount;
  const priceWithInsurance = priceForNights * prices.insurance;
  const result = insurance ? priceForNights + priceWithInsurance : priceForNights;
  const newSum = formatPrice(result);

  return newSum;
};

export default countPrice;

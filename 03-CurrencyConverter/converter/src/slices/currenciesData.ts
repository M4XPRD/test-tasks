// Ограничение API, где не все валюты работают и где они дублируются

export const currenciesList = [
  'JPY', 'BGN', 'CZK', 'GBP', 'HUF',
  'PLN', 'RON', 'SEK', 'CHF', 'ISK',
  'NOK', 'HRK', 'RUB', 'TRY', 'BRL',
  'CAD', 'CNY', 'HKD', 'IDR', 'ILS',
  'INR', 'KRW', 'MXN', 'MYR', 'PHP',
  'SGD', 'THB', 'ZAR',
];

export const euroData = {
  name: {
    common: 'European Union',
  },
  flag: '🇪🇺',
  currencies: {
    EUR: {
      name: 'Euro', symbol: '€',
    },
  },
};

export const usdData = {
  name: {
    common: 'United States',
  },
  flag: '🇺🇸',
  currencies: {
    USD: {
      name: 'United States dollar', symbol: '$',
    },
  },
};

export const audData = {
  name: {
    common: 'Australia',
  },
  flag: '🇦🇺',
  currencies: {
    AUD: {
      name: 'Australian dollar', symbol: '$',
    },
  },
};

export const nzdData = {
  name: {
    common: 'New Zealand',
  },
  flag: '🇳🇿',
  currencies: {
    NZD: {
      name: 'New Zealand dollar', symbol: '$',
    },
  },
};

export const dkkData = {
  name: {
    common: 'Denmark',
  },
  flag: '🇩🇰',
  currencies: {
    DKK: {
      name: 'Danish krone', symbol: 'kr',
    },
  },
};

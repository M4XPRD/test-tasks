import plural from 'plural-ru';

export const pluralizeNights = (values) => {
  const nights = plural(values.nightsAmount, 'ночь', 'ночи', 'ночей');
  return `Номер «${values.roomType}» на ${values.nightsAmount} ${nights}`;
};

// Макет - 2 взрослых, 2 ребенка от 12 лет и 1 ребенок младше 12 лет
// На деле - 2 взрослых, 2 ребенка от 5 до 12 лет и 1 ребенок младше 5 лет

export const pluralizeVisitors = (values) => {
  const { adultsAmount, children5To12, childrenBelow5 } = values;
  const adultsDeclension = plural(values.adultsAmount, 'взрослый', 'взрослых', 'взрослых');
  const children5To12Declension = plural(values.children5To12, 'ребёнок', 'ребёнка', 'детей');
  const childrenBelow5Declension = plural(values.childrenBelow5, 'ребёнок', 'ребёнка', 'детей');

  const adultsPlural = `${adultsAmount} ${adultsDeclension}`;
  const children5To12Plural = children5To12 > 0
    ? `, ${children5To12} ${children5To12Declension} от 5 до 12 лет`
    : '';
  const childrenBelow5Plural = childrenBelow5 > 0 ? ` и ${childrenBelow5} ${childrenBelow5Declension} младше 5 лет` : '';

  return `${adultsPlural}${children5To12Plural}${childrenBelow5Plural}`;
};

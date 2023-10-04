import * as yup from 'yup';

const validationSchema = yup.object().shape({
  adultsAmount: yup
    .number()
    .min(1, 'Должен быть минимум 1 взрослый')
    .required('Это поле обязательно'),
  children5To12: yup
    .number(),
  childrenBelow5: yup
    .number()
    .test(
      'acceptedAmount',
      'Допустимо максимум 3 ребёнка на 1 взрослого',
      (children, { parent: { adultsAmount } }) => {
        if (adultsAmount > 0 && children > 0) {
          const acceptedRatio = 0.33;
          const currentRatio = (adultsAmount / children).toFixed(2);
          return currentRatio === Infinity
            ? true
            : currentRatio >= acceptedRatio;
        }
        return true;
      },
    ),
  nightsAmount: yup
    .number()
    .min(1, 'Нужно остановиться минимум на 1 ночь')
    .required('Это поле обязательно'),
  surname: yup
    .string()
    .matches(/^[^\d]*$/, 'Поле не должно содержать цифры')
    .required('Это поле обязательно'),
  name: yup
    .string()
    .matches(/^[^\d]*$/, 'Поле не должно содержать цифры')
    .required('Это поле обязательно'),
  middleName: yup
    .string()
    .matches(/^[^\d]*$/, 'Поле не должно содержать цифры'),
  phoneNumber: yup
    .string()
    .min(8, 'Проверьте количество символов в номере')
    .required('Это поле обязательно'),
  birthDate: yup
    .string()
    .required('Это поле обязательно'),
});

export default validationSchema;

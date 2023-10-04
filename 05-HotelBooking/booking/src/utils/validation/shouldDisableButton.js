const shouldDisableButton = (errors, values, page) => {
  switch (page) {
    case 0: {
      return (
        errors.adultsAmount
        || errors.childrenBelow5
        || errors.nightsAmount
        || !values.adultsAmount
        || !values.nightsAmount
      );
    }
    case 1: {
      return (
        errors.surname
        || errors.name
        || errors.phoneNumber
        || errors.birthDate
        || !values.surname
        || !values.name
        || !values.phoneNumber
        || !values.birthDate
      );
    }
    default:
      return false;
  }
};

export default shouldDisableButton;

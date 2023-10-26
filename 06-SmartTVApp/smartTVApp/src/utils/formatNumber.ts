import numberPattern from './numberPattern';

const formatPhoneNumber = (inputArray: string[]) => inputArray
  .reduce((acc: string, num: string) => {
    const updatedAcc = acc.replace(/_/, num);
    acc = updatedAcc;
    return acc;
  }, numberPattern);

export default formatPhoneNumber;

import numberPattern from './numberPattern';

const formatPhoneNumber = (inputArray: number[]) => inputArray
  .reduce((acc: string, num: number) => {
    const updatedAcc = acc.replace(/_/, String(num));
    acc = updatedAcc;
    return acc;
  }, numberPattern);

export default formatPhoneNumber;

const validatePhoneNumber = async (phoneNumber: string) => {
  const APIKey = '404e08ced7ba686646b5c8cd0cd44ef7';
  const APILink = `http://apilayer.net/api/validate?access_key=${APIKey}&number=${phoneNumber}&country_code=RU&format=1`;
  const response = await fetch(APILink);
  const result = await response.json();
  return result;
};

export default validatePhoneNumber;

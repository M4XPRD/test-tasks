const validatePhoneNumber = async (phoneNumber: string) => {
  const APIKey = 'xbdRRRIbw6bVRa239yOryrAspsxDAkX0';
  const APILink = `https://api.apilayer.com/number_verification/validate?number=+7${phoneNumber}`;
  const response = await fetch(APILink, {
    method: 'GET',
    headers: {
      apikey: APIKey,
    },
  });
  const result = await response.json();
  console.log(result);

  return result;
};

export default validatePhoneNumber;

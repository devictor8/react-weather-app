const KEY = 'f35a55f259504178842163911241302';

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
};

export default fetchData;

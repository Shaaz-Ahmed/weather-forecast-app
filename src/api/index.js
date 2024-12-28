const baseURL = "https://api.weatherapi.com/v1/current.json?key=162ae16ac1104e0db3d44201242812";

export const getWeatherDataForCity = async(city) =>{
  const response = await fetch (`${baseURL}&q={city}&aqi=yes`) 
  return await response.json(); 
};
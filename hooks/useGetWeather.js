import { useEffect, useState, useCallback } from 'react';

const useGetWeather = (lat, long) => {
  const [weather, setWeather] = useState();

  const getWeather = useCallback(async () => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
    );
    const result = await response.json();
    setWeather(result);
  }, [lat, long]);

  useEffect(() => {
    getWeather();
  }, [lat, long]);

  return weather;
};

export default useGetWeather;

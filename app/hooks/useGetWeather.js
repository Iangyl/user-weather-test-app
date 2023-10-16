import { useState } from 'react';

const useGetWeather = () => {
  const [weather, setWeather] = useState();

  const getWeather = useCallback(async (lat, long) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}`
    );
    const result = await response.json();
    if (isJsonString(result)) {
      setWeather(result);
    } else {
      setWeather(undefined);
    }
  }, []);

  return { weather, getWeather };
};

export default useGetWeather;

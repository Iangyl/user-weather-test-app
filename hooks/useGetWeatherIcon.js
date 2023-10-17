import { useCallback, useEffect, useState } from 'react';
import weathercodes from '@/assets/json/weathercode.json';

const useGetWeatherIcon = (code) => {
  const [icon, setIcon] = useState();

  const getIcon = useCallback(() => {
    const icon = weathercodes[code];
    setIcon(icon);
  }, [code]);

  useEffect(() => {
    getIcon();
  }, [code]);

  return icon;
};

export default useGetWeatherIcon;

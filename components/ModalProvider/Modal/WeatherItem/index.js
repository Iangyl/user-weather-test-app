import useGetWeatherIcon from '@/hooks/useGetWeatherIcon';

import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';

import styles from './index.module.sass';

const WeatherItem = ({
  minTemperature,
  maxTemperature,
  weathercode,
  dayName,
}) => {
  const weatherIcon = useGetWeatherIcon(weathercode);

  return (
    <li className={styles.weatherItem}>
      <div className={styles.figuresContainer}>
        {weatherIcon ? (
          <>
            <figure className={styles.figure}>
              <Image
                width={36}
                height={36}
                src={weatherIcon?.day?.image}
                alt={weatherIcon?.day?.description}
              />
              <figcaption>{maxTemperature} °C</figcaption>
            </figure>
            <figure className={styles.figure}>
              <Image
                width={36}
                height={36}
                src={weatherIcon?.night?.image}
                alt={weatherIcon?.night?.description}
              />
              <figcaption>{minTemperature} °C</figcaption>
            </figure>
          </>
        ) : (
          <>
            <Skeleton variant="rectangular" width={56} height={56} />
            <Skeleton variant="rectangular" width={56} height={56} />
          </>
        )}
      </div>
      <p className={styles.dayName}>{dayName}</p>
    </li>
  );
};

export default WeatherItem;

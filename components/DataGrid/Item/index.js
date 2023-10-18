'use client';
import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useGetWeather from '@/hooks/useGetWeather';
import { addUser } from '@/redux/slices/usersSlice';
import useGetWeatherIcon from '@/hooks/useGetWeatherIcon';
import { useModal } from '@/components/ModalProvider/ModalProvider';
// import { findTodayDateIndex } from '@/utils/helpers';

import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

import styles from './index.module.sass';

const Item = ({
  mode,
  name: userName,
  location,
  gender,
  email,
  picture,
  login,
}) => {
  const ref = useRef(null);
  const { openModal, openSnackbar } = useModal();
  const dispatch = useDispatch();
  const { first, last } = userName;
  const {
    country,
    state,
    city,
    street: { name, number },
    coordinates: { latitude, longitude },
  } = location;
  const { medium } = picture;
  const { username } = login;
  const weather = useGetWeather(latitude, longitude);
  const dayIdx = 0; // findTodayDateIndex(weather?.daily?.time); - i forgot about time zones
  const weatherIcon = useGetWeatherIcon(weather?.daily?.weathercode[dayIdx]);

  const handleSaveButtonClick = useCallback(() => {
    ref.current.style.display = 'none'
    const user = {
      name: userName,
      login,
      gender,
      email,
      location,
      picture,
    };
    dispatch(addUser(user));
    openSnackbar();
  }, []);

  const handleWeatherButtonClick = useCallback(() => {
    openModal(weather?.daily);
  }, [weather]);

  return (
    <Paper className={styles.paper} elevation={3}>
      <figure className={styles.avatar}>
        <Image
          width={120}
          height={120}
          styles={{ borderRadius: '50%' }}
          src={medium}
          alt="pic"
        />
      </figure>
      <h2 className={styles.name}>{`${first} ${last}`}</h2>
      <p className={styles.gender}>{gender}</p>
      <address className={styles.details}>
        <p className={styles.detail}>
          <span>Login:</span>
          <span>{username}</span>
        </p>
        <p className={styles.detail}>
          <span>Email:</span>
          <span>{email}</span>
        </p>
        <p className={styles.detail}>
          <span>Address:</span>
          <span>{`${country}, ${state}, ${city}, ${name}, ${number}`}</span>
        </p>
      </address>
      <h3 className={styles.weatherTitle}>Weather</h3>
      <div className={styles.weatherDetails}>
        {weatherIcon ? (
          <>
            <figure>
              <Image
                width={64}
                height={64}
                src={weatherIcon?.day?.image}
                alt={weatherIcon?.day?.description}
              />
              <figcaption>
                {weather?.daily?.temperature_2m_max[dayIdx]} °C
              </figcaption>
            </figure>
            <figure>
              <Image
                width={64}
                height={64}
                src={weatherIcon?.night?.image}
                alt={weatherIcon?.night?.description}
              />
              <figcaption>
                {weather?.daily?.temperature_2m_min[dayIdx]} °C
              </figcaption>
            </figure>
          </>
        ) : (
          <>
            <Skeleton variant="rectangular" width={84} height={84} />
            <Skeleton variant="rectangular" width={84} height={84} />
          </>
        )}
      </div>
      <div className={styles.buttonContainer}>
        {mode !== 'saved_users' && (
          <Button ref={ref} variant="contained" onClick={handleSaveButtonClick}>
            Save
          </Button>
        )}
        <Button variant="outlined" onClick={handleWeatherButtonClick}>
          Weather
        </Button>
      </div>
    </Paper>
  );
};

export default Item;

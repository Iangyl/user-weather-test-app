'use client';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useGetWeather from '@/hooks/useGetWeather';
import { addUser } from '@/redux/slices/usersSlice';
import useGetWeatherIcon from '@/hooks/useGetWeatherIcon';
import { findTodayDateIndex } from '@/utils/helpers';

import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import styles from './index.module.sass';

const Item = ({ name: userName, location, gender, email, picture, login }) => {
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
  const dayIdx = 0 // findTodayDateIndex(weather?.daily?.time); - i forgot about time zones
  const weatherIcon = useGetWeatherIcon(weather?.daily?.weathercode[dayIdx]);

  console.log('Weather:', weather);
  console.log('Weather icon:', weatherIcon);

  const handleSaveButtonClick = useCallback(() => {
    const user = {
      name: userName,
      login,
      gender,
      email,
      location,
      picture,
    };
    dispatch(addUser(user));
  }, []);

  return (
    <Paper className={styles.paper} elevation={3}>
      <figure className={styles.avatar}>
        <Image
          width={120}
          height={120}
          styles={{ borderRadius: '50%' }}
          src={medium}
          alt=""
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
        <figure>
          <Image
            width={64}
            height={64}
            src={weatherIcon?.day?.image}
            alt={weatherIcon?.day?.descriptions}
          />
          <figcaption>{weather?.daily?.temperature_2m_max[dayIdx]} °C</figcaption>
        </figure>
        <figure>
          <Image
            width={64}
            height={64}
            src={weatherIcon?.night?.image}
            alt={weatherIcon?.night?.descriptions}
          />
          <figcaption>{weather?.daily?.temperature_2m_min[dayIdx]} °C</figcaption>
        </figure>
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="contained" onClick={handleSaveButtonClick}>
          Save
        </Button>
        <Button variant="outlined" onClick={''}>Weather</Button>
      </div>
    </Paper>
  );
};

export default Item;
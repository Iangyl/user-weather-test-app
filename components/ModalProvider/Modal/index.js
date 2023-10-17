'use client';
import { getDayNameFromDate } from '@/utils/helpers';

import WeatherItem from './WeatherItem';

import styles from './index.module.sass';

const Modal = ({ onClose, content }) => {
  return (
    <div className={styles.modal}>
      <ul>
        {content?.time.map((item, idx) => (
          <WeatherItem
            key={idx}
            minTemperature={content?.temperature_2m_min[idx]}
            maxTemperature={content?.temperature_2m_max[idx]}
            weathercode={content?.weathercode[idx]}
            dayName={getDayNameFromDate(item)}
          />
        ))}
      </ul>
      <button aria-label="Close iframe" onClick={() => onClose()}></button>
    </div>
  );
};

export default Modal;

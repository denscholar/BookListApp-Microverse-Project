/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
import { time } from './index.js';

const currentTime = () => {
  const localTime = luxon.DateTime.local();
  time.textContent = `${localTime.toLocaleString(luxon.DateTime.DATE_FULL)}, ${localTime.toLocaleString(luxon.DateTime.TIME_WITH_SECONDS)}`;
  setTimeout(currentTime, 1000);
};

export default currentTime;
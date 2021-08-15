import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeAutoObservable } from 'mobx';

import {
  MILLISECONDS_PER_SECOND,
  SECONDS_PER_MINUTE,
  MINUTE_PER_HOUR,
  HOUR_PER_CIRCLE
} from './constants';

class Timer {
  date

  constructor() {
    makeAutoObservable(this);
    this.setDate(new Date);
  }

  setDate(date) {
    this.date = date;
  }

  get secondAngle() {
    const seconds = this.date.getSeconds() + this.date.getMilliseconds() / MILLISECONDS_PER_SECOND;
    return 2 * Math.PI * seconds / SECONDS_PER_MINUTE;
  }

  get minuteAngle() {
    const minutes = this.date.getMinutes() + (this.date.getSeconds() + this.date.getMilliseconds() / MILLISECONDS_PER_SECOND) / SECONDS_PER_MINUTE;
    return 2 * Math.PI * minutes / MINUTE_PER_HOUR;
  }

  get hourAngle() {
    const hours = this.date.getHours() + (this.date.getMinutes() + (this.date.getSeconds() + this.date.getMilliseconds() / MILLISECONDS_PER_SECOND) / SECONDS_PER_MINUTE) / MINUTE_PER_HOUR;
    return 2 * Math.PI * hours / HOUR_PER_CIRCLE;
  }
}

const TimerContext = createContext();

export const useTimer = () => useContext(TimerContext);


const TimerContextProvider =  ({ children }) => <TimerContext.Provider value={new Timer()}>{children}</TimerContext.Provider>;

TimerContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default TimerContextProvider;
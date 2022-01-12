import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

import {
  INTERVAL,
  CIRCLE_SROKE_WIDTH,
  SCREEN_PADDING
} from '../constants';
import { useTimer } from '../TimerContextProvider';
import ClockFace from './ClockFace';
import Arrows from './Arrows/';

const Clock = observer(({ size }) => {
  const timer = useTimer();

  useEffect(() => {
      let prev = null;
      let requestId = null;

      const action = (timestamp) => {
        if (!prev || timestamp - prev >= INTERVAL) {
          prev = timestamp;
          timer.setDate(new Date());
        }

         requestId = window.requestAnimationFrame(action);
      }

      requestId = window.requestAnimationFrame(action);

      return () => {
        if(requestId !== null) {
          window.cancelAnimationFrame(requestId);
        }
      }
    }, [timer])

  const center = size / 2;
  const circleRadius = center - CIRCLE_SROKE_WIDTH / 2 - SCREEN_PADDING;

  return (
     <>
      <ClockFace radius={circleRadius} x0={center} y0={center} />
      <Arrows radius={circleRadius} x0={center} y0={center} />
    </>
    );
});

Clock.propTypes = { size: PropTypes.number.isRequired };

export default Clock;

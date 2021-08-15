import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

import { HOUR_ARROW_INDEX, HOUR_ARROW_WIDTH } from '../../constants';
import { useTimer } from '../../TimerContextProvider';
import Arrow from './Arrow';

const HourArrow = observer(({radius, ...props}) => {
  const timer = useTimer();

  return <Arrow {...props} length={HOUR_ARROW_INDEX * radius} width={HOUR_ARROW_WIDTH} shouldRounded angle={timer.hourAngle} />
});

HourArrow.propTypes = {
  radius: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired
};

export default HourArrow;

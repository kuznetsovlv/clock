import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

import { MINUTE_ARROW_INDEX, MINUTE_ARROW_WIDTH } from '../../constants';
import { useTimer } from '../../TimerContextProvider';
import Arrow from './Arrow';

const MinuteArrow = observer(({radius, ...props}) => {
  const timer = useTimer();

  return <Arrow {...props} length={MINUTE_ARROW_INDEX * radius} width={MINUTE_ARROW_WIDTH} shouldRounded angle={timer.minuteAngle} />;
});

MinuteArrow.propTypes = {
  radius: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired
};

export default MinuteArrow;

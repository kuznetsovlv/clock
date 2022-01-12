import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

import { SECOND_ARROW_INDEX, SECOND_ARROW_WIDTH } from '../../constants';
import { useTimer } from '../../TimerContextProvider';
import Arrow from './Arrow';

const SecondArrow = observer(({radius, ...props}) => {
  const timer = useTimer();

  return <Arrow {...props} length={SECOND_ARROW_INDEX * radius} width={SECOND_ARROW_WIDTH} angle={timer.secondAngle} />;
});

SecondArrow.propTypes = {
  radius: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired,
};

export default SecondArrow;

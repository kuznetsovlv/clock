import React from 'react';
import PropTypes from 'prop-types';

import SecondArrow from './SecondArrow';
import MinuteArrow from './MinuteArrow';
import HourArrow from './HourArrow';


const Arrows = (props) =>  (
  <g>
    <SecondArrow {...props}/>
    <MinuteArrow {...props} />
    <HourArrow {...props} />
  </g>
);


Arrows.propTypes = {
  radius: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired
}

export default Arrows;

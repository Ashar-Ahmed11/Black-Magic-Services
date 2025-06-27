import React, { memo } from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = memo(() => (
  <TypeAnimation
    sequence={[
      'Solve Love Problems',
      2000,
      'Online Istikhara',
      2000,
      'Black Magic Services',
      2000,
      'Kala Jaadu ka Tor',
      2000
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
));

export default AnimatedText;

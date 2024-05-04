import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const MoonPhaseReveal: React.FC = () => {
  const moonPhase = useSpring({
    to: [
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(30deg)' },
      { transform: 'rotate(60deg)' },
      { transform: 'rotate(90deg)' },
      { transform: 'rotate(120deg)' },
      { transform: 'rotate(150deg)' },
      { transform: 'rotate(180deg)' },
      { transform: 'rotate(210deg)' },
      { transform: 'rotate(240deg)' },
      { transform: 'rotate(270deg)' },
      { transform: 'rotate(300deg)' },
      { transform: 'rotate(330deg)' },
      { transform: 'rotate(360deg)' },
    ],
    config: { duration: 10000, easing: (t) => t },
    loop: true,
  });

  const moonRef = useRef<any>(null);

  return (
    <animated.div
      ref={moonRef}
      style={{
        ...moonPhase,
        width: '100px',
        height: '100px',
        backgroundColor: 'gray',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '-50px 0 0 -50px',
      }}
    />
  );
};

export default MoonPhaseReveal;
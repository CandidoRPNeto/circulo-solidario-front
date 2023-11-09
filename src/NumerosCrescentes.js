import './App.css';
import React from 'react';
import { useSpring, animated } from 'react-spring';

function NumerosCrescentes() {
  const { number, opacity, y } = useSpring({
    from: { number: 950, opacity: 0, y: -50 },
    to: async (next) => {
      await next({ number: 1093, opacity: 1, y: 0 });
    },
    config: { duration: 900 }, // Ajuste a duração conforme necessário
  });

  return (
    <animated.div style={{ opacity, transform: y.interpolate((val) => `translate3d(0, ${val}px, 0)`) }}>
      <animated.h1 class="text-warning text-center">{number.interpolate((val) => Math.floor(val))}</animated.h1>
      <animated.h2 class="text-warning text-center">Downloads</animated.h2>
    </animated.div>
  );
}

export default NumerosCrescentes;

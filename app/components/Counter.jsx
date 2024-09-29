import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ target, duration, classVal }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) return;

    const totalTime = duration * 1000; 
    const incrementCount = target / (totalTime / 100); 
    let start = 0;

    const timer = setInterval(() => {
      start += incrementCount; 
      if (start >= target) {
        start = target; 
        clearInterval(timer);
      }
      setCount(Math.floor(start)); 
    }, 100); 

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref} className={classVal}>{count}</span>;
};

export default Counter;

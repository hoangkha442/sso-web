import { useState, useEffect } from 'react';

const useCount = (endValue: number, duration: number, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const increment = endValue / (duration / 10.00); 
    
    const counting = () => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
      } else {
        setCount(Math.ceil(start));
        requestAnimationFrame(counting);
      }
    };

    requestAnimationFrame(counting);
  }, [endValue, duration, startCounting]);

  return count;
};

export default useCount;

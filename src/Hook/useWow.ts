import { useEffect } from 'react';
import WOW from 'wow.js';
import 'animate.css';

const useWow = () => {
  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();

    return () => {
      wow.sync();
    };
  }, []);
};

export default useWow;

import React from 'react';
import usga from '../../../assets/usga.png';
import lyft from '../../../assets/lyft.png';
import rB from '../../../assets/r&b.png';
import box from '../../../assets/box.png';
import 'animate.css';
import useWow from '../../../Hook/useWow';

type Props = {}

const Companies: React.FC<Props> = () => {
  useWow();

  return (
    <section className="bg-white py-6 px-6 lg:px-[175px] flex flex-wrap lg:flex-nowrap justify-between items-center">
      <div className="flex items-center justify-center w-1/2 lg:w-1/6 h-full wow animate__fadeInLeft mb-4 lg:mb-0">
        <div className="w-full h-[150px] lg:w-36 lg:h-[225px] bg-gradient-to-r from-gray-200 via-gray-300 to-white"></div>
      </div>
      <div className="flex items-center justify-center w-1/2 lg:w-1/6 hover:scale-105 transition-transform duration-300 wow animate__fadeInUp mb-4 lg:mb-0" data-wow-delay="0.2s">
        <img src={usga} alt="USGA" className="object-contain max-h-[60px] lg:max-h-[100px]" />
      </div>
      <div className="flex items-center justify-center w-1/2 lg:w-1/6 hover:scale-105 transition-transform duration-300 wow animate__fadeInUp mb-4 lg:mb-0" data-wow-delay="0.4s">
        <img src={lyft} alt="Lyft" className="object-contain max-h-[60px] lg:max-h-[100px]" />
      </div>
      <div className="flex items-center justify-center w-1/2 lg:w-1/6 hover:scale-105 transition-transform duration-300 wow animate__fadeInUp mb-4 lg:mb-0" data-wow-delay="0.6s">
        <img src={rB} alt="Room & Board" className="object-contain max-h-[60px] lg:max-h-[100px]" />
      </div>
      <div className="flex items-center justify-center w-1/2 lg:w-1/6 hover:scale-105 transition-transform duration-300 wow animate__fadeInUp mb-4 lg:mb-0" data-wow-delay="0.8s">
        <img src={box} alt="Box" className="object-contain max-h-[60px] lg:max-h-[100px]" />
      </div>
      <div className="flex items-center justify-center w-1/2 lg:w-1/6 h-full wow animate__fadeInRight" data-wow-delay="1s">
        <div className="w-full h-[150px] lg:w-36 lg:h-[225px] bg-gradient-to-l from-gray-200 via-gray-300 to-white flex items-center justify-center hover:bg-gray-300 transition-all duration-300">
          <button className="text-gray-500 text-sm lg:text-base">See More</button>
        </div>
      </div>
    </section>
  );
}

export default Companies;

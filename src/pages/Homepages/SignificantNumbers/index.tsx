import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useCount from '../../../Hook/useCount';
import useWow from '../../../Hook/useWow';

type Props = {}

const SignificantNumbers: React.FC<Props> = () => {
  const language = useSelector((state: RootState) => state.language);
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const userAuthCount = useCount(1000, 2000, startCounting); 
  const customerCount = useCount(100, 2000, startCounting);  

  useWow();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className='py-12 lg:py-16'>
      <h1 className='font-bold text-[28px] leading-8 lg:text-[48px] lg:leading-[56px] text-[#363F44] wow animate__fadeInDown'>
        {language === 'en' ? 'The significant numbers' : 'Các con số đáng chú ý'}
      </h1>
      <p className='mt-4 text-[#54626A] text-base lg:text-lg wow animate__fadeInDown' data-wow-delay="0.2s">
        {language === 'en' ? 'From start-ups to large enterprises, companies of all sizes depend on THD to prevent unauthorized access.' : 
        'Từ các công ty khởi nghiệp đến các doanh nghiệp lớn, các công ty thuộc mọi quy mô đều phụ thuộc vào THD để ngăn chặn truy cập trái phép.'}
      </p>
      <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-52 pt-12">
          <div className="flex flex-col space-y-2 items-center lg:items-start">
              <p className='text-[48px] lg:text-[75px] font-bold text-[#E3343F] m-plus'>{userAuthCount} <span>+</span></p>
              <p className='text-[#363F44] font-bold text-base lg:text-[17.3px]'>
                {language === 'en' ? 'Monthly User Authentications' : 'Xác thực Người dùng Hàng tháng'}
              </p>
          </div>
          <div className="flex flex-col space-y-2 items-center lg:items-start">
              <p className='text-[48px] lg:text-[75px] font-bold text-[#E3343F] m-plus'>{customerCount} <span>+</span></p>
              <p className='text-[#363F44] font-bold text-base lg:text-[17.3px]'>
                {language === 'en' ? 'Customers' : 'Khách hàng'}
              </p>
          </div>
      </div>
    </section>
  );
}

export default SignificantNumbers;

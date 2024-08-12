import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import banner from '../../../assets/banner-hero.png';
import 'animate.css';
import useWow from '../../../Hook/useWow';

type Props = {}

const Banner: React.FC<Props> = () => {
  const language = useSelector((state: RootState) => state.language);

  useWow()

  return (
    <section id="banner-section" className="relative h-[645px] flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={banner}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <div className="relative flex z-10 space-x-20 w-full px-[175px]">
        <div className="w-1/2 wow animate__fadeInLeft">
          <h1 className="text-white text-[44px] leading-[48px] font-bold mb-8">
            {language === 'en' 
              ? 'Your trusted partner in IT and Cyber Security' 
              : 'Đối tác tin cậy của bạn trong IT và An ninh mạng'}
          </h1>
          <p className="text-white text-lg mb-8">
            {language === 'en' 
              ? 'Easy to use. Incredibly effective. THD Cyber Security simplifies identity security for your business.' 
              : 'Dễ sử dụng. Hiệu quả đáng kinh ngạc. THD Cyber Security đơn giản hóa bảo mật danh tính cho doanh nghiệp của bạn.'}
          </p>
          <div className="flex space-x-4">
            <button className="text-base bg-[#363F44] rounded-xl py-4 px-6 text-white">
              {language === 'en' ? 'Free Trial' : 'Dùng thử miễn phí'}
            </button>
            <button className="text-base border border-[#363F44] bg-white rounded-xl py-4 px-6 text-[#363F44]">
              {language === 'en' ? 'Contact Sales' : 'Liên hệ bán hàng'}
            </button>
          </div>
        </div>

        <div className="w-1/2">
          {/* Other content can be added here */}
        </div>
      </div>
    </section>
  );
}

export default Banner;

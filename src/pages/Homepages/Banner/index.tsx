import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import banner from '../../../assets/banner-hero.png';
import 'animate.css';
import useWow from '../../../Hook/useWow';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Banner: React.FC<Props> = () => {
  const language = useSelector((state: RootState) => state.language);
  useWow();
  const navigate = useNavigate();

  return (
    <section id="banner-section" className="relative h-[500px] md:h-[645px] lg:h-[750px] flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={banner}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <div className="relative flex flex-col md:flex-row z-10 space-y-6 md:space-y-0 md:space-x-20 w-full px-6 md:px-[175px] lg:px-[200px]">
        <div className="w-full lg:w-1/2 wow animate__fadeInLeft">
          <h1 className="text-white text-[28px] md:text-[44px] lg:text-[56px] leading-[32px] md:leading-[48px] lg:leading-[64px] font-bold mb-4 md:mb-8 lg:mb-10">
            {language === 'en' 
              ? 'Your trusted partner in IT and Cyber Security' 
              : 'Đối tác tin cậy của bạn trong IT và An ninh mạng'}
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl mb-4 md:mb-8 lg:mb-10">
            {language === 'en' 
              ? 'Easy to use. Incredibly effective. THD Cyber Security simplifies identity security for your business.' 
              : 'Dễ sử dụng. Hiệu quả đáng kinh ngạc. THD Cyber Security đơn giản hóa bảo mật danh tính cho doanh nghiệp của bạn.'}
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="text-base lg:text-lg bg-[#363F44] rounded-xl py-3 px-4 md:py-4 md:px-6 lg:py-5 lg:px-8 text-white">
              {language === 'en' ? 'Free Trial' : 'Dùng thử miễn phí'}
            </button>
            <button onClick={() => { navigate('/get-in-touch') }} className="text-base lg:text-lg border border-[#363F44] bg-white rounded-xl py-3 px-4 md:py-4 md:px-6 lg:py-5 lg:px-8 text-[#363F44]">
              {language === 'en' ? 'Contact Sales' : 'Liên hệ bán hàng'}
            </button>
          </div>
        </div>

        <div className="hidden lg:w-1/2">
          {/* Other content can be added here */}
        </div>
      </div>
    </section>
  );
}

export default Banner;

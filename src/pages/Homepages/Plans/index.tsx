import React from 'react';
import free from '../../../assets/Duo-Free_Icon.svg fill.png';
import advantage from '../../../assets/Duo-Advantage_Icon.svg.png';
import essentials from '../../../assets/Duo-Essentials_Icon.svg.png';
import premier from '../../../assets/Duo-Premier_Icon.svg fill.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import 'animate.css';
import useWow from '../../../Hook/useWow';

type Props = {}

const Plans: React.FC<Props> = () => {
  const language = useSelector((state: RootState) => state.language);

  useWow();

  return (
    <section className='bg-[#E3343F] py-12 lg:py-24 px-6 lg:px-[175px]'>
      <div className='mb-8 text-center lg:text-left'>
        <h2 className='text-white text-2xl lg:text-4xl font-bold wow animate__fadeInDown'>
          {language === 'en' ? 'Built to fit your business' : 'Thiết kế phù hợp với doanh nghiệp của bạn'}
        </h2>
        <p className='text-white mt-4 lg:mt-6 wow animate__fadeInDown'>
          {language === 'en' ? 
            'Get 30 days free. Choose a plan, pay easily with a credit card, and get activated in minutes.' :
            'Nhận 30 ngày miễn phí. Chọn một gói, thanh toán dễ dàng bằng thẻ tín dụng và kích hoạt trong vài phút.'}
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-8'>
        <div className='text-white w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] wow animate__fadeInUp'>
          <img src={free} alt="THD Free" className='object-cover'/>
          <h3 className='font-bold text-xl lg:text-2xl my-4'>
            {language === 'en' ? 'THD Free' : 'THD Miễn phí'}
          </h3>
          <p className='mb-4 text-sm lg:text-base'>
            {language === 'en' ? 'Add up to 10 users at no cost, and get:' : 'Thêm tối đa 10 người dùng miễn phí, và nhận được:'}
          </p>
          <ul className='space-y-2 pl-4 text-sm lg:text-base'>
            <li>{language === 'en' ? 'Strong MFA' : 'MFA mạnh mẽ'}</li>
            <li>{language === 'en' ? 'Seamless integrations' : 'Tích hợp liền mạch'}</li>
            <li>{language === 'en' ? 'Free authenticator app' : 'Ứng dụng xác thực miễn phí'}</li>
          </ul>
        </div>
        <div className='text-white w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] wow animate__fadeInUp' data-wow-delay="0.2s">
          <img src={essentials} alt="THD Essentials" className='object-cover'/>
          <h3 className='font-bold text-xl lg:text-2xl my-4'>
            {language === 'en' ? 'THD Essentials' : 'THD Cơ bản'}
          </h3>
          <p className='mb-4 text-sm lg:text-base'>
            {language === 'en' ? 'Includes everything in Duo Free, plus:' : 'Bao gồm tất cả trong THD Miễn phí, cộng thêm:'}
          </p>
          <ul className='space-y-2 pl-4 text-sm lg:text-base'>
            <li>{language === 'en' ? 'Phishing resistant MFA using FIDO2' : 'MFA chống lừa đảo sử dụng FIDO2'}</li>
            <li>{language === 'en' ? 'Single Sign-On' : 'Đăng nhập một lần (SSO)'}</li>
            <li>{language === 'en' ? 'Passwordless authentication' : 'Xác thực không cần mật khẩu'}</li>
            <li>{language === 'en' ? 'Trusted endpoints' : 'Điểm cuối tin cậy'}</li>
            <li>{language === 'en' ? 'User group policies' : 'Chính sách nhóm người dùng'}</li>
          </ul>
        </div>
        <div className='text-white w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] wow animate__fadeInUp' data-wow-delay="0.4s">
          <img src={advantage} alt="THD Advantage" className='object-cover'/>
          <h3 className='font-bold text-xl lg:text-2xl my-4'>
            {language === 'en' ? 'THD Advantage' : 'THD Nâng cao'}
          </h3>
          <p className='mb-4 text-sm lg:text-base'>
            {language === 'en' ? 'Includes everything in Duo Essentials, plus:' : 'Bao gồm tất cả trong THD Cơ bản, cộng thêm:'}
          </p>
          <ul className='space-y-2 pl-4 text-sm lg:text-base'>
            <li>{language === 'en' ? 'Cisco Identity Intelligence' : 'Cisco Identity Intelligence'}</li>
            <li>{language === 'en' ? 'SSO Portal' : 'Cổng thông tin SSO'}</li>
            <li>{language === 'en' ? 'Risk-based authentication' : 'Xác thực dựa trên rủi ro'}</li>
            <li>{language === 'en' ? 'Adaptive access policies' : 'Chính sách truy cập thích ứng'}</li>
            <li>{language === 'en' ? 'Complete device visibility' : 'Tầm nhìn thiết bị hoàn chỉnh'}</li>
            <li>{language === 'en' ? 'Device health check' : 'Kiểm tra sức khỏe thiết bị'}</li>
            <li>{language === 'en' ? 'Threat detection' : 'Phát hiện mối đe dọa'}</li>
          </ul>
        </div>
        <div className='text-white w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] wow animate__fadeInUp' data-wow-delay="0.6s">
          <img src={premier} alt="THD Premier" className='object-cover'/>
          <h3 className='font-bold text-xl lg:text-2xl my-4'>
            {language === 'en' ? 'THD Premier' : 'THD Cao cấp'}
          </h3>
          <p className='mb-4 text-sm lg:text-base'>
            {language === 'en' ? 'Includes everything in Duo Advantage, plus:' : 'Bao gồm tất cả trong THD Nâng cao, cộng thêm:'}
          </p>
          <ul className='space-y-2 pl-4 text-sm lg:text-base'>
            <li>{language === 'en' ? 'A comprehensive package for complete zero trust access' : 'Gói toàn diện cho quyền truy cập không tin tưởng hoàn toàn'}</li>
            <li>{language === 'en' ? 'VPN-less remote access to private resources' : 'Truy cập từ xa không cần VPN vào tài nguyên riêng tư'}</li>
            <li>{language === 'en' ? 'Complete device trust with endpoint protection check' : 'Độ tin cậy thiết bị hoàn toàn với kiểm tra bảo vệ điểm cuối'}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Plans;

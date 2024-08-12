import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useWow from '../../../Hook/useWow';

type Props = {}

export default function MFAIntro({}: Props) {
  const language = useSelector((state: RootState) => state.language);
  useWow();

  return (
    <section className='bg-mfa max-h-[615px] mt-24'>
      <div className="flex justify-between items-center py-20 px-[120px] gap-[100px]">
        <div className="">
          <div className="flex flex-col font-arimo space-y-4">
            <p className='text-[#999999] wow animate__fadeInDown'>
              {language === 'en' ? 'PRODUCT / MULTI-FACTOR AUTHENTICATION' : 'SẢN PHẨM / XÁC THỰC ĐA YẾU TỐ'}
            </p>
            <h1 className='text-[#E3343F] font-bold text-4xl wow animate__fadeInDown' data-wow-delay="0.2s">
              {language === 'en' ? 'Multi-factor Authentication (MFA)' : 'Xác thực Đa yếu tố (MFA)'}
            </h1>
            <p className='text-[#54626A] text-xl wow animate__fadeInDown' data-wow-delay="0.4s">
              {language === 'en' 
                ? "What is Multi-Factor Authentication (MFA)? MFA is a security access management solution that authenticates a user's identity at login using two or more verification factors. By adding an extra layer of protection to user and company data, MFA significantly mitigates the risk of malware, phishing, and ransomware attacks. SSO Portal facilitates the integration, implementation, and usage of MFA, making it more accessible than ever." 
                : "Xác thực Đa yếu tố (MFA) là gì? MFA là một giải pháp quản lý truy cập bảo mật xác thực danh tính người dùng khi đăng nhập bằng cách sử dụng hai hoặc nhiều yếu tố xác minh. Bằng cách thêm một lớp bảo vệ bổ sung cho dữ liệu người dùng và công ty, MFA giảm thiểu đáng kể rủi ro từ các cuộc tấn công phần mềm độc hại, lừa đảo và tống tiền. Cổng SSO hỗ trợ tích hợp, triển khai và sử dụng MFA, giúp nó dễ dàng tiếp cận hơn bao giờ hết."
              }
            </p>
          </div>
          <div className="w-full text-center">
            <button className='py-5 px-10 bg-[#E3343F] border border-[#E3343F] text-white rounded-[10px] font-arimo text-[15px] leading-9 mt-12 wow animate__fadeInUp' data-wow-delay="0.6s">
              {language === 'en' ? 'Get a SSO free trial' : 'Dùng thử SSO miễn phí'}
            </button>
          </div>
        </div>

        <div className="h-[444px] w-[633px] border border-[#E3343F] bg-white rounded-[10px] shrink-0 wow animate__fadeInRight" data-wow-delay="0.8s">
          {/* IMG */}
        </div>
      </div>
    </section>
  );
}

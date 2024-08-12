import React, { useEffect } from 'react';
import mfaImage from '../../../assets/MFA-image.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import 'animate.css';
import useWow from '../../../Hook/useWow';

type Props = {}

export default function MFA({}: Props) {
  const language = useSelector((state: RootState) => state.language);

  useWow()

  return (
    <section className='flex items-center space-x-48 max-h-80 overflow-hidden'>
        <div className="flex flex-col space-y-4 w-1/2 wow animate__fadeInLeft">
            <p className='text-4xl font-bold text-[#E3343F]'>
              {language === 'en' ? 'The gold standard in MFA' : 'Tiêu chuẩn vàng trong Xác thực Đa yếu tố (MFA)'}
            </p>
            <p className='text-[#54626A]'>
              {language === 'en' ? (
                'Stay protected with flexible multi-factor authentication (MFA) including options using FIDO2 for phishing-resistant authentication — hook, line, and no sinker.'
              ) : (
                'Bảo vệ bạn với xác thực đa yếu tố (MFA) linh hoạt bao gồm các tùy chọn sử dụng FIDO2 cho xác thực chống lừa đảo — hoàn toàn an toàn và bảo mật.'
              )}
            </p>
            <a href="" className='text-[#363F44] font-bold text-[17px] underline'>
              {language === 'en' ? 'Learn how MFA works' : 'Tìm hiểu cách MFA hoạt động'}
            </a>
        </div>
        <div className="w-1/2 wow animate__fadeInRight">
            <img src={mfaImage} alt="" className='object-cover'/>
        </div>
    </section>
  )
}

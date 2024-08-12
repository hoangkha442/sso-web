import React, { useEffect } from 'react';
import introductionImg from '../../../assets/introduction-image.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import 'animate.css';
import useWow from '../../../Hook/useWow';

type Props = {}

export default function Introduction({}: Props) {
  const language = useSelector((state: RootState) => state.language);

  useWow()

  return (
    <section className='bg-[#E3343F] px-[175px] max-h-[576px]'>
      <div className="flex items-center">
        <div className="w-[576px] h-[576px] shrink-0 wow animate__fadeInLeft">
          <img src={introductionImg} alt="" className='object-cover w-full h-full'/>
        </div>
        <div className="shrink-1 wow animate__fadeInRight">
          <p className='text-4xl text-white'>
            {language === 'en' ? 'Introducing Single Sign-On (SSO)' : 'Giới thiệu Single Sign-On (SSO)'}
          </p>
          <p className='mt-4 mb-8 text-white font-normal'>
            {language === 'en' ? (
              <>
                Streamline access across applications by minimizing <br />
                authentication interruptions on trusted devices. Keep things easy <br />
                for users but tough for intruders.
              </>
            ) : (
              <>
                Đơn giản hóa truy cập qua các ứng dụng bằng cách giảm thiểu <br />
                gián đoạn xác thực trên các thiết bị đáng tin cậy. Giữ mọi thứ dễ dàng <br />
                cho người dùng nhưng khó khăn cho những kẻ xâm nhập.
              </>
            )}
          </p>
          <button className='py-3 px-10 rounded-[20px] text-[17px] leading-6 font-bold bg-white intro-btn-shadow'>
            {language === 'en' ? 'Learn how SSO works' : 'Tìm hiểu cách hoạt động của SSO'}
          </button>
        </div>
      </div>
    </section>
  )
}

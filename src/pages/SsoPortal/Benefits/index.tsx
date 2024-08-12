import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useWow from '../../../Hook/useWow';

type Props = {}

export default function Benefits({}: Props) {
  const language = useSelector((state: RootState) => state.language);

  useWow();

  return (
    <section className='px-[120px]'>
      <div className="flex justify-between items-center py-20 gap-[100px]">
        <div className="h-[444px] w-[633px] border border-[#E3343F] rounded-[10px] shrink-0 wow animate__fadeInLeft" data-wow-delay="0.2s">
          {/* IMG */}
        </div>
        <div className="wow animate__fadeInRight" data-wow-delay="0.4s">
          <div className="flex flex-col font-arimo space-y-10">
            <h1 className='text-[#E3343F] font-bold text-4xl'>
              {language === 'en' ? 'SSO Portal Benefits' : 'Lợi ích của Cổng SSO'}
            </h1>
            <p className='text-[#54626A] text-xl'>
              {language === 'en' 
                ? "To implement a genuinely secure and seamless user sign-in experience and alleviate the administrative burden for IT, it is imperative to enforce user authentication, device verification, and risk-based policies in a manner that does not frustrate users. SSO Portal accomplishes this by allowing organizations to effortlessly implement granular access controls for their workforce, thereby minimizing authentication fatigue and friction."
                : "Để triển khai trải nghiệm đăng nhập người dùng thực sự an toàn và liền mạch, đồng thời giảm bớt gánh nặng quản lý cho IT, điều cần thiết là phải thực thi xác thực người dùng, xác minh thiết bị và các chính sách dựa trên rủi ro một cách không gây khó chịu cho người dùng. Cổng SSO đạt được điều này bằng cách cho phép các tổ chức dễ dàng triển khai các kiểm soát truy cập chi tiết cho lực lượng lao động của họ, do đó giảm thiểu sự mệt mỏi và ma sát trong việc xác thực."
              }
            </p>
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="flex items-center justify-between wow animate__fadeInUp" data-wow-delay="0.6s">
        <div className="w-[330px] h-[395px] rounded-[10px] border border-[#E3343F]"></div>
        <div className="w-[330px] h-[395px] rounded-[10px] border border-[#E3343F]"></div>
        <div className="w-[330px] h-[395px] rounded-[10px] border border-[#E3343F]"></div>
      </div>
    </section>
  );
}

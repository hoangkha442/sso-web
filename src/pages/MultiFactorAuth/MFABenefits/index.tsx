import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useWow from '../../../Hook/useWow';

type Props = {}

export default function MFABenefits({}: Props) {
  const language = useSelector((state: RootState) => state.language);
  useWow();

  return (
    <section className='px-6 xl:px-[120px] pb-10 xl:pb-20'>
      <div className="flex flex-col xl:flex-row justify-between items-center py-10 xl:py-20 gap-10 xl:gap-[100px]">
        <div className="h-[250px] xl:h-[444px] w-full xl:w-[633px] border border-[#E3343F] rounded-[10px] shrink-0 wow animate__fadeInLeft" data-wow-delay="0.2s">
          {/* IMG */}
        </div>
        <div className="wow animate__fadeInRight w-full xl:w-auto" data-wow-delay="0.4s">
          <div className="flex flex-col font-arimo space-y-6 xl:space-y-10">
            <h1 className='text-[#E3343F] font-bold text-3xl xl:text-4xl'>
              {language === 'en' ? 'What Does SSO’s Multi-factor Authentication Do?' : 'Cổng Xác thực Đa yếu tố (MFA) của SSO làm gì?'}
            </h1>
            <p className='text-[#54626A] text-xl xl:text-xl'>
              {language === 'en' 
                ? "SSO's Multi-Factor Authentication (MFA) solution combines multiple authentication factors to offer robust security that is user-friendly yet highly resistant to threats. The interface provides a swift, non-disruptive, and straightforward authentication experience, enabling users to focus on their essential tasks."
                : "Giải pháp Xác thực Đa yếu tố (MFA) của SSO kết hợp nhiều yếu tố xác thực để cung cấp bảo mật mạnh mẽ, thân thiện với người dùng và khả năng chống lại các mối đe dọa cao. Giao diện cung cấp trải nghiệm xác thực nhanh chóng, không gây gián đoạn và đơn giản, giúp người dùng tập trung vào các nhiệm vụ quan trọng của họ."
              }
            </p>
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-10  wow animate__fadeInUp" data-wow-delay="0.6s">
        <div className="w-full xl:w-[330px] h-[250px] xl:h-[395px] rounded-[10px] border border-[#E3343F]"></div>
        <div className="w-full xl:w-[330px] h-[250px] xl:h-[395px] rounded-[10px] border border-[#E3343F]"></div>
        <div className="w-full xl:w-[330px] h-[250px] xl:h-[395px] rounded-[10px] border border-[#E3343F]"></div>
      </div>
    </section>
  );
}

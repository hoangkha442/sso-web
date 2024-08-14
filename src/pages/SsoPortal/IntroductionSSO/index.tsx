
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useWow from '../../../Hook/useWow';

type Props = {}

export default function IntroductionSSO({}: Props) {
  const language = useSelector((state: RootState) => state.language);

  useWow(); 
  return (
    <section className='bg-intro xl:max-h-[615px] max-h-full lg:max-h-auto'>
      <div className="flex flex-col xl:flex-row justify-between items-center py-20 px-6 lg:px-[120px] gap-10 lg:gap-[100px]">
        <div className="">
          <div className="flex flex-col font-arimo space-y-4">
            <p className='text-[#999999] wow animate__fadeInDown'>
              {language === 'en' ? 'PRODUCT / SSO PORTAL' : 'SẢN PHẨM / CỔNG SSO'}
            </p>
            <h1 className='text-[#E3343F] font-bold text-3xl lg:text-4xl wow animate__fadeInDown' data-wow-delay="0.2s">
              {language === 'en' ? 'Introducing SSO Portal' : 'Giới thiệu Cổng SSO'}
            </h1>
            <p className='text-[#54626A] text-lg lg:text-xl wow animate__fadeInDown' data-wow-delay="0.4s">
              {language === 'en' 
                ? "Enhance your workforce's experience with a secure and seamless login process, minimizing authentication disruptions." 
                : "Nâng cao trải nghiệm của lực lượng lao động của bạn với quy trình đăng nhập an toàn và liền mạch, giảm thiểu gián đoạn xác thực."
              }
            </p>
          </div>
          <div className="w-full text-center">
            <button className='py-4 lg:py-5 px-6 lg:px-10 bg-[#E3343F] border border-[#E3343F] text-white rounded-[10px] font-arimo text-[14px] lg:text-[15px] leading-8 lg:leading-9 mt-8 lg:mt-12 wow animate__fadeInUp' data-wow-delay="0.6s">
              {language === 'en' ? 'Get a SSO free trial' : 'Dùng thử SSO miễn phí'}
            </button>
          </div>
        </div>

        <div className="h-[300px] lg:h-[444px] w-full lg:w-[633px] border border-[#E3343F] rounded-[10px] shrink-0 wow animate__fadeInRight" data-wow-delay="0.8s">
          {/* IMG */}
        </div>
      </div>
    </section>
  );
}

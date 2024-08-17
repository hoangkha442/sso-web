import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useWow from '../../../Hook/useWow';
import mfaSSO from '../../../assets/mfaSSO.jpg';
import { CheckOutlined } from '@ant-design/icons';

type Props = {}

export default function MFABenefits({}: Props) {
  const language = useSelector((state: RootState) => state.language);
  useWow();

  return (
    <section className='px-6 xl:px-[120px] pb-10 xl:pb-20'>
      <div className="flex flex-col xl:flex-row justify-between items-center py-10 xl:py-20 gap-10 xl:gap-[100px]">
        <div className="h-[350px] xl:h-[444px] w-full xl:w-[633px] rounded-[10px] shrink-0 wow animate__fadeInLeft" data-wow-delay="0.2s">
          <img src={mfaSSO} alt="" className='w-full h-full rounded-[10px]'/>
        </div>
        <div className="wow animate__fadeInRight w-full xl:w-auto relative" data-wow-delay="0.4s">
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
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-10 wow animate__fadeInUp" data-wow-delay="0.6s">
        <div className="w-full lg:w-[330px] rounded-[10px] shadow-benefit font-arimo p-5 flex flex-col">
          <div className="text-center mb-4">
            <h1 className='font-bold text-xl text-gray-700 uppercase h-[56px]'>{language === 'en' ? 'MFA Integration' : 'Tích hợp MFA'}</h1>
          </div>
          <div className="flex flex-col justify-start flex-grow">
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Highly scalable to accommodate organizational growth.' 
                  : 'Khả năng mở rộng cao để đáp ứng sự phát triển của tổ chức.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Integrates with major and custom applications.' 
                  : 'Tích hợp với các ứng dụng chính và tùy chỉnh.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Provides secure access with minimal IT involvement.' 
                  : 'Cung cấp quyền truy cập an toàn với sự can thiệp tối thiểu từ IT.'}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[330px] rounded-[10px] shadow-benefit font-arimo p-5 flex flex-col">
          <div className="text-center mb-4">
            <h1 className='font-bold text-xl text-gray-700 uppercase h-[56px]'>{language === 'en' ? 'Tailored Configuration' : 'Cấu hình tùy chỉnh'}</h1>
          </div>
          <div className="flex flex-col justify-start flex-grow">
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Offers robust multi-factor authentication with options like passcodes, the THD Authenticator app, and more.' 
                  : 'Cung cấp xác thực đa yếu tố mạnh mẽ với các tùy chọn như mật mã, ứng dụng THD Authenticator, và nhiều hơn nữa.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Allows customizable setup to meet specific security needs.' 
                  : 'Cho phép thiết lập tùy chỉnh để đáp ứng nhu cầu bảo mật cụ thể.'}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[330px] rounded-[10px] shadow-benefit font-arimo p-5 flex flex-col">
          <div className="text-center mb-4">
            <h1 className='font-bold text-xl text-gray-700 uppercase'>{language === 'en' ? 'User-friendly Authentication' : 'Xác thực thân thiện với người dùng'}</h1>
          </div>
          <div className="flex flex-col justify-start flex-grow">
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Simplifies multi-factor authentication implementation via a mobile app.' 
                  : 'Đơn giản hóa việc triển khai xác thực đa yếu tố qua ứng dụng di động.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Enables quick, easy verification through mobile devices.' 
                  : 'Cho phép xác minh nhanh chóng, dễ dàng qua các thiết bị di động.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Lowers total cost of ownership and encourages smooth user adoption of MFA.' 
                  : 'Giảm tổng chi phí sở hữu và khuyến khích người dùng sử dụng MFA một cách dễ dàng.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

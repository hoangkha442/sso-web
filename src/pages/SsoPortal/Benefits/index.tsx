import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useWow from '../../../Hook/useWow';
import { CheckOutlined } from '@ant-design/icons';
import sso from '../../../assets/sso.png';
type Props = {}

export default function Benefits({}: Props) {
  const language = useSelector((state: RootState) => state.language);

  useWow();

  return (
    <section className='px-6 lg:px-[120px] py-10 lg:py-20'>
      <div className="flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-[100px]">
        <div className=" lg:h-[444px] w-full h-full lg:w-[633px] rounded-[10px] shrink-0 wow animate__fadeInLeft" data-wow-delay="0.2s">
          <img src={sso} alt="" className='rounded-[10px] h-full'/>
        </div>
        <div className="wow animate__fadeInRight w-full lg:w-auto shrink" data-wow-delay="0.4s">
          <div className="flex flex-col font-arimo space-y-6 lg:space-y-10">
            <div className="xl:text-start text-center">
              <h1 className='text-[#E3343F] font-bold text-3xl lg:text-4xl'>
                {language === 'en' ? 'SSO Portal Benefits' : 'Lợi ích của Cổng SSO'}
              </h1>
            </div>
            <p className='text-[#54626A] text-lg lg:text-xl'>
              {language === 'en' 
                ? "To implement a genuinely secure and seamless user sign-in experience and alleviate the administrative burden for IT, it is imperative to enforce user authentication, device verification, and risk-based policies in a manner that does not frustrate users. SSO Portal accomplishes this by allowing organizations to effortlessly implement granular access controls for their workforce, thereby minimizing authentication fatigue and friction."
                : "Để triển khai trải nghiệm đăng nhập người dùng thực sự an toàn và liền mạch, đồng thời giảm bớt gánh nặng quản lý cho IT, điều cần thiết là phải thực thi xác thực người dùng, xác minh thiết bị và các chính sách dựa trên rủi ro một cách không gây khó chịu cho người dùng. Cổng SSO đạt được điều này bằng cách cho phép các tổ chức dễ dàng triển khai các kiểm soát truy cập chi tiết cho lực lượng lao động của họ, do đó giảm thiểu sự mệt mỏi và ma sát trong việc xác thực."
              }
            </p>
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-10 mt-10 lg:mt-20 wow animate__fadeInUp" data-wow-delay="0.6s">
        <div className="w-full lg:w-[330px] rounded-[10px] shadow-benefit font-arimo p-5 flex flex-col">
          <div className="text-center mb-4">
            <h1 className='font-bold text-xl text-gray-700 uppercase'>{language === 'en' ? 'Streamlined Access' : 'Truy cập Đơn giản hóa'}</h1>
          </div>
          <div className="flex flex-col justify-center flex-grow">
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Access multiple integrated apps like Microsoft Teams and GitLab with one set of credentials.' 
                  : 'Truy cập nhiều ứng dụng tích hợp như Microsoft Teams và GitLab với một bộ thông tin đăng nhập.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Reduces login management, improving efficiency.' 
                  : 'Giảm quản lý đăng nhập, nâng cao hiệu quả.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Streamlined access enhances productivity.' 
                  : 'Truy cập đơn giản hóa nâng cao năng suất.'}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[330px] rounded-[10px] shadow-benefit font-arimo p-5 flex flex-col">
          <div className="text-center mb-4">
            <h1 className='font-bold text-xl text-gray-700 uppercase'>{language === 'en' ? 'Simplified User Experience' : 'Trải nghiệm Người dùng Đơn giản hóa'}</h1>
          </div>
          <div className="flex flex-col justify-center flex-grow">
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Reduces the need for multiple logins.' 
                  : 'Giảm nhu cầu về nhiều lần đăng nhập.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Enhances user experience.' 
                  : 'Nâng cao trải nghiệm người dùng.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Makes it easier to navigate between tools and platforms.' 
                  : 'Làm cho việc điều hướng giữa các công cụ và nền tảng trở nên dễ dàng hơn.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Eliminates the hassle of remembering various passwords.' 
                  : 'Loại bỏ rắc rối khi phải nhớ nhiều mật khẩu khác nhau.'}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[330px] rounded-[10px] shadow-benefit font-arimo p-5 flex flex-col">
          <div className="text-center mb-4">
            <h1 className='font-bold text-xl text-gray-700 uppercase'>{language === 'en' ? 'Improved Security Management' : 'Quản lý Bảo mật Cải tiến'}</h1>
          </div>
          <div className="flex flex-col justify-center flex-grow">
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Centralizes authentication management.' 
                  : 'Tập trung quản lý xác thực.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Simplifies enforcement of security policies.' 
                  : 'Đơn giản hóa việc thực thi các chính sách bảo mật.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Reduces the risk of weak or compromised passwords.' 
                  : 'Giảm rủi ro về mật khẩu yếu hoặc bị xâm phạm.'}
              </span>
            </div>
            <div className="flex justify-start mt-4 space-x-2">
              <div className="text-[#E3343F] w-6 h-6 text-center leading-6 rounded-full border-2 border-[#E3343F] shrink-0 mt-1">
                <CheckOutlined className='text-[15px]' />
              </div>
              <span className="text-lg text-[#54626A]">
                {language === 'en' 
                  ? 'Maintains strong security standards across all applications.' 
                  : 'Duy trì các tiêu chuẩn bảo mật nghiêm ngặt trên tất cả các ứng dụng.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

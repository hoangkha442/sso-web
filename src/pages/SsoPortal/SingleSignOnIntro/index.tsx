import React from 'react';
import img from '../../../assets/single-sign-on.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useWow from '../../../Hook/useWow';

type Props = {}

const SingleSignOnIntro: React.FC<Props> = () => {
  const language = useSelector((state: RootState) => state.language);

  useWow();

  return (
    <section className='bg-single-so flex items-center justify-center py-10 lg:py-20'>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-12 px-6 lg:px-[105px]">
        <div className="w-full lg:w-[470px] h-[250px] lg:h-[330px] shrink-0 wow animate__fadeInLeft" data-wow-delay="0.2s">
          <img 
            src={img}
            alt="Effortless single sign-on" 
            className="object-cover w-full h-full" 
          />
        </div>

        <div className="wow animate__fadeInRight w-full lg:w-auto" data-wow-delay="0.4s">
          <div className="flex flex-col font-arimo space-y-6 lg:space-y-12">
            <h1 className='text-black font-bold text-2xl lg:text-[40px] leading-8 lg:leading-10'>
              {language === 'en' ? 'Effortless single sign-on on any authorized device' : 'Đăng nhập một lần dễ dàng trên bất kỳ thiết bị được ủy quyền nào'}
            </h1>
            <p className='text-black text-lg lg:text-xl'>
              {language === 'en'
                ? 'With SSO Portal, a single authentication suffices for the entire workday. Users perform one strong MFA or passwordless authentication upon signing into an authorized device, whether on or off the network. Thereafter, SSO Portal enforces application-specific policies seamlessly, rendering the authentication process virtually invisible.'
                : 'Với Cổng SSO, một lần xác thực là đủ cho cả ngày làm việc. Người dùng thực hiện một xác thực MFA mạnh mẽ hoặc không cần mật khẩu khi đăng nhập vào một thiết bị được ủy quyền, dù là trong hay ngoài mạng. Sau đó, Cổng SSO thực thi các chính sách cụ thể theo ứng dụng một cách liền mạch, khiến quá trình xác thực gần như không thể nhận ra.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleSignOnIntro;

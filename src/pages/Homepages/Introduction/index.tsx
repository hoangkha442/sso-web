import introductionImg from '../../../assets/introduction-image.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import 'animate.css';
import useWow from '../../../Hook/useWow';
import { Link, useNavigate } from 'react-router-dom';

type Props = {}

export default function Introduction({}: Props) {
  const language = useSelector((state: RootState) => state.language);
  const navigate = useNavigate()
  useWow();

  return (
    <section className='bg-[#E3343F] px-6 lg:px-[175px] py-10 lg:py-0 max-h-auto lg:max-h-[576px]'>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-[576px] h-[300px] lg:h-[576px] shrink-0 wow animate__fadeInLeft">
          <img src={introductionImg} alt="" className='object-contain w-full h-full'/>
        </div>
        <div className="w-full lg:w-auto lg:text-start text-center mt-8 lg:mt-0 lg:ml-10 wow animate__fadeInRight">
          <Link to='/sso-portal' className='text-2xl lg:text-4xl text-white'>
            {language === 'en' ? 'Introducing Single Sign-On (SSO)' : 'Giới thiệu Single Sign-On (SSO)'}
          </Link>
          <p className='mt-4 mb-8 text-sm lg:text-base text-white font-normal'>
            {language === 'en' ? (
              <>
                Streamline access across applications by minimizing <br className='hidden lg:block'/>
                authentication interruptions on trusted devices. Keep things easy <br className='hidden lg:block'/>
                for users but tough for intruders.
              </>
            ) : (
              <>
                Đơn giản hóa truy cập qua các ứng dụng bằng cách giảm thiểu <br className='hidden lg:block'/>
                gián đoạn xác thực trên các thiết bị đáng tin cậy. Giữ mọi thứ dễ dàng <br className='hidden lg:block'/>
                cho người dùng nhưng khó khăn cho những kẻ xâm nhập.
              </>
            )}
          </p>
          <button onClick={() => { navigate('/sso-portal') }} className='py-2 lg:py-3 px-8 lg:px-10 rounded-[10px] lg:rounded-[20px] text-[15px] lg:text-[17px] leading-6 font-bold bg-white intro-btn-shadow'>
            {language === 'en' ? 'Learn how SSO works' : 'Tìm hiểu cách hoạt động của SSO'}
          </button>
        </div>
      </div>
    </section>
  )
}

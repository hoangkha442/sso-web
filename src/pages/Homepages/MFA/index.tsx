import mfaImage from '../../../assets/MFA-image.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import 'animate.css';
import useWow from '../../../Hook/useWow';
import { Link } from 'react-router-dom';

type Props = {}

export default function MFA({}: Props) {
  const language = useSelector((state: RootState) => state.language);

  useWow();

  return (
    <section className='flex flex-col-reverse lg:flex-row items-center lg:space-x-48 max-h-auto lg:max-h-80 overflow-hidden px-6 lg:px-0 py-10 lg:py-0'>
        <div className="flex flex-col space-y-4 w-full lg:w-1/2 wow animate__fadeInLeft text-center lg:text-left">
            <p className='text-2xl lg:text-4xl font-bold text-[#E3343F]'>
              {language === 'en' ? 'The gold standard in MFA' : 'Tiêu chuẩn vàng trong Xác thực Đa yếu tố (MFA)'}
            </p>
            <p className='text-[#54626A] text-sm lg:text-base'>
              {language === 'en' ? (
                'Stay protected with flexible multi-factor authentication (MFA) including options using FIDO2 for phishing-resistant authentication — hook, line, and no sinker.'
              ) : (
                'Bảo vệ bạn với xác thực đa yếu tố (MFA) linh hoạt bao gồm các tùy chọn sử dụng FIDO2 cho xác thực chống lừa đảo — hoàn toàn an toàn và bảo mật.'
              )}
            </p>
            <Link to='/multi-factor-auth' className='text-[#363F44] font-bold text-[15px] lg:text-[17px] underline'>
              {language === 'en' ? 'Learn how MFA works' : 'Tìm hiểu cách MFA hoạt động'}
            </Link>
        </div>
        <div className="w-full lg:w-1/2 wow animate__fadeInRight mb-8 lg:mb-0 flex justify-center">
            <img src={mfaImage} alt="MFA Illustration" className='object-cover lg:w-[300px] lg:h-auto w-40'/>
        </div>
    </section>
  )
}

import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import logoFooter from '../../assets/logo-footer.png';
import hospitalFill from '../../assets/hospital-fill.png';
import hospital from '../../assets/hospital.png';
import envelopePaperFill from '../../assets/envelope-paper-fill.png';
import telephone from '../../assets/telephone-fill.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type Props = {}

const Footer: React.FC<Props> = () => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <footer className="bg-white py-8 lg:py-16 px-6 lg:px-[175px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[64px]">
      <div className="flex flex-col items-center lg:items-start">
        <div className="pt-[30px] lg:pt-[60px]">
          <img src={logoFooter} alt="THD Logo" className="w-[205px] lg:w-[410px] h-[100px] lg:h-[200px]" />
        </div>
        <p className="text-[#333333] font-bold text-lg lg:text-xl text-center w-full mb-2 mt-5">
          {language === 'en' ? 'Follow Us' : 'Theo dõi chúng tôi'}
        </p>
        <div className="flex space-x-4 justify-center w-full">
          <FaGithub className="text-gray-600 w-5 h-5 cursor-pointer hover:text-gray-800" />
          <FaYoutube className="text-gray-600 w-5 h-5 cursor-pointer hover:text-gray-800" />
          <FaTwitter className="text-gray-600 w-5 h-5 cursor-pointer hover:text-gray-800" />
          <FaFacebookF className="text-gray-600 w-5 h-5 cursor-pointer hover:text-gray-800" />
        </div>
        <p className="text-[#000000] text-xs mt-6 text-center w-full">
          {language === 'en' ? 'Copyright 2024 THD Cyber Security. All rights reserved.' : 'Bản quyền 2024 THD Cyber Security. Mọi quyền được bảo lưu.'}
        </p>
      </div>
      
      <div className="flex flex-col text-gray-600 text-sm space-y-3">
        <div className="flex items-center space-x-3">
          <img src={hospitalFill} alt="Headquarter" className='w-6 h-6' />
          <span className='font-arimo'>{language === 'en' ? 'Headquarter: No.60, Nguyen Van Thu Street, Da Kao Ward, District 01, Ho Chi Minh' : 'Trụ sở chính: Số 60, đường Nguyễn Văn Thủ, phường Đa Kao, Quận 1, TP. Hồ Chí Minh'}</span>
        </div>
        <div className="flex items-center space-x-3">
          <img src={hospital} alt="HCM Branch" className='w-6 h-6' />
          <span className='font-arimo'>{language === 'en' ? 'HCM Branch: 4th Floor, Ereka Building, No.17, Ho Ba Kien Street, Ward 15, District 10, Ho Chi Minh' : 'Chi nhánh HCM: Tầng 4, Tòa nhà Ereka, Số 17, Đường Hồ Bá Kiện, Phường 15, Quận 10, TP. Hồ Chí Minh'}</span>
        </div>
        <div className="flex items-center space-x-3">
          <img src={hospital} alt="Gia Lai Branch" className='w-6 h-6' />
          <span className='font-arimo'>{language === 'en' ? 'Gia Lai Branch: Group 10-1, Hoa Lu Phu Dong Street, Phu Dong Ward, Pleiku City, Gia Lai Province' : 'Chi nhánh Gia Lai: Nhóm 10-1, Đường Hoa Lư Phù Đổng, Phường Phù Đổng, Thành phố Pleiku, Tỉnh Gia Lai'}</span>
        </div>
        <div className="flex items-center space-x-3">
          <img src={hospital} alt="Vinh Branch" className='w-6 h-6' />
          <span className='font-arimo'>{language === 'en' ? 'Vinh Branch: No.63, Tran Trung Quang Street, Hung Loc Commune, Vinh City, Nghe An Province' : 'Chi nhánh Vinh: Số 63, Đường Trần Trung Quang, Xã Hưng Lộc, Thành phố Vinh, Tỉnh Nghệ An'}</span>
        </div>
        <div className="flex items-center space-x-3">
          <img src={hospital} alt="Ha Noi Branch" className='w-6 h-6' />
          <span className='font-arimo'>{language === 'en' ? 'Ha Noi Branch: 8th floor, AC Building, No.3, 78 lane, Duy Tan Street, Cau Giay Ward, Ha Noi' : 'Chi nhánh Hà Nội: Tầng 8, Tòa nhà AC, Số 3, Ngõ 78, Đường Duy Tân, Phường Cầu Giấy, Hà Nội'}</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6">
            <img src={envelopePaperFill} alt="Email" className='w-[18px] h-[18px] object-contain ml-1' />
          </div>
          <span className='font-arimo'>sales@thdcybersecurity.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 text-center">
            <img src={telephone} alt="Phone" className='w-[17px] h-5 object-contain ml-1' />
          </div>
          <span className='font-arimo'>(+84) 853 287 799</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

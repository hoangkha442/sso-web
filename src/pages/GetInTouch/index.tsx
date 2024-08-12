import React, { useEffect } from 'react';
import downArrow from '../../assets/chevron-expand.png';
import useWow from '../../Hook/useWow';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type Props = {}

export default function GetInTouch({}: Props) {
  const language = useSelector((state: RootState) => state.language);
  useWow();

  return (
    <section className='pt-24 bg-[#F16C74] px-6 md:px-[120px] py-12'>
      <div className="font-arimo">
        <h1 className='text-[40px] md:text-[60px] leading-[50px] md:leading-[90px] font-bold text-white mt-5 wow animate__fadeInDown'>
          {language === 'en' ? 'Get in touch, stay secure' : 'Liên hệ và bảo mật'}
        </h1>
        <p className='text-xl md:text-2xl text-white font-light wow animate__fadeInDown' data-wow-delay="0.2s">
          {language === 'en' ? 'Our THD Team is ready to help you.' : 'Đội ngũ THD của chúng tôi sẵn sàng giúp đỡ bạn.'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] md:gap-x-[100px] gap-y-8 mt-9 md:px-[98px]">
        <input 
          type="text" 
          placeholder={language === 'en' ? 'First name *' : 'Tên *'} 
          className="w-full p-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white placeholder:text-[#666666] wow animate__fadeInUp"  
          data-wow-delay="0.3s"
        />
        <input 
          type="text" 
          placeholder={language === 'en' ? 'Last Name *' : 'Họ *'} 
          className="w-full p-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white placeholder:text-[#666666] wow animate__fadeInUp" 
          data-wow-delay="0.4s"
        />
        <input 
          type="email" 
          placeholder={language === 'en' ? 'Business Email *' : 'Email công việc *'} 
          className="w-full p-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white placeholder:text-[#666666] wow animate__fadeInUp" 
          data-wow-delay="0.5s"
        />
        <input 
          type="text" 
          placeholder={language === 'en' ? 'Title *' : 'Chức vụ *'} 
          className="w-full p-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white placeholder:text-[#666666] wow animate__fadeInUp" 
          data-wow-delay="0.6s"
        />
        <input 
          type="text" 
          placeholder={language === 'en' ? 'Company Name *' : 'Tên công ty *'} 
          className="w-full p-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white placeholder:text-[#666666] wow animate__fadeInUp" 
          data-wow-delay="0.7s"
        />
        <div className="relative w-full wow animate__fadeInUp" data-wow-delay="0.8s">
          <select 
            placeholder={language === 'en' ? 'Company Size *' : 'Quy mô công ty *'} 
            className="appearance-none w-full p-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white placeholder:text-[#666666]"
          >
            <option className='text-[#666666]'>{language === 'en' ? 'Company size*' : 'Quy mô công ty*'}</option>
          </select>
          <img 
            src={downArrow} 
            alt="Dropdown arrow" 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none w-[30px] h-[30px]"
          />
        </div>
        <input 
          type="text" 
          placeholder={language === 'en' ? 'Province *' : 'Tỉnh thành *'} 
          className="w-full p-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white placeholder:text-[#666666] wow animate__fadeInUp" 
          data-wow-delay="0.9s"
        />
        <input 
          type="tel" 
          placeholder={language === 'en' ? 'Phone Number *' : 'Số điện thoại *'} 
          className="w-full p-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white placeholder:text-[#666666] wow animate__fadeInUp" 
          data-wow-delay="1s"
        />
      </div>

      <div className="mt-8">
        <p className='text-white font-arimo text-2xl font-bold wow animate__fadeInUp' data-wow-delay="1.1s">
          <span className='mr-7 text-[#F16C74]'>.</span> 
          <span className='text-base'>
            {language === 'en' 
              ? 'Our system wishes to utilize the information you have provided to keep you informed about the latest offers, promotions, and news concerning THD products and services. You may unsubscribe at any time. For further information, please refer to THD’s Privacy Statement.'
              : 'Hệ thống của chúng tôi muốn sử dụng thông tin bạn đã cung cấp để thông báo cho bạn về các ưu đãi, khuyến mãi và tin tức mới nhất liên quan đến các sản phẩm và dịch vụ của THD. Bạn có thể hủy đăng ký bất cứ lúc nào. Để biết thêm thông tin, vui lòng tham khảo Tuyên bố về Quyền riêng tư của THD.'
            }
          </span>
        </p>
        <div className="flex items-center mt-4 pl-0 justify-center wow animate__fadeInUp" data-wow-delay="1.2s">
          <input 
            type="checkbox" 
            className="mr-2 accent-white w-4 h-4 text-white bg-white border-2 border-white rounded focus:ring-0 checked:bg-white checked:border-white"
          />
          <label className="text-white text-sm font-light">
            {language === 'en' ? 'Yes, I agree to be informed THD’s information via Email' : 'Vâng, tôi đồng ý nhận thông tin của THD qua Email'}
          </label>
        </div>
      </div>
    </section>
  );
}

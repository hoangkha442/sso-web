import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo-creative-tim-black.svg';
import { Link } from 'react-router-dom';
import { Dropdown } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleLanguage } from '../../redux/languageSlice';
import BackToTop from './BackToTop';

const Header = () => {
  const language = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  const items = [
    {
      key: '1',
      label: (
        <p onClick={() => dispatch(toggleLanguage())}>
          {language === 'en' ? 'Tiếng Việt' : 'English'}
        </p>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'h-16 shadow-lg' : 'h-24 shadow-header'} bg-white`}>
      <div className="flex items-center justify-between h-full px-10">
        {/* LEFT HEADER */}
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-5">
            <img src={logo} alt="SSO Logo" className={`${isScrolled ? 'h-8' : 'h-12'}`} />
            <p className="font-bold text-xl leading-8 text-[#056453]">SSO PORTAL</p>
          </div>
          <ul className="flex items-center space-x-5">
            <li className="text-sm text-[#54626A] hover:text-gray-900 duration-300">
              <Link to="">{language === 'en' ? 'Our Product' : 'Sản phẩm của chúng tôi'}</Link>
            </li>
            <li className="text-sm text-[#54626A] hover:text-gray-900 duration-300">
              <Link to="">{language === 'en' ? 'Why SSO Portal?' : 'Tại sao chọn SSO Portal?'}</Link>
            </li>
          </ul>
        </div>
        {/* RIGHT HEADER */}
        <div className="text-end flex items-center space-x-10">
          <div className="">
            <button className="text-[13px] py-2 px-4 rounded border border-black text-[#363F44] hover:bg-gray-900 hover:border-gray-900 hover:text-white duration-500">
              {language === 'en' ? 'Contact Sales' : 'Liên hệ bán hàng'}
            </button>
            <button className="text-[13px] py-2 px-4 rounded bg-[#E3343F] border border-[#E3343F] hover:bg-red-700 duration-500 text-white ml-4">
              {language === 'en' ? 'Free Trial' : 'Dùng thử miễn phí'}
            </button>
          </div>
          <div className="">
            <Dropdown menu={{ items }} placement="bottom" arrow>
              <button className="text-[15px] font-light">
                {language === 'en' ? 'Eng / Vie' : 'Vie / Eng'}
              </button>
            </Dropdown>
          </div>
        </div>
      </div>
      <BackToTop />
    </section>
  );
};

export default Header;

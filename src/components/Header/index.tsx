import { useState, useEffect } from 'react';
import logo from '../../assets/logo-creative-tim-black.svg';
import { Link } from 'react-router-dom';
import { Dropdown } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleLanguage } from '../../redux/languageSlice';
import BackToTop from './BackToTop';
import useToastify from '../../Hook/useToastify';

const Header = () => {
  const language = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();
  const { showWarningToast } = useToastify();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <section className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'h-16 shadow-lg' : 'h-24 shadow-header'} bg-white`}>
      <div className="flex items-center justify-between h-full px-10">
        {/* LEFT HEADER */}
        <div className="flex items-center space-x-10">
          <Link to='/' className="flex items-center space-x-5">
            <img src={logo} alt="SSO Logo" className={`${isScrolled ? 'h-8' : 'h-12'}`} />
            <p className="font-bold text-xl leading-8 text-[#056453]">SSO PORTAL</p>
          </Link>
          <div className="hidden lg:inline-block">
            <ul className="flex items-center space-x-5">
              <li className="text-sm text-[#54626A] hover:text-gray-900 duration-300 cursor-pointer">
                <p onClick={() => showWarningToast('Tính năng chưa phát triển')}>{language === 'en' ? 'Our Product' : 'Sản phẩm của chúng tôi'}</p>
              </li>
              <li className="text-sm text-[#54626A] hover:text-gray-900 duration-300 cursor-pointer">
                <p onClick={() => showWarningToast('Tính năng chưa phát triển')}>{language === 'en' ? 'Why SSO Portal?' : 'Tại sao chọn SSO Portal?'}</p>
              </li>
            </ul>
          </div>
        </div>
        {/* RIGHT HEADER */}
        <div className="text-end flex items-center space-x-10">
          <div className="hidden lg:inline-block">
            <button className="text-[13px] py-2 px-4 rounded border border-black text-[#363F44] hover:bg-gray-900 hover:border-gray-900 hover:text-white duration-500">
              {language === 'en' ? 'Contact Sales' : 'Liên hệ bán hàng'}
            </button>
            <button className="text-[13px] py-2 px-4 rounded bg-[#E3343F] border border-[#E3343F] hover:bg-red-700 duration-500 text-white ml-4">
              {language === 'en' ? 'Free Trial' : 'Dùng thử miễn phí'}
            </button>
          </div>
          <div className="flex items-center gap-5">
            <Dropdown menu={{ items }} placement="bottom" arrow>
              <button className="text-[15px] font-light">
                {language === 'en' ? 'Eng / Vie' : 'Vie / Eng'}
              </button>
            </Dropdown>
            <div className="inline-block lg:hidden">
              <button
                className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-white drop-shadow-md overflow-hidden transition-all duration-300 ease-in-out transform sm:w-1/3 w-1/2 ml-auto ${
          isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <ul className="flex flex-col items-start space-y-5 py-5 px-10 ">
          <li className="text-sm text-[#54626A] hover:text-gray-900 duration-300 cursor-pointer">
            <p onClick={() => showWarningToast('Tính năng chưa phát triển')}>{language === 'en' ? 'Our Product' : 'Sản phẩm của chúng tôi'}</p>
          </li>
          <li className="text-sm text-[#54626A] hover:text-gray-900 duration-300 cursor-pointer">
            <p onClick={() => showWarningToast('Tính năng chưa phát triển')}>{language === 'en' ? 'Why SSO Portal?' : 'Tại sao chọn SSO Portal?'}</p>
          </li>
        </ul>
      </div>

      <BackToTop />
    </section>
  );
};

export default Header;

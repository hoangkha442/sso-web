import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useWow from '../../../Hook/useWow';
import img from '../../../assets/target.png';
import bank from '../../../assets/bank.png';
import medical from '../../../assets/medical.png';
import enterprise from '../../../assets/enterprise.png';
import goverment from '../../../assets/goverment.png';

type Props = {}

export default function MFATargetAudience({}: Props) {
  const language = useSelector((state: RootState) => state.language);
  useWow();

  return (
    <section className='bg-target px-6 lg:px-[120px] pb-10 lg:pb-20'>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 wow animate__fadeIn" data-wow-delay="0.2s">
        <div className="w-full lg:w-1/2 shrink-0">
          <img src={img} alt="Target Audience" className='w-full h-auto object-cover' />
        </div>
        <div className="font-arimo w-full lg:w-1/2">
          <h1 className='text-3xl lg:text-4xl'>
            {language === 'en' ? 'Who Should Use SSO’s MFA?' : 'Ai nên sử dụng MFA của SSO?'}
          </h1>
          <p className='text-lg lg:text-xl font-light mt-6 lg:mt-10'>
            {language === 'en' 
              ? "SSO’s Multi-Factor Authentication (MFA) boosts security by requiring multiple forms of verification beyond just a password. This additional layer helps protect sensitive data, prevent unauthorized access, and reduce the risk of cyber threats, ensuring stronger overall security."
              : "Xác thực Đa yếu tố (MFA) của SSO tăng cường bảo mật bằng cách yêu cầu nhiều hình thức xác minh ngoài mật khẩu. Lớp bảo vệ bổ sung này giúp bảo vệ dữ liệu nhạy cảm, ngăn chặn truy cập trái phép và giảm thiểu nguy cơ bị đe dọa an ninh mạng, đảm bảo an ninh tổng thể mạnh mẽ hơn."
            }
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:mt-12">
  <div className="flex flex-col items-center p-6 rounded-[10px] bg-white shadow-md h-[350px] lg:h-[375px] wow animate__fadeInUp" data-wow-delay="0.2s">
    <img src={bank} alt="Bank" className="mb-4 h-16 lg:h-20" />
    <h2 className="text-xl lg:text-2xl">{language === 'en' ? 'Bank' : 'Ngân hàng'}</h2>
    <ul className=" mt-5 list-disc list-inside">
      {language === 'en' ? (
        <>
          <li>Secure access to sensitive data and financial transactions.</li>
          <li>Integrate banking apps with security measures.</li>
          <li>Simplify secure access.</li>
        </>
      ) : (
        <>
          <li>Bảo vệ truy cập dữ liệu nhạy cảm và giao dịch tài chính.</li>
          <li>Tích hợp ứng dụng ngân hàng với biện pháp bảo mật.</li>
          <li>Đơn giản hóa truy cập an toàn.</li>
        </>
      )}
    </ul>
  </div>

  <div className="flex flex-col items-center p-6 rounded-[10px] bg-white shadow-md h-[350px] lg:h-[375px] wow animate__fadeInUp" data-wow-delay="0.4s">
    <img src={medical} alt="Medical Center" className="mb-4 h-16 lg:h-20" />
    <h2 className="text-xl lg:text-2xl">{language === 'en' ? 'Medical Center' : 'Trung tâm Y tế'}</h2>
    <ul className=" mt-5 list-disc list-inside">
      {language === 'en' ? (
        <>
          <li>Provide robust security for healthcare environments.</li>
          <li>Align with compliance requirements.</li>
          <li>Integrate with applications and protect patient data.</li>
        </>
      ) : (
        <>
          <li>Cung cấp bảo mật mạnh mẽ cho môi trường y tế.</li>
          <li>Phù hợp với yêu cầu tuân thủ.</li>
          <li>Tích hợp ứng dụng và bảo vệ dữ liệu bệnh nhân.</li>
        </>
      )}
    </ul>
  </div>

  <div className="flex flex-col items-center p-6 rounded-[10px] bg-white shadow-md h-[350px] lg:h-[375px] wow animate__fadeInUp" data-wow-delay="0.6s">
    <img src={goverment} alt="Governance" className="mb-4 h-16 lg:h-20" />
    <h2 className="text-xl lg:text-2xl">{language === 'en' ? 'Governance' : 'Chính phủ'}</h2>
    <ul className=" mt-5 list-disc list-inside">
      {language === 'en' ? (
        <>
          <li>Customizable security for government agencies.</li>
          <li>Ensure safety in operations.</li>
          <li>Protect citizen data.</li>
        </>
      ) : (
        <>
          <li>Bảo mật tùy chỉnh cho cơ quan chính phủ.</li>
          <li>Đảm bảo an toàn trong hoạt động.</li>
          <li>Bảo vệ dữ liệu công dân.</li>
        </>
      )}
    </ul>
  </div>

  <div className="flex flex-col items-center p-6 rounded-[10px] bg-white shadow-md h-[350px] lg:h-[375px] wow animate__fadeInUp" data-wow-delay="0.8s">
    <img src={enterprise} alt="Enterprise" className="mb-4 h-16 lg:h-20" />
    <h2 className="text-xl lg:text-2xl">{language === 'en' ? 'Enterprise' : 'Doanh nghiệp'}</h2>
    <ul className=" mt-5 list-disc list-inside">
      {language === 'en' ? (
        <>
          <li>Offer multiple authentication methods.</li>
          <li>Provide endpoint security.</li>
          <li>Protect internal data and credentials.</li>
        </>
      ) : (
        <>
          <li>Cung cấp nhiều phương thức xác thực.</li>
          <li>Bảo mật điểm cuối.</li>
          <li>Bảo vệ dữ liệu nội bộ và thông tin đăng nhập.</li>
        </>
      )}
    </ul>
  </div>
</div>


    </section>
  );
}

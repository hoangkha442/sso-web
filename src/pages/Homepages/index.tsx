import Banner from './Banner'
import SignificantNumbers from './SignificantNumbers'
import Introduction from './Introduction'
import MFA from './MFA'
import Plans from './Plans'
import Companies from './Company'
import BannerTech from './BannerTech'

type Props = {}

export default function Homepages({}: Props) {
  return (
    <div className='overflow-hidden'>
      <div className="mt-24">
        <Banner />
      </div>
      <div className="px-6 lg:px-[175px]">
        <SignificantNumbers />
      </div>
      <Introduction />
      <div className="px-6 lg:px-[175px] max-h-full lg:max-h-80">
        <MFA />
      </div>
      <Plans />
      <Companies />
      <BannerTech />
    </div>
  )
}
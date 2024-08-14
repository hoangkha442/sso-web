import MFAIntro from './MFAIntro'
import MFABenefits from './MFABenefits'
import MFATargetAudience from './MFATargetAudience'

type Props = {}

export default function MultiFactorAuth({}: Props) {
  return (
    <div className='overflow-hidden'>
      <MFAIntro />
      <MFABenefits />
      <MFATargetAudience />
    </div>
  )
}
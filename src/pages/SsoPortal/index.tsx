import IntroductionSSO from './IntroductionSSO'
import Benefits from './Benefits'
import SingleSignOnIntro from './SingleSignOnIntro'

type Props = {}

export default function SsoPortal({}: Props) {
  return (
    <div className='mt-24 overflow-hidden'>
      <IntroductionSSO />
      <Benefits />
      <SingleSignOnIntro />
    </div>
  )
}
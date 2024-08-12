import React from 'react'
import bannerTech from '../../../assets/banner-tech.png'
type Props = {}

export default function BannerTech({}: Props) {
  return (
    <section className='max-h-[288px]'>
        <img src={bannerTech} alt="" className='object-cover w-full'/>
    </section>
  )
}
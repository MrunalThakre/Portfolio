import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
   <footer className='w-full  pb-10 mb-[100px] md:mb-5' id ="contact">
    

    <div className='flex flex-col items-center'>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
        Reach out to me today and let us discuss how I can help you achieve your goals.
        </p>

        <a href ="mailto: mrunalthakre23@gmail.com">
            <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow/>}
            position='right' />
        </a>

    </div>

    <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Inspired by AdrianHajdin</p>


        <div className='flex items-center md:gap-3 gap-6'>
        {socialMedia.map(({ id, img, link }) => (
    <a key={id.toString()} href={link} target="_blank" rel="noopener noreferrer" className='w-10 h-10 cursor-pointer flex justify-center backdrop:blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
        <img src={img} alt={id.toString()} width={20} height={20} />
    </a>
))}

    </div>
    </div>

   </footer>
  )
}

export default Footer

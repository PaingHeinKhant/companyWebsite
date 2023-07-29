import React from 'react'

const SocialIcon = (props) => {
  return (
    <a href={props.link} className=" w-[55px]  h-[55px]  rounded-full flex justify-center items-center  dark:text-white text-font-title border border-black dark:border-white">
        {props.icon}
    </a>
  )
}

export default SocialIcon
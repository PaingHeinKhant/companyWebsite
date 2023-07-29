import React from 'react'
import SocialIcon from '../contact/SocialIcon'
import SectionDivider from '../SectionDivider'

const MemberImg = (props) => {

    

  return (

    <>
    <div className={` w-[90%] mx-auto flex space-x-[100px] justify-center ${props.index%2 == 0 ? 'flex-row-reverse' : '' } `}>

        <div >
            <img src={props.image} alt="" className='w-[300px] h-[300px] object-cover rounded-2xl' />
        </div>

         <div className="w-[514px]">

            <h4 className='text-font-title gradient-text font-semibold'>Hello, My Name is</h4>
            <h1 className='text-font-large font-bold dark:text-white'>{props.name}</h1>
            <p className='dark:text-white text-font-sm text-para-text '>{props.desc}</p> 
        
            <div className="mt-5 flex space-x-4">
                <SocialIcon link={props.facebook} icon={props.socialIcons[0]} />
                <SocialIcon link={props.twitter} icon={props.socialIcons[1]} />
                <SocialIcon link={props.linkdin} icon={props.socialIcons[2]} />

            </div>
        </div>




            
      
    </div>

    {
        props.index !== props.count ?  <SectionDivider index= {props.index} /> : ''
    }

   

    </>
  
  )
}

export default MemberImg
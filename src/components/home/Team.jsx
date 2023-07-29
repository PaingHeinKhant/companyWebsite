import React from 'react';
import dog1 from '../../img/dog1.jpeg'
import dog2 from '../../img/dog2.jpeg'
import dog3 from '../../img/dog3.jpg'
import dog4 from '../../img/dog4.jpg'

const Team = () => {

  const members= [dog1,dog2,dog3,dog4]

  return (
    <div>
      <div className="text-center mt-[100px]">
        <h6 className='font-sm tracking-[.35em] dark:text-white'>BEST SERVICES</h6>
            <h2 className='gradient-text text-font-subtitle'>An original team of creators,<br/>developers and dreamers</h2>
        <div className="mt-12 flex justify-evenly">
          {
            members.map((mem,index)=>{

              return (
                <div className='relative w-[267px] h-[326px] group'>
                <div className="w-full h-full absolute bg-gradient  z-[1] 
                group-hover:rotate-12 transition ease-out"></div>
                <img key={index} src={mem}
                className="object-cover h-full w-full z-[2] relative hover:backdrop-opacity-80 bg-white   "
                  alt="team member"  />
                </div>
              )

            })
          }
           
        </div>
      </div>


    </div>
  )
}

export default Team
import React from 'react'

const SectionDivider = (props) => {
  return (
    <div className={`w-[1000px] 2xl:w-[1400px] bg-gradient h-[2px] my-[100px]
     ${props.index & props.index%2 !=0 ? 'mr-0 ml-auto' : '' }`}>

    </div>
  )
}

export default SectionDivider
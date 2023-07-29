import React from 'react'
import {AiOutlineDesktop} from'react-icons/ai'
import {HiArrowLongRight} from 'react-icons/hi2'
import {BsArrowsMove} from 'react-icons/bs'
import {ImDropbox} from 'react-icons/im'
import {SiArtstation} from 'react-icons/si'
const Services = () => {
  return (
    <div className=''>
        <div className="grid grid-cols-12 items-center my-14">
            <div className="col-span-8">
                <h6 className='font-sm tracking-[.35em] dark:text-white'>BEST SERVICES</h6>
                <h2 className='gradient-text text-font-subtitle'>We help to create strategies,<br/>design and development.</h2>
            </div>
  
            <div className="col-span-4">
            </div>
        </div>

        <div className="grid md:grid-rows-1 grid-flow-col">
            <div className="hover:border-4">
               <div className="py-20 px-10  ">
                    <AiOutlineDesktop className='text-[80px]  text-black text-opacity-50  dark:text-white dark:text-opacity-50'/>
                        <div className="my-5">
                            <h5 className='text-font-title font-medium my-5  dark:text-white dark:text-opacity-50'>Interface Design</h5>
                            <p className='text-font-sm font-light text-black text-opacity-50  dark:text-white dark:text-opacity-50'>Impletation and rollback <br/> of new network  <br/> infrastructure, including  <br/>consolidation</p>
                        </div>
                    <HiArrowLongRight className='text-[50px]  dark:text-white dark:text-opacity-50'/>
               </div>
            </div>

            <div className="">
               <div className="py-20 px-10  ">
                    <BsArrowsMove className='text-[80px]  text-black text-opacity-50  dark:text-white dark:text-opacity-50'/>
                        <div className="my-5">
                            <h5 className='text-font-title font-medium my-5  dark:text-white dark:text-opacity-50'>Creative Always</h5>
                            <p className='text-font-sm font-light text-black text-opacity-50  dark:text-white dark:text-opacity-50'>Impletation and rollback <br/>of new network <br/>infrastructure, including <br/>consolidation</p>
                        </div>
                    <HiArrowLongRight className='text-[50px]  dark:text-white dark:text-opacity-50'/>
               </div>
            </div>

            <div className="">
               <div className="py-20 px-10 ">
                    <ImDropbox className='text-[80px]  text-black text-opacity-50  dark:text-white dark:text-opacity-50' />
                        <div className="my-5">
                            <h5 className='text-font-title font-medium my-5  dark:text-white dark:text-opacity-50'>Real time Editing</h5>
                            <p className='text-font-sm font-light text-black text-opacity-50  dark:text-white dark:text-opacity-50 '>Impletation and rollback <br/>of new network <br/>infrastructure, including <br/>consolidation</p>
                        </div>
                    <HiArrowLongRight className='text-[50px]  dark:text-white dark:text-opacity-50'/>
               </div>
            </div>

            <div className="">
               <div className="py-20 px-10">
                    <SiArtstation className='text-[80px]  text-black text-opacity-50  dark:text-white dark:text-opacity-50'/>
                        <div className="my-5">
                            <h5 className='text-font-title font-medium my-5  dark:text-white dark:text-opacity-50'>Art Concept</h5>
                            <p className='text-font-sm font-light text-black text-opacity-50  dark:text-white dark:text-opacity-50'>Impletation and rollback <br/> of new network  <br/> infrastructure, including  <br/>consolidation</p>
                        </div>
                    <HiArrowLongRight className='text-[50px]  dark:text-white dark:text-opacity-50'/>
               </div>
            </div>


            
        </div>

    </div>
  )
}

export default Services
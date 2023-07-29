import React from 'react';
import img1 from '../img/heroAbout1.png';
import img2 from '../img/heroAbout2.png';
import img3 from '../img/heroAbout3.png';
import vector1 from '../img/Vector.png';
import vector2 from '../img/Vector (1).png';
import vector3 from '../img/Vector (2).png';



function HeroAbout(props) {
    return (
        <div className='pt-[100px]'>
            <div className="grid  grid-cols-12 h-screen items-center justify-center">

                <div className="col-span-6 ">
                   <div className="w-[90%]">
                       <div className="grid  grid-cols-12 items-center justify-center">
                           <div className="col-span-3"></div>
                           <div className="col-span-4 ">
                               <img src={img1} className={'w-100 mr-4'} alt=""/>
                           </div>

                           <div className="col-span-5 ">
                               <div className="w-[90%] mx-auto">
                                   <img src={img3} className={'w-100 mb-4'} alt=""/>
                                   <img src={img2} className={'w-[90%] mr-auto'} alt=""/>
                               </div>
                           </div>

                       </div>
                   </div>
                </div>
                <div className="col-span-5 ">
                    <div className="w-[95%]">
                        <div className="">
                            <button className={'bg-gradient-btn px-4 py-2 rounded mb-5'}>
                                about us
                            </button>
                            <h1 className={'text-font-hero dark:text-white mb-5'}>We are more than just <br/>
                                a digital agency.</h1>
                            <p className={'text-font-[16px] dark:text-dark-text font-light mb-5'}>
                                We are Vie. We create award-winning  websites, remarkable brands
                                and cutting-edge apps. Nulam imperdiet, sem at fringilla lobortis,
                                semnibh fringila nibh, id gravida mi purus sit amet erat. Ut dictum
                                nisi masvitp.
                            </p>
                            <div className="grid  grid-cols-12 ">
                                <div className="col-span-4">
                                    <div className="bg-[#212529] py-3 w-[90%]">
                                        <div className="mb-4">
                                            <img src={vector1} className={'w-100 mx-auto'} alt=""/>
                                        </div>
                                        <p className={'dark:text-white text-center font-bold mx-auto w-[50%]'}>
                                            Pixel
                                            Perfect
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="bg-[#212529] py-3 w-[90%]">
                                       <div className="mb-4">
                                           <img src={vector2} className={'w-100 mx-auto'} alt=""/>
                                       </div>
                                        <p className={'dark:text-white text-center font-bold mx-auto w-[70%]'}>
                                            Creative
                                            Design
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="text-center bg-[#212529] py-3 w-[90%]">
                                        <div className="mb-4">
                                            <img src={vector3} className={'w-100 mx-auto'} alt=""/>
                                        </div>
                                        <p className={'dark:text-white text-center font-bold mx-auto w-[70%]'}>
                                            High
                                            Performance
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HeroAbout;
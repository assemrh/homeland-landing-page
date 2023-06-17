import * as React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper";

import 'swiper/css/pagination';

interface Props {
    index: number | undefined
}
export default function Project({index}:Props) {

    return (
        <>
            <div className="  w-full  lg:flex lg:justify-between p-6">
                <div className="w-1/2 min-h-full max-w-full">
                    <Swiper
                        pagination={{
                            clickable: true,
                            bulletClass: `swiper-pagination-bullet`,
                            renderBullet: (index, className) => {
                                return `<span class="${className} dot-pagination"></span>`;
                            }
                        }}

                        modules={[Pagination]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div
                                className="block min-h-full lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                style={{backgroundImage: "url('/images/card-left.png')"}}
                                title="Woman holding a mug">
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="block min-h-full lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                style={{backgroundImage: "url('/images/card-left.png')"}}
                                title="Woman holding a mug">
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="block min-h-full lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                style={{backgroundImage: "url('/images/card-left.png')"}}
                                title="Woman holding a mug">
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="block min-h-full lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                style={{backgroundImage: "url('/images/card-left.png')"}}
                                title="Woman holding a mug">
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-1/2 lg:min-h-[472px]  ">
                    <div
                        className="text-left rounded-b lg:rounded-b-none lg:rounded-r px-6 flex flex-col justify-between leading-normal">

                        <div className="text-white ">
                            <div className="mb-4">

                                <p role='h4'
                                   className="not-italic font-semibold  text-[2rem] leading-[3rem] text-[#ffffffde] font-['Poppins']">Villas
                                    of
                                    Excellence {index} </p>
                                <p className="text-[#FFFFFFDE] text-base"> Your Best Destination for
                                    Topmost
                                    Privacy and Independence</p>
                            </div>
                            <div className="mb-4">

                                <ul className='list-disc list-inside text-[#C8A55A]'>
                                    <li>Independent villas with their private pools with options
                                        starting
                                        from 4+1 up to 7+1
                                    </li>
                                    <li>Overlooking the Marmara Sea & Büyükçekmece Lake</li>
                                    <li>30 Minutes to Istanbul Airport</li>
                                </ul>
                            </div>
                            <div className="mb-4">

                                <h4>Payment Plan</h4>
                                <p>50% Down payment and 12 monthly installments</p>
                            </div>
                            <div className="mb-4">

                                <h4>Services </h4>
                                <p>Gym, Turkish Bath, Sports Courts</p>
                            </div>
                            <div className="mb-12">

                                <button>Learn more about this villa</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}

import * as React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ButtonLink from '@/components/links/ButtonLink';

interface Props {
  index: number | undefined;
}

export default function Project({ index }: Props) {
  return (
    <div className='flex h-full min-h-min w-full flex-1 flex-col gap-y-6 pb-6 md:flex-row md:p-6 lg:justify-between '>
      <div className='min-h-min max-w-full md:w-1/2'>
        <Swiper
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet`,
            renderBullet: (index, className) => {
              return `<span class="${className} dot-pagination"></span>`;
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div
              className='block min-h-full flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:rounded-l lg:rounded-t-none'
              style={{ backgroundImage: "url('/images/card-left.png')" }}
              title='Woman holding a mug'
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='block min-h-full flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:rounded-l lg:rounded-t-none'
              style={{ backgroundImage: "url('/images/card-left.png')" }}
              title='Woman holding a mug'
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='block min-h-full flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:rounded-l lg:rounded-t-none'
              style={{ backgroundImage: "url('/images/card-left.png')" }}
              title='Woman holding a mug'
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='block min-h-full flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:rounded-l lg:rounded-t-none'
              style={{ backgroundImage: "url('/images/card-left.png')" }}
              title='Woman holding a mug'
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='md::min-h-[472px] flex min-h-min md:w-1/2 '>
        <div className='flex flex-1 flex-auto flex-col justify-between rounded-b px-6 text-left leading-normal lg:rounded-b-none lg:rounded-r'>
          <div className='flex min-h-full flex-1 flex-col justify-between gap-y-6 text-white'>
            <div className='my-auto'>
              <p
                role='h4'
                className="font-['Poppins'] text-[2rem]  font-semibold not-italic leading-[3rem] text-[#ffffffde]"
              >
                Villas of Excellence {index}{' '}
              </p>
              <p className='text-base text-[#FFFFFFDE]'>
                {' '}
                Your Best Destination for Topmost Privacy and Independence
              </p>
            </div>
            <div className='my-auto'>
              <ul className='list-inside list-disc text-[#C8A55A]'>
                <li>
                  Independent villas with their private pools with options
                  starting from 4+1 up to 7+1
                </li>
                <li>Overlooking the Marmara Sea & Büyükçekmece Lake</li>
                <li>30 Minutes to Istanbul Airport</li>
              </ul>
            </div>
            <div className='my-auto'>
              <h4>Payment Plan</h4>
              <p>50% Down payment and 12 monthly installments</p>
            </div>
            <div className='my-auto'>
              <h4>Services </h4>
              <p>Gym, Turkish Bath, Sports Courts</p>
            </div>
            <div>
              <ButtonLink
                variant='whatsapp'
                href='https://www.linkedin.com/in/asimrahal/'
                leftIcon={() => <BsWhatsapp />}
              >
                Learn more about this villa
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

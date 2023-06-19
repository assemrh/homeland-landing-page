import Image from 'next/image';
import * as React from 'react';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/scrollbar';

import styles from '@/styles/styles.module.css';

import Project from '@/components/Homepage/project';

export default function Projects() {
  const menu = ['Villa Name 1', 'Villa Name 2', 'Villa Name 3'];
  const [swiperRef, setSwiperRef] = React.useState<SwiperClass>();

  return (
    <div className='container'>
      <h2 className={styles.h2_1}>Top 3 Villa Projects in Istanbul</h2>
      <Swiper
        modules={[Pagination, A11y, Navigation]}
        onSwiper={setSwiperRef}
        pagination={{
          el: '.custom-pagination',
          bulletClass: 'custom-swiper-pagination-bullet',
          clickable: true,
          renderBullet: (index: number, className: string) =>
            '<button role="button" class="custom-swiper-pagination-bullet -' +
            className +
            '"> <span class="pagination-text">' +
            menu[index] +
            '</span></button>',
        }}
      >
        {[...Array(3)].map((e, i) => (
          <SwiperSlide key={i}>
            <div className={styles.project_card}>
              <Project index={i + 1} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='swiper-nav-btns  mb-16 mt-8 hidden flex-col items-center justify-between md:flex md:flex-row'>
        <button
          onClick={() => swiperRef?.slidePrev()}
          className='hidden md:block'
        >
          <Image
            src='/svg/vector-arrow-circle-left.svg'
            width={48}
            height={49}
            alt='Picture of the author'
          />
        </button>
        <div className='custom-pagination mt-0 '></div>
        <button
          onClick={() => swiperRef?.slideNext()}
          className='hidden md:block'
        >
          <Image
            src='/svg/vector-arrow-circle-right.svg'
            width={48}
            height={49}
            alt='Picture of the author'
          />
        </button>
      </div>
    </div>
  );
}

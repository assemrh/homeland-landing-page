import * as React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper";

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import styles from "@/styles/styles.module.css";
import Project from "@/components/Homepage/project";

export default function Projects() {
    const menu = ['Villa Name 1', 'Villa Name 2', 'Villa Name 3'];


    return (
        <>
            <h2 className={styles.h2_1}>Top 3 Villa Projects in Istanbul</h2>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: (index: number, className: string) => '<button role="button" class="custom-' + className + '"> <span class="pagination-text">' + (menu[index]) + '</span></button>'
                }}
            >
                {[...Array(3)].map((e, i) => (
                    <SwiperSlide key={i}>
                        <div className={styles.project_card}>
                            <Project index={i}/>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className="custom-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

        </>
    );
}

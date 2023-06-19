import Image from 'next/image';
import * as React from 'react';
import Flag from 'react-world-flags';

import styles from '@/styles/testimonials.module.css';

export default function Testimonials() {
  return (
    <div className='container pt-5'>
      <h2 className={styles.h2_1}>Testimonials</h2>
      <div className='flex flex-col justify-center md:flex-row md:gap-x-7'>
        <div className='mt-36  max-w-sm rounded-lg border border-[#C8A55A] shadow'>
          <div className='-mt-36 px-5'>
            <Image
              className='mt-8 w-full rounded-t-lg object-fill'
              src='/images/testimonial-1/user/rectangle-21.jpg'
              width='400'
              height='537'
              alt=''
            />
          </div>
          <div className='flex flex-col gap-y-2 p-5 '>
            <a href='#'>
              <h5 className={styles.name}>Dr. Fadila</h5>
            </a>
            <p className={styles.country}>
              <Flag code='IQ' style={{ height: '14px', display: 'inline' }} />{' '}
              Iraq
            </p>
            <h3 className={styles.title}>We got citizenship!</h3>
            <p className="text-justify font-['Poppins'] text-base font-normal text-[#1C3556]">
              “For a long time, we have been thinking of buying a property to
              obtain Turkish citizenship, we found Homeland via the Internet,
              their consultation was convincing and base on it we took the
              decision and bought the property, then -indeed- we obtained
              Turkish citizenship within a short period.”
            </p>
          </div>
        </div>
        <div className='mt-36  max-w-sm rounded-lg border border-[#C8A55A] shadow'>
          <div className='-mt-36 px-5'>
            <Image
              className='mt-8 w-full  rounded-t-lg  object-fill'
              src='/images/testimonial-1/user/rectangle-21.jpg'
              width='400'
              height='537'
              alt=''
            />
          </div>
          <div className='flex flex-col gap-y-2 p-5 '>
            <a href='#'>
              <h5 className={styles.name}>Dr. Fadila</h5>
            </a>
            <p className={styles.country}>
              <Flag code='IQ' style={{ height: '14px', display: 'inline' }} />{' '}
              Iraq
            </p>
            <h3 className={styles.title}>We got citizenship!</h3>
            <p className="text-justify font-['Poppins'] text-base font-normal text-[#1C3556]">
              “For a long time, we have been thinking of buying a property to
              obtain Turkish citizenship, we found Homeland via the Internet,
              their consultation was convincing and base on it we took the
              decision and bought the property, then -indeed- we obtained
              Turkish citizenship within a short period.”
            </p>
          </div>
        </div>
        <div className='mt-36  max-w-sm rounded-lg border border-[#C8A55A] shadow'>
          <div className='-mt-36 px-5'>
            <Image
              className='mt-8 w-full  rounded-t-lg  object-fill'
              width='400'
              height='537'
              src='/images/testimonial-1/user/rectangle-21.jpg'
              alt=''
            />
          </div>
          <div className='flex flex-col gap-y-2 p-5 '>
            <a href='#'>
              <h5 className={styles.name}>Dr. Fadila</h5>
            </a>
            <p className={styles.country}>
              <Flag code='IQ' style={{ height: '14px', display: 'inline' }} />{' '}
              Iraq
            </p>
            <h3 className={styles.title}>We got citizenship!</h3>
            <p className="text-justify font-['Poppins'] text-base font-normal text-[#1C3556]">
              “For a long time, we have been thinking of buying a property to
              obtain Turkish citizenship, we found Homeland via the Internet,
              their consultation was convincing and base on it we took the
              decision and bought the property, then -indeed- we obtained
              Turkish citizenship within a short period.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import * as React from 'react';

import styles from '@/styles/why-homeland.module.css';

interface ICard {
  title: string;
  text: string;
}

export default function WhyHomeland() {
  const vals: ICard[] = [
    {
      title: 'Professionality',
      text: 'Our experienced team will be with you from start to finish with utmost professionalism.',
    },
    {
      title: 'Experience',
      text: 'We help you make the right decision with our deep knowledge and ability to analyze the local real estate market.',
    },
    {
      title: 'Transparency',
      text: 'We provide accurate and concise information about the condition, location, and prices of real estate; with the utmost transparency and clarity..',
    },
    {
      title: 'Customers Service',
      text: 'Our customer support team will answer your questions and provide the most accurate information regarding your real estate ownership journey.',
    },
    {
      title: 'Aftersale Service',
      text: 'Our free services start before purchasing the property and never end after it.',
    },
  ];

  return (
    <div className='container'>
      <h2 className={styles.h2_1}>
        Reasons why <span className={styles.golden_text}>Homeland</span>
        <br />
        should be your real estate agent
      </h2>
      <div className='container mb-20 mt-16 flex flex-auto flex-row flex-wrap justify-center gap-x-8 gap-y-6'>
        {vals.map((val, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.bg}>
              <Image
                src='/svg/bg-logo.svg'
                alt='man speaking'
                width={366}
                height={256}
              />
            </div>
            <h5 className={styles.title}>{val.title}</h5>
            <p className={styles.text}>{val.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

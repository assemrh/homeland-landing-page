/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Image from 'next/image';
import * as React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import PhoneInput from 'react-phone-input-2';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import 'react-phone-input-2/lib/style.css';
import styles from './../styles/styles.module.css';

import Projects from '@/components/Homepage/projects';
import Testimonials from '@/components/Homepage/testimonials';
import WhyHomeland from '@/components/Homepage/WhyHomeland';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
interface ICard {
  title: string;
  text: string;
}

const card_array: ICard[] = [
  {
    title: 'Choose a suitable location',
    text: 'The location plays a pivotal role in the purchase process; therefore, you must focus on choosing the right location to ensure a peaceful and exceptional life.',
  },
  {
    title: 'Required specifications',
    text: 'Having a variety of villas at our disposal for the purpose of housing or investment allows us to directly answer your requests when specifying your desired specifications.',
  },
  {
    title: 'Under construction or ready to live in?',
    text: 'The options for installments, housing, and views are much better when the project is under construction. Therefore, the client can wait for the project to finish. As for immediate housing needs, the constructed property is the ideal choice for you.',
  },
  {
    title:
      'Choose a reliable real estate agent that helps you with all these tasks',
    text: 'Being here means you are in the right place. Homeland Real Estate helps you own the right villa/property for you in Istanbul.',
  },
  {
    title:
      'Which is better: Living in a villa complex or in an independent villa?',
    text: 'The answer to this question depends on the type and specifications of the villa/property. Therefore, it is necessary to contact Homeland Real Estate Company to find out the most suitable option for you.',
  },
];
export default function HomePage() {
  const [phone, setPhone] = React.useState<string | null | undefined>(null);
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='banner bg-white'>
          <div className='relative min-h-screen text-center'>
            <div className={styles.banner_text_layer}>
              <div className='xl:mb-11 '>
                <Image
                  src='/images/logo_1_1.svg'
                  width={190}
                  height={131}
                  alt='Picture of the author'
                />
              </div>

              <div className='flex flex-col'>
                <h1 className={styles.banner_title}>
                  Luxurious Villas of Istanbul
                </h1>
                <p className={styles.banner_text}>
                  Own One of Europe’s Most Beautiful Villas for The Best Price
                  Possible!
                </p>
              </div>
              <div className='xl:my-12'>
                <Image
                  src='/images/play-circle.svg'
                  width={120}
                  height={120}
                  alt='Picture of the author'
                />
              </div>
              <div className='flex flex-col gap-4 md:flex-row md:gap-8'>
                <ButtonLink className={styles.banner_left_btn} href='#'>
                  Which villa you’re looking for?
                </ButtonLink>
                <ButtonLink
                  className={styles.banner_whatsapp_btn}
                  href='#'
                  color='white'
                  leftIcon={() => <BsWhatsapp />}
                >
                  Chat on WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
        <section className='section-3 bg-white'>
          <div className='container mx-auto flex flex-row gap-x-8'>
            <div className='mb-32 w-2/3 px-4 '>
              <div className='flex flex-col gap-y-11'>
                <h1 className='text-5xl text-[#1C3556]'>
                  6 Reasons Make Turkey Unique Investment Opportunity
                </h1>
                <h2 className="text-5xl text-[#C8A55A] text-['Poppins']  ">
                  Turkey’s Modern Oriental Lifestyle.
                </h2>
              </div>
            </div>
            <div className='flex w-1/3 items-center justify-center px-4 text-center '>
              <Image
                src='/images/1.png'
                width={61}
                height={185}
                alt='Picture of the author'
              />
            </div>
          </div>
        </section>
        <section className='bg-[#F7F6F6] px-6 text-center'>
          <div className='container-lg mx-auto flex min-h-screen   flex-col items-center justify-start  py-12 text-center'>
            <h2 className={styles.h2_1}>How Do I Choose the Right Villa?</h2>

            <div className='item-center container mb-24  flex flex-col justify-center gap-x-6 md:flex-row'>
              <div className='mb-6 md:mb-0 md:w-2/5'>
                <div className='flex min-h-full w-full justify-center'>
                  <Image
                    src='/images/Rectangle-5.jpg'
                    alt='man speaking'
                    width={586}
                    height={835}
                    className='w-full object-cover'
                  />
                </div>
              </div>
              <div className='md:w-3/5'>
                <div className='flex min-h-full flex-col justify-between gap-y-4'>
                  {card_array.map((x, i) => (
                    <div key={`x-${i}`} className={styles.card}>
                      <h5 className={styles.golden_text}> {x.title}</h5>
                      <p className={styles.card_text}>{x.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Projects />
            <br />
            <WhyHomeland />
            <Testimonials />
          </div>
        </section>

        <section className='bg-gray-800'>
          <form>
            <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-left'>
              <div className='mb-6 w-1/2 '>
                <label
                  htmlFor='fullname'
                  className='mb-2 block text-lg font-medium text-white '
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='fullname'
                  className=' text--lg block   w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  placeholder='Full name'
                  required
                />
              </div>
              <div className='mb-6 w-1/2 '>
                <label
                  id='number-label'
                  htmlFor='number'
                  className='mb-2 block text-lg font-medium text-white  '
                >
                  Phone Number
                </label>
                <PhoneInput
                  inputClass=' w-full  border border-gray-300 text-gray-900 text--lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  country='tr'
                  inputStyle={{ width: '100%' }}
                  value={phone}
                  placeholder='+90 (555) 000-00-00'
                  onChange={(phone) => setPhone(phone)}
                />
              </div>
              <div className='mb-6 w-1/2 '>
                <label
                  htmlFor='email'
                  className='mb-2 block text-lg font-medium  text-white '
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  className='  text--lg block  w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  placeholder='name@flowbite.com'
                  required
                />
              </div>
              <div className='mb-6 w-1/2'>
                <label
                  htmlFor='password'
                  className='mb-2 block text-lg font-medium text-white'
                >
                  Your password
                </label>
                <input
                  type='password'
                  id='password'
                  className='  block w-full
                                       rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  required
                />
              </div>
              <div className='mb-6 w-1/2'>
                <label
                  htmlFor='password'
                  className='mb-2 block text-base font-medium text-white'
                >
                  How would you like us to contact you? (You can select
                  multiple)
                </label>
                <div className='mb-6  flex  items-start gap-x-1'>
                  <div className='flexitems-center h-5'>
                    <input
                      id='Call'
                      type='checkbox'
                      value=''
                      className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                      required
                    />
                  </div>
                  <label
                    htmlFor='Call'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Call
                  </label>

                  <div className='flex h-5 items-center'>
                    <input
                      id='Whatsapp'
                      type='checkbox'
                      value=''
                      className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                      required
                    />
                  </div>
                  <label
                    htmlFor='Whatsapp'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Whatsapp
                  </label>

                  <div className='flex h-5 items-center'>
                    <input
                      id='Telegram'
                      type='checkbox'
                      value=''
                      className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                      required
                    />
                  </div>
                  <label
                    htmlFor='Telegram'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Telegram
                  </label>

                  <div className='flex h-5 items-center'>
                    <input
                      id='E-mail'
                      type='checkbox'
                      value=''
                      className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                      required
                    />
                  </div>
                  <label
                    htmlFor='E-mail'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    E-mail
                  </label>
                </div>
              </div>
              <div className='mb-6 w-1/2 '>
                <label
                  htmlFor='notes'
                  className='mb-2 block text-lg font-medium text-gray-900 dark:text-white'
                >
                  What’s your preferred contact time?
                </label>
                <input
                  type='text'
                  id='notes'
                  className=' text--lg block   w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  placeholder=' '
                  required
                />
              </div>
              <div className='mb-6 w-1/2 '>
                <p className='mb-2 block text-base font-medium text-white  '>
                  We will not share your email or any of your information with
                  any other party.
                </p>
                <ButtonLink
                  variant='golden'
                  className='w-full justify-center text-center'
                  href='https://www.linkedin.com/in/asimrahal/'
                >
                  Contact us to find the villa you’re looking for
                </ButtonLink>
              </div>
              <div className='mb-6 w-1/2 '>
                <ButtonLink
                  className='w-full justify-center text-center'
                  variant='whatsapp'
                  href='https://www.linkedin.com/in/asimrahal/'
                  leftIcon={() => <BsWhatsapp />}
                >
                  Learn more about this villa
                </ButtonLink>
              </div>
            </div>
          </form>
        </section>
      </main>
      <footer>
        <div className='flex justify-center bg-[#1C2127] py-4'>
          <p className={styles.footer_text}>Homeland copyright</p>
        </div>
      </footer>
    </Layout>
  );
}

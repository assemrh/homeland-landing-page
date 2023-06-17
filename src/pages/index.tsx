import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import styles from './../styles/styles.module.css';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Image from "next/image";
import {BsWhatsapp} from "react-icons/bs";
import Projects from "@/components/Homepage/projects";

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
        text: 'The location plays a pivotal role in the purchase process; therefore, you must focus on choosing the right location to ensure a peaceful and exceptional life.'
    },
    {
        title: 'Required specifications',
        text: 'Having a variety of villas at our disposal for the purpose of housing or investment allows us to directly answer your requests when specifying your desired specifications.'
    },
    {
        title: 'Under construction or ready to live in?',
        text: 'The options for installments, housing, and views are much better when the project is under construction. Therefore, the client can wait for the project to finish. As for immediate housing needs, the constructed property is the ideal choice for you.'
    },
    {
        title: 'Choose a reliable real estate agent that helps you with all these tasks',
        text: 'Being here means you are in the right place. Homeland Real Estate helps you own the right villa/property for you in Istanbul.'
    },
    {
        title: 'Which is better: Living in a villa complex or in an independent villa?',
        text: 'The answer to this question depends on the type and specifications of the villa/property. Therefore, it is necessary to contact Homeland Real Estate Company to find out the most suitable option for you.'
    },
];
export default function HomePage() {

    return (
        <Layout>
            {/* <Seo templateTitle='Home' /> */}
            <Seo/>
            <main>
                <section className='bg-white banner'>
                    <div className='relative min-h-screen text-center'>

                        <div className={styles.banner_text_layer}>
                            <div className="xl:mb-11">
                                <Image
                                    src="/images/logo_1_1.svg"
                                    width={190}
                                    height={131}
                                    alt="Picture of the author"
                                />

                            </div>
                            <div className='flex flex-col'>
                                <h1 className={styles.banner_title}>
                                    Luxurious Villas of Istanbul
                                </h1>
                                <p className={styles.banner_text}>
                                    Own One of Europe’s Most Beautiful Villas for The Best Price Possible!
                                </p>

                            </div>
                            <div className="xl:my-12">
                                <Image
                                    src="/images/play-circle.svg"
                                    width={120}
                                    height={120}
                                    alt="Picture of the author"
                                />

                            </div>
                            <div className='flex md:flex-row flex-col md:gap-8 gap-4'>
                                <ButtonLink className={styles.banner_left_btn} href='#'>
                                    Which villa you’re looking for?
                                </ButtonLink>
                                <ButtonLink className={styles.banner_whatsapp_btn} href='#' color='white'
                                            leftIcon={() => <BsWhatsapp/>}>
                                    Chat on WhatsApp
                                </ButtonLink>
                            </div>
                        </div>
                    </div>

                </section>
                <section className='bg-white section-3'>
                    <div className="container flex flex-row mx-auto">
                        <div className="w-2/3 px-4 bg-[#F7F636]">w-2/3</div>
                        <div className="w-1/3 px-4 bg-[#F72636]">w-1/3</div>

                    </div>
                </section>
                <section className='bg-[#F7F6F6] '>
                    <div
                        className='container-lg mx-auto flex min-h-screen   flex-col items-center justify-start  py-12 text-center'>
                        <h2 className={styles.h2_1}>How Do I Choose the Right Villa?</h2>

                        <div className="container flex flex-row item-center justify-center mb-24">
                            <div className="w-2/5">
                                <div>
                                    <Image src='/images/Rectangle-5.jpg'
                                           alt='man speaking'
                                           width={586}
                                           height={835}
                                    />
                                </div>
                            </div>
                            <div className="w-3/5   ">
                                <div className='min-h-full flex flex-col justify-between '>{
                                    card_array.map((x, i) => (<div
                                        key={`x-${i}`}
                                        className={styles.card}>
                                        <h5 className={styles.golden_text}> {x.title}</h5>
                                        <p className={styles.card_text}>{x.text}</p>
                                    </div>))
                                }


                                </div>
                            </div>
                        </div>
                        <Projects/>
<br/>

                        <h2 className={styles.h2_1}>Reasons why <span className={styles.golden_text}>Homeland</span>
                            <br/>
                            should be your real estate agent</h2>
                        <h2 className={styles.h2_1}>Testimonials</h2>


                    </div>
                </section>

                <section className='bg-gray-800'>
                    <div
                        className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>


                    </div>
                </section>
            </main>
            <footer>
                <div className="flex justify-center bg-[#1C2127] py-4">
                    <p className={styles.footer_text}>Homeland copyright</p>
                </div>
            </footer>
        </Layout>
    );
}

import React from 'react'
import './Nextgen.scss'
import nextgen from './../img/next-generation.jpeg';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const Nextgen = () => {
  return (
    <section className='nextgen-section'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="nextgen-left">
              <div className="heading-section" data-aos="fade-up" data-aos-duration="1500">
                <h2 className='heading-title'>Next-Gen Investment: Unlocking Real World Asset Tokenization </h2>

                <p>Own and trade real-world assets seamlessly with NanoEx RWA, leveraging blockchain technology for secure, fractional, and borderless investment opportunities.</p>
              </div>
              <div className="nextgen-img" data-aos="flip-left" data-aos-duration="2000">
                <img src={nextgen} alt="img" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="nextgen-right" data-aos="fade-up" data-aos-duration="1500">
              <div className="heading-section" >
                <h2 className='heading-title'>Why Invest in Tokenized Real World Assets? </h2>
              </div>
              <div className="nextgen-slider">

                <br />

                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                  spaceBetween={20}
                  // slidesPerView={2}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    767: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                  }}
                  loop={true}                
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log('slide change')}
                >
                  <SwiperSlide>
                    <div className="gradient-border">
                      <div className="nextgen-box">
                        <h6>Fractional <br />
                          Ownership</h6>
                        <p>
                          Invest in high-value assets with minimal capital, accessing fractionalized ownership through blockchain-powered tokenization for enhanced financial inclusion.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="gradient-border">
                      <div className="nextgen-box">
                        <h6>Enhanced <br />
                          Liquidity
                        </h6>
                        <p>
                          Trade tokenized assets instantly in a decentralized marketplace with automated market-making, staking rewards, and seamless fiat-to-crypto payment conversion.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="gradient-border">
                      <div className="nextgen-box">
                        <h6>Reduced Transaction <br /> Costs</h6>
                        <p>
                          By eliminating intermediaries, blockchain-powered asset tokenization significantly lowers transaction fees, making investments more cost-effective and accessible.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="gradient-border">
                      <div className="nextgen-box">
                        <h6>Instant Settlement <br /> & Transfers</h6>
                        <p>
                          Traditional asset transfers take days, while tokenized assets enable near-instant settlement, improving efficiency & reducing delays in asset ownership transfers.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="gradient-border">
                      <div className="nextgen-box">
                        <h6>Improved Market <br /> Efficiency</h6>
                        <p>
                          Tokenization removes barriers like high entry costs and long processing times, creating a more liquid, efficient, and accessible investment landscape for all.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="gradient-border">
                      <div className="nextgen-box">
                        <h6>24/7 Market <br />
                          Access </h6>
                        <p>
                          Unlike traditional markets with limited hours, tokenized assets can be bought, sold, and traded anytime, offering continuous investment opportunities worldwide.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* sdsaad */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nextgen
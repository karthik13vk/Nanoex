import React from 'react'
import './Community.scss';
import twitterimg from './../img/twitter.png'
import youtube from './../img/youtube.png'
import telegram from './../img/telegram.png'
import reddit from './../img/reddit.png'
const Community = () => {
    return (
        <section className='community-section'>
            <div className="container"  data-aos="fade-up" data-aos-duration="1500">
                <div className="community-bg">
                    <div className="row">
                        <div className="col-lg-6 col-md-6" >
                            <div className="heading-section">
                                <h2 className='heading-title'>Meet Our Leadership Team</h2>
                                <p>
                                    Our team consists of industry leaders in blockchain, finance, cybersecurity, and real-world asset tokenization, driving innovation, security, and global adoption at NanoEx RWA.
                                </p>
                            </div>

                            <div className="social-media">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0);">
                                        <img src={twitterimg} alt="img" loading="lazy"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);"> <img src={youtube} alt="img" loading="lazy" /></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);"> <img src={telegram} alt="img" loading="lazy" /></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);"> <img src={reddit} alt="img" loading="lazy" /></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Community
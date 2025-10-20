import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 700,    // animation duration (ms)
            easing: 'ease-in-out',
            once: true,      // true -> animate only once while scrolling down
            offset: 250,     // offset (px) from the original trigger point
        });
    }, []);

    return (
        <>
            <header class="header-section">
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <Link to="/">
                            <img src="images/logo.svg" width="141" height="28" alt="logoImg" />
                        </Link>
                    </div>
                    <div className="col-auto d-lg-none">
                        <ul class="list-unstyled ps-0 mb-0 d-flex align-items-center lists-icon-wrapper">
                            <li class="me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none">
                                    <path
                                        d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                                        stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 22.5L20 20.5" stroke="black" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </li>
                            <li class="me-4">
                                <a href="" class="text-decoration-none label-dark fs-14 fw-400 lh-15">Sign In</a>
                            </li>
                            <li>
                                <button className='p-0 bg-transparent border-0' onClick={() => setIsActive(!isActive)}>
                                    <FontAwesomeIcon icon={faBars} width={24} height={24} className='fs-21' />
                                </button>
                            </li>
                        </ul>

                        <div className={`header-sidebar ${isActive && 'header-sidebar-active'}`}>
                            <div className='p-4 logo-wrapper'>
                                <img src="/images/logo.svg" className='img-fluid' alt="logoImg" />
                            </div>
                            <div className='px-3 py-4'>
                                <ul className='ps-0 mb-4' style={{ listStylePosition: 'inside' }}>
                                    <li className='mb-3'>
                                        <a href="" class="text-decoration-none label-dark fs-14 fw-400 lh-15">Encyclopedia</a>
                                    </li>
                                    <li className='mb-3'>
                                        <a href="" class="text-decoration-none label-dark fs-14 fw-400 lh-15">Butik</a>
                                    </li>
                                    <li className='mb-3'>
                                        <a href="" class="text-decoration-none label-dark fs-14 fw-400 lh-15">AI Design Studio</a>
                                    </li>
                                </ul>
                                <ul class="list-unstyled ps-0">
                                    <li>
                                        <button class="default-btn d-block w-100">Creator</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <div class="menu-wrapper">
                            <ul class="list-unstyled ps-0 mb-0 d-flex align-items-center">
                                <li class="mx-4">
                                    <a href="" class="text-decoration-none label-dark fs-14 fw-400 lh-15">Encyclopedia</a>
                                </li>
                                <li class="mx-4">
                                    <a href="" class="text-decoration-none label-dark fs-14 fw-400 lh-15">Butik</a>
                                </li>
                                <li class="mx-4">
                                    <a href="" class="text-decoration-none label-dark fs-14 fw-400 lh-15">AI Design Studio</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <ul class="list-unstyled ps-0 mb-0 d-flex align-items-center lists-icon-wrapper">
                            <li class="me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
                                    <path
                                        d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                                        stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 22.5L20 20.5" stroke="black" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </li>
                            <li class="me-4">
                                <a href="" class="text-decoration-none label-dark fs-14 fw-400 lh-15">Sign In</a>
                            </li>
                            <li>
                                <button class="default-btn">Creator</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header >
            <section class="banner-section position-relative overflow-hidden">
                <div className='banner-img position-absolute blue-jacket-img'>
                    <img src="/images/blue-jacket-img.png" width={324} height={324} alt="Img" />
                </div>
                <div className='banner-img position-absolute yellow-skirt'>
                    <img src="/images/yellow-skirt.png" width={142} height={189} alt="Img" />
                </div>
                <div className='banner-img position-absolute black-joggers'>
                    <img src="/images/black-joggers.png" width={195} height={293} alt="Img" />
                </div>
                <div className='banner-img position-absolute dhoti-img'>
                    <img src="/images/dhoti-img.png" width={195} height={293} alt="Img" />
                </div>
                <div className='banner-img position-absolute gown-img'>
                    <img src="/images/gown-img.png" width={217} height={231} alt="Img" />
                </div>
                <div className='banner-img d-none d-md-block position-absolute parachute-img'>
                    <img src="/images/parachute-img.png" width={195} height={293} alt="Img" />
                </div>
                <div className='banner-img d-none d-md-block position-absolute brown-jacket-img'>
                    <img src="/images/brown-blur-jacket.png" width={165} height={326} alt="Img" />
                </div>
                <div className='banner-img d-none d-md-block position-absolute blur-denim-short'>
                    <img src="/images/blur-denim-short.png" width={131} height={196} alt="Img" />
                </div>
                <div className='banner-img position-absolute blur-brown-short'>
                    <img src="/images/blur-brown-short.png" width={115} height={172} alt="Img" />
                </div>
                <div className='banner-img d-none d-md-block position-absolute pink-shirt'>
                    <img src="/images/pink-shirt.png" width={103} height={103} alt="Img" />
                </div>
                <div className='banner-img d-none d-lg-block position-absolute yellow-blur-hat'>
                    <img src="/images/yellow-blur-hat.png" width={126} height={190} alt="Img" />
                </div>
                <div className='banner-img d-none d-lg-block position-absolute brown-blur-hoody'>
                    <img src="/images/brown-blur-hoody.png" width={87} height={118} alt="Img" />
                </div>
                <div className='banner-img d-none d-xl-block position-absolute white-blur-skirt'>
                    <img src="/images/white-blur-skirt.png" width={87} height={118} alt="Img" />
                </div>
                <div className='banner-img d-none d-md-block position-absolute black-blur-skirt'>
                    <img src="/images/black-blur-skirt.png" width={108} height={162} alt="Img" />
                </div>
                <div className='banner-img d-none d-xl-block position-absolute light-blur-top'>
                    <img src="/images/light-blur-top.png" width={148} height={198} alt="Img" />
                </div>
                <div className='banner-img d-none d-xl-block position-absolute brown-blur-hoody2'>
                    <img src="/images/brown-blur-hoody2.png" width={109} height={164} alt="Img" />
                </div>
                <div className='banner-img d-none d-lg-block position-absolute navy-top'>
                    <img src="/images/navy-top.png" width={128} height={175} alt="Img" />
                </div>

                <div class="h-100 d-flex align-items-center justify-content-center">
                    <div class="col-11 col-lg-8">
                        <div className='banner-text-wrapper'>
                            <h1 class="main-heading text-uppercase text-center mb-3">
                                The World's Shoppable <span class="label-primary font-Romie fw-400">AI Encyclopedia</span>. Designed
                                and Owned
                                by You.
                            </h1>
                            <button class="default-btn d-block mx-auto banner-btn">Join The Waitlist</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="imagine-section overflow-hidden">
                <div class="row justify-content-lg-between justify-content-center align-items-center">
                    <div class="col-md-11 col-lg-6 order-1 order-lg-0" data-aos="slide-right" data-aos-duration="1200">
                        <div class="pe-lg-5">
                            <h2 class="section-heading text-center text-lg-start mb-4">Imagine a world where anyone can design and launch a product in
                                minutes.</h2>
                        </div>
                        <div className='text-center text-lg-start content-text-wrapper'>
                            <p class="fs-20 fw-400 lh-32 mb-3 label-color1">
                                Fashion is a three trillion dollar industry. But it belongs to a few, a few who dictate what we
                                wear, while young creatives earn just a few thousand a month.
                            </p>
                            <p class="fs-20 fw-400 lh-32 mb-3 label-color1">
                                Fashion is a three trillion dollar industry. But it belongs to a few, a few who dictate what we
                                wear, while young creatives earn just a few thousand a month.
                            </p>
                            <p class="fs-20 fw-400 lh-32 mb-4 label-color1">
                                Fashion is a three trillion dollar industry. But it belongs to a few, a few who dictate what we
                                wear, while young creatives earn just a few thousand a month.
                            </p>
                            <h3 class="section-heading mb-1">Welcome to Sparkit.</h3>
                            <p class="fs-20 fw-400 lh-32 mb-4 label-color1">
                                The factory in your pocket. The future of fashion is ours.
                            </p>
                            <button class="default-btn d-block mx-auto mx-lg-0 banner-btn">CREATE / START NOW</button>
                        </div>
                    </div>
                    <div class="col-md-11 col-lg-5 order-0 order-lg-1 mb-5 mb-lg-0" data-aos="slide-left" data-aos-duration="1200">
                        <div class="imagine-video-wrapper">
                            <video
                                muted
                                autoPlay
                                loop
                                playsInline
                                controls>
                                <source src="/images/spark-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            <section class="welcome-section overflow-hidden">
                <div class="row justify-content-lg-between justify-content-center align-items-center">
                    <div class="col-md-11 col-lg-6 order-1 order-lg-0" data-aos="slide-right" data-aos-duration="1200">
                        <div className='text-center text-lg-start'>
                            <h2 class="section-heading mb-4">
                                What if 1 person could build the next billion dollar brand from home?
                                Welcome to Sparkit.
                            </h2>
                            <div class="content-wrapper content-text-wrapper">
                                <p class="fs-20 fw-400 lh-32 mb-4 label-color1">
                                    A factory in your pocket and a 100-person team one download away.
                                </p>
                                <p class="fs-20 fw-400 lh-32 mb-4 label-color1">
                                    The Fashion industry is an inspiring world of creativity. With 3 trillion dollars in value.
                                    Influential. Big. Powerful. That belongs to a few.<br />
                                    A few who dictate our consumer choices and create a system that makes us pay 20 times the
                                    value
                                    of a brand label.
                                </p>
                                <p class="fs-20 fw-400 lh-32 mb-4 label-color1">
                                    A system built in a way that the young, talented and creative won’t succeed. So, they give
                                    up
                                    and end up working for the industry.
                                </p>
                                <p class="fs-20 fw-400 lh-32 mb-4 label-color1">
                                    The current way of doing business creates up to 100 billion items of clothing half of which
                                    ends
                                    up in a landfill. Creating half a trillion dollars worth of overproduced, dead stock. Each
                                    year.
                                </p>
                                <p class="fs-20 fw-400 lh-32 mb-4 label-color1">
                                    Young and creative entrepreneurs need to raise funds build teams, convince factories to work
                                    with smaller volumes and manage minimum order quantities. Then as a result, manage the dead
                                    stock build the website, sales, marketing, logistics, product development, and prototyping
                                    quality control, packaging, trims, hard wear, and returns… Up to 90% of fashion start up
                                    brands
                                    fail due to the monopolistic nature of the industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-11 col-lg-5 order-0 order-lg-1 mb-5 mb-lg-0" data-aos="slide-left" data-aos-duration="1200">
                        <div class="text-center">
                            <img src="images/welcome-img.png" class="img-fluid d-block mx-auto" alt="Img" />
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer-section">
                <div class="row justify-content-lg-between justify-content-center align-items-center">
                    <div class="col-md-auto mb-3 mb-lg-0">
                        <ul class="ps-0 mb-0 d-flex justify-content-center justify-content-lg-start flex-wrap label-white" style={{ listStylePosition: 'inside' }}>
                            <li class="me-4">
                                <Link to="/term-conditions" class="text-decoration-none fs-16 fw-700 lh-34 label-white">Terms & Conditions</Link>
                            </li>
                            <li class="me-4">
                                <Link to="/privacy-policy" class="text-decoration-none fs-16 fw-700 lh-34 label-white">Privacy Policies </Link>
                            </li>
                            <li class="me-4">
                                <a href="" class="text-decoration-none fs-16 fw-700 lh-34 label-white">FAQ’s</a>
                            </li>
                            <li class="me-4">
                                <a href="" class="text-decoration-none fs-16 fw-700 lh-34 label-white">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-auto">
                        <p class="fs-16 fw-700 lh-34 label-white text-center mb-0">
                            © 2025Sparkit. All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function TermCondition() {
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
            <div class="cms-section">
                <div className='text-center text-lg-start'>
                    <div>
                        <h1 class="section-heading mb-3">SPAARKD – CREATOR TERMS & CONDITIONS</h1>
                    </div>
                    <div class="content-wrapper">
                        <p class="fs-20 fw-400 lh-32 mb-4 label-dark">
                            1. CREATOR TERMS AND CONDITIONS If you have been approved to become a Creator, the Creator Terms &
                            Conditions will apply in addition to the SPAARKD Terms and Conditions. To the extent there is an
                            inconsistency between these Terms and Conditions and the Creator Terms and Conditions, the Creator
                            Terms and Conditions shall prevail.
                        </p>
                        <p class="fs-20 fw-400 lh-32 mb-4 label-dark">
                            2. ABOUT THE SPAARKD STUDIO The Studio function of our application (the “Studio”) allows users to
                            access and utilize certain features to create their own designs and branding to be applied to
                            SPAARKD 's signature Products. SPAARKD will then market, promote and sell your Bespoke Products to
                            consumer customers on the Platform. Initially, access to these features will be limited to creators
                            who are invited by SPAARKD and is not yet available to all users of the Platform.
                        </p>
                        <p class="fs-20 fw-400 lh-32 mb-4 label-dark">
                            3. SUBSCRIPTION TO CREATOR TERMS By submitting a Registration Form, you offer to subscribe to these
                            Creator Terms. These terms and conditions and all documents referred to herein (“Creator Terms”)
                            shall apply to: • our provision of the Studio Services to you (“you”, “your” or “Creator”); and •
                            the licensing by you to us of your Designs.
                        </p>
                        <ul class="mb-5">
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.1. Please follow the on-screen prompts on the Platform to access the Studio and complete the
                                Registration Form to sign up for a Creator account.
                            </li>
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.2. Your completion of the Registration Form constitutes your offer to subscribe to the Studio
                                Services in accordance with these Creator Terms.
                            </li>
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.3. Please read these Creator Terms carefully and make sure that you understand them before
                                using the Platform or Services. Please note that by using the Services, you agree to be bound by
                                these Creator Terms and Conditions. If you do not accept these Creator Terms and Conditions, you
                                will not be able to use the Services and you should leave the Platform immediately. If you
                                continue to use the Platform or Services, we will take this as your acceptance of these Creator
                                Terms and Conditions.
                            </li>
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.4. Your registration for the Studio Services will only be deemed to have been accepted by
                                SPAARKD and a contract created when we have received your Registration Form and subsequently
                                grant you access to the Studio. This contract will commence on the date on which we grant you
                                access to the Studio and will continue unless and until terminated earlier by either party in
                                accordance with these Creator Terms.
                            </li>
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.5. These Creator Terms form part of the SPAARKD’s general Terms and Conditions (the “Terms and
                                Conditions”).
                            </li>
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.6. By agreeing to these Creator Terms, you agree to these Creator Terms together with the
                                Terms and Conditions and the Privacy Policy. No other terms are implied by trade, custom,
                                practice or course of dealing.
                            </li>
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.7. To the extent there is any inconsistency between the Terms and Conditions and these Creator
                                Terms, these Creator Terms shall prevail.
                            </li>
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.8. These Creator Terms are made only in the English language.
                            </li>
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.9. When we refer to "in writing" in these Creator Terms, this includes email.
                            </li>
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.10. You should print a copy of these Creator Terms or save them to your computer or device for
                                future reference.
                            </li>
                            <li class="fs-20 fw-400 lh-32 mb-4 label-dark">
                                3.11. Unless expressly stated otherwise, the meanings of all defined terms used in these Creator
                                Terms are detailed in Section 18.
                            </li>
                        </ul>
                        <p class="fs-20 fw-400 lh-32 mb-4 label-dark">
                            4. CHANGES TO THESE CREATOR TERMS We may, from time to time, change these Creator Terms to reflect
                            changes in law or best practice, or to deal with additional features which we introduce. We will
                            give you a notice of any change by sending you an email with details of the change and/or notifying
                            you of a change when you next access the Platform. If you do not accept the notified changes, you
                            will not be permitted to continue to use the Platform. Your acceptance of any updates to the Creator
                            Terms is given when you accept the Terms presented to you on the Platform for your review and
                            acceptance. If you do not accept any changes to the Creator Terms, you are free to terminate these
                            Creator Terms as laid out in Section 13.
                        </p>
                    </div>
                </div>
            </div>
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
                            © 2024Sparkit. All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

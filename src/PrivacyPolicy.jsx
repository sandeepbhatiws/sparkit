import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function PrivacyPolicy() {
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
                <div>
                    <div>
                        <h1 class="section-heading mb-3">SPAARKD – Privacy Policies</h1>
                    </div>
                    <div class="content-wrapper">
                        <div class="mb-4">
                            <h3 class="fs-20 fw-700 lh-40 mb-1 label-dark">1. Information We Collect</h3>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                We may collect the following types of information:
                            </p>
                            <ol style={{ listStyleType: 'lower-alpha' }} class="mb-0">
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark mb-4">
                                    Personal Information:
                                    <p class="mb-1">When you create an account or register as a Creator, we collect details such
                                        as:</p>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        <li>Name, email address, phone number, and profile information</li>
                                        <li>Payment details (through our third-party payment provider)</li>
                                        <li>Design-related data or uploads you create in the Studio</li>
                                    </ul>
                                </li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark mb-4">
                                    Technical Data:
                                    <ul style={{ listStyleType: 'disc' }}>
                                        <li>Device type, browser type, IP address, and usage logs</li>
                                        <li>Cookies and analytics data that help us improve platform performance</li>
                                    </ul>
                                </li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark mb-4">
                                    Design and Creative Data:
                                    <p class="mb-1">
                                        When using the Studio, any images, artwork, designs, or other creative content you
                                        upload or generate using AI tools are securely processed and stored for your use and for
                                        production of your designs.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div class="mb-4">
                            <h3 class="fs-20 fw-700 lh-40 mb-1 label-dark">2. How We Use Your Information</h3>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                We use your data to:
                            </p>
                            <ul style={{ listStyleType: 'disc' }} class="mb-0">
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Provide, personalize, and improve our Studio
                                    Services</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Process transactions, royalty payments, and
                                    creator agreements</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Communicate important updates, including feature
                                    changes or policy updates</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Maintain security, prevent fraud, and comply with
                                    legal obligations</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Analyze platform usage to enhance user experience
                                    and optimize performance</li>
                            </ul>
                        </div>
                        <div class="mb-4">
                            <h3 class="fs-20 fw-700 lh-40 mb-1 label-dark">3. Sharing Your Information</h3>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                We may share limited data only with:
                            </p>
                            <ul style={{ listStyleType: 'disc' }} class="mb-0">
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Third-party payment processors (e.g., Stripe) for
                                    royalty payments</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Manufacturing and logistics partners to fulfill
                                    product orders</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Marketing and analytics providers for improving
                                    platform performance</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Legal authorities, if required to comply with
                                    applicable law
                                </li>
                            </ul>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                We do not sell or rent your personal data to any third parties.</p>
                        </div>
                        <div class="mb-4">
                            <h3 class="fs-20 fw-700 lh-40 mb-1 label-dark">4. Data Retention</h3>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                We retain personal data only for as long as necessary to provide our services, comply with legal
                                requirements, and manage creator accounts. Upon termination of your Creator account, most data
                                (including designs and personal details) will be deleted, except where required by law or
                                retained for royalty or accounting records.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h3 class="fs-20 fw-700 lh-40 mb-1 label-dark">5. Data Protection and Security</h3>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                We implement industry-standard security measures to protect your data, including:
                            </p>
                            <ul style={{ listStyleType: 'disc' }} class="mb-0">
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Encrypted data transmission (SSL)</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Secure cloud storage with restricted access</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Regular audits and compliance checks</li>
                            </ul>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">Despite these measures, no online system is completely
                                secure, and we encourage you to take care
                                when sharing information online.</p>
                        </div>
                        <div class="mb-4">
                            <h3 class="fs-20 fw-700 lh-40 mb-1 label-dark">6. Your Rights</h3>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                Depending on your location, you may have the following rights under data protection laws (such
                                as the UK GDPR):
                            </p>
                            <ul style={{ listStyleType: 'disc' }} class="mb-0">
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Access and receive a copy of your data</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Request correction or deletion of your
                                    information</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Object to or restrict certain data processing
                                    activities</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">Withdraw consent at any time</li>
                            </ul>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">To exercise your rights, please contact us at
                                privacy@sparkit.ai.</p>
                        </div>
                        <div class="mb-4">
                            <h3 class="fs-20 fw-700 lh-40 mb-1 label-dark">7. Cookies</h3>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                We use cookies and similar technologies to enhance your browsing experience, analyze usage, and
                                improve our services. You can manage or disable cookies through your browser settings, though
                                this may affect platform functionality.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h3 class="fs-20 fw-700 lh-40 mb-1 label-dark">8. International Data Transfers</h3>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                As Sparkit operates globally, your data may be transferred to and processed in other countries
                                that may not have the same data protection laws. We ensure all transfers comply with applicable
                                data protection standards.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h3 class="fs-20 fw-700 lh-40 mb-1 label-dark">9. Updates to This Policy</h3>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                We may update this Privacy Policy periodically to reflect changes in law, technology, or our
                                practices. Any updates will be posted on this page, and significant changes will be communicated
                                via email or platform notifications.
                            </p>
                        </div>
                        <div>
                            <h3 class="fs-20 fw-700 lh-40 mb-1 label-dark">10. Contact Us</h3>
                            <p class="fs-20 fw-400 lh-40 mb-1 label-dark">
                                If you have any questions or concerns about this Privacy Policy or how your data is handled,
                                please contact:
                            </p>
                            <span class="d-block fs-20 fw-400 lh-40 mb-1 label-dark">Sparkit Data Protection Officer</span>
                            <ul class="list-unstyled mb-0">
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">📩 Email: privacy@sparkit.ai</li>
                                <li class="fs-20 fw-400 lh-40 mb-1 label-dark">🌐 Website: www.sparkit.ai</li>
                            </ul>
                        </div>
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

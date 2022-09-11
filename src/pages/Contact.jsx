import React from 'react';
import logo from '../images/logoBlack.svg'
import '../styles/Contact.css'
function Contact() {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <img className='logo-black' src={logo} alt='logo' />
                <div>
                    <p className="contact-details" >
                        <a href="tel:+91 9870940430">+91 9870940430</a>,
                        <a href="tel:+91 6395799898"> +91 6395799898</a>
                    </p>
                </div>
                <div>

                    <p className="contact-details " >
                        <a href="mailto:s.m.academy.up79@gmail.com">s.m.academy.up79@gmail.com</a>
                    </p>
                </div>


            </div>
            <div className="footer-center">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                    <li>
                        <a href="#admission">Admission</a>
                    </li>
                    <li>
                        <a href="#fee">Fee Structure</a>
                    </li>
                    <li>
                        <a href="#academics">Academics</a>
                    </li>
                    <li>
                        <a href="#disclosure">Mandatory Disclosure</a>
                    </li>
                </ul>
            </div>
            <div className="footer-right">
                <div>
                    <p>
                        <span>Bhadsan, Auraiya ,</span>
                        Uttar Pradesh (206120)
                    </p>
                    <div>
                        <iframe
                            title='school'
                            className='school-map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.973995383702!2d79.30281231502542!3d26.617280283255674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397603bf10f343e1%3A0x57c6990282e57dbf!2sS.M.Acadmy!5e0!3m2!1sen!2sin!4v1662722998837!5m2!1sen!2sin"
                            width={300}
                            height={200}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>

                </div>
            </div>
            <p className="footer-company-name">
                Designed and Developed by <a href="mailto:chiragb3101@gmail.com" className="footer-company-name" > Isha Paliwal</a> and <a href="mailto:chiragb3101@gmail.com" className="footer-company-name" > Chirag Bulchandani </a>
            </p>
        </footer>

    );
}

export default Contact;
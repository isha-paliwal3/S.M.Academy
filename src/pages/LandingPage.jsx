import React from 'react';
import Navbar from './Navbar'
import Contact from './Contact'
import { Button } from 'react-bootstrap';
import aboutVideo from '../images/aboutVideo.svg'
import curriculumLogo from '../images/curriculumLogo.svg'
import examLogo from '../images/examLogo.svg'
import activityLogo from '../images/activityLogo.svg'
import uniformLogo from '../images/uniformLogo.svg'
import g1 from '../images/g1.svg'
import g2 from '../images/g2.svg'
import g3 from '../images/g3.svg'
import g4 from '../images/g4.svg'
import g5 from '../images/g5.svg'
import g6 from '../images/g6.svg'
import '../styles/LandingPage.css'

function LandingPage() {
    return (
        <>
            <div className="landingPage-body">
                <div id="home">
                    <Navbar />
                    <p className='intro-para'>As part of God's plan for humanity, SM Academy strives to impart education to students irrespective of their sex, caste, creed, and religion.</p>
                    <a className='btn-blue' href="#contact">Contact Us</a>
                </div>
                <div id="about">
                    <div className="landingPage-about-container">
                        <div className="landingPage-about-video">
                            <img src={aboutVideo} alt="video" />
                        </div>
                        <div className="landingPage-about-content">
                            <div className="landingPage-about-title">
                                <h1>Shailendra Memorial Academy</h1>
                            </div>
                            <div className="landingPage-about-intro">
                                <p>A non-profit organization founded in memory of the Late Shailendra Singh was established to provide education for the poor in the village that had no access to quality education. For girls especially, the step was taken as their parents were hesitant to send them far from home for schooling because they were afraid.</p>
                            </div>
                            <div className='knowMore-btn'>
                                <Button>Know More</Button>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="academics">
                    <div className="landingPage-academics-container">
                        <div className="landingPage-academics-content verticalLine">
                            <div className="landingPage-academics-tile">
                                <h1>Academics</h1>
                            </div>
                            <div className="landingPage-academics-intro">
                                <p>S.M. Academy offers primary education from Kindergarten until eighth grade in English medium. In our school, we strictly adhere to the CBSE curriculum</p>
                            </div>
                            <div className="knowMore-btn">
                                <Button>Know More</Button>
                            </div>
                        </div>
                        <div className="landingPage-academics-info">
                            <div className="curriculum-info academy-card">
                                <img className="academy-card-logo" src={curriculumLogo} alt="curriculumLogo" />
                                <h3 className="academy-card-title">Curriculam</h3>
                                <p className="academy-card-desc">Learning objectives and syllabus is well versed.</p>
                            </div>
                            <div className="exam-info academy-card">
                                <img className="academy-card-logo" src={examLogo} alt="" />
                                <h3 className="academy-card-title">Examination</h3>
                                <p className="academy-card-desc">CBSE pattern is followed regarding all the examination procedures.</p>
                            </div>
                            <div className="uniform-info academy-card">
                                <img className="academy-card-logo" src={uniformLogo} alt="" />
                                <h3 className="academy-card-title">Uniform</h3>
                                <p className="academy-card-desc">Wearing prescribed uniform is mandatory for all students..</p>
                            </div>
                            <div className="activities-info academy-card">
                                <img className="academy-card-logo" src={activityLogo} alt="" />
                                <h3 className="academy-card-title">Activities</h3>
                                <p className="academy-card-desc">Physical development is akey part in a student's growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="gallery">
                    <div className="gallery-title">
                        <h1>Gallery</h1>
                    </div>
                    <div className="gallery-wrapper">
                        <div className="gallery-card">
                            <img src={g1} alt="" />
                        </div>
                        <div className="gallery-card hide">
                            <img src={g2} alt="" />
                        </div>
                        <div className="gallery-card hide">
                            <img src={g3} alt="" />
                        </div>
                        <div className="gallery-card">
                            <img src={g4} alt="" />
                        </div>
                        <div className="gallery-card">
                            <img src={g5} alt="" />
                        </div>
                        <div className="gallery-card">
                            <img src={g6} alt="" />
                        </div>
                    </div>
                    <div className="knowMore-btn gal-btn" style={{ paddingLeft: '32em', marginTop: '13%'}}>
                        <Button>View Gallery</Button>
                    </div>
                </div>
                <div id="contact"><Contact /></div>
            </div>
        </>
    );
}

export default LandingPage;
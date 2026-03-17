import React from 'react';

const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-wrapper">
                
                {/* Left Column */}
                <div className="about-left">
                    <div className="about-header">
                        <span className="about-header-text">ABOUT ME</span>
                        <div className="about-horizontal-line"></div>
                    </div>

                    <h2 className="about-title">
                        <span className="white-italic">Crafting</span><br />
                        <span className="white-italic">structured</span><br />
                        <span className="red-italic">digital</span><br />
                        <span className="white-italic">spaces</span><span className="dot">.</span>
                    </h2>

                    <p className="about-description">
                        Student of Interactive Media Design. I actively practice web
                        design, UX/UI, and 3D modeling. I am always open to new tools
                        and methodologies, eager to grow, learn, and contribute to real-
                        world projects.
                    </p>

                    <a href="#" className="about-download-btn">
                        DOWNLOAD CV
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>

                    <div className="about-residence">
                        <div className="residence-header">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                                <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#D41121"/>
                            </svg>
                            <span className="residence-label">RESIDENCE</span>
                        </div>
                        <div className="residence-location">Belgrade, Serbia</div>
                        <div className="residence-timezone">CENTRAL EUROPEAN TIME (GMT+1)</div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="about-right">
                    
                    {/* Technical Arsenal */}
                    <div className="about-header technical-header">
                        <div className="about-horizontal-line right-line"></div>
                        <span className="about-header-text">TECHNICAL ARSENAL</span>
                    </div>

                    <div className="technical-grid">
                        <div className="tech-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
                                <path d="M11.25 25L0 18.75V6.25L11.25 0L22.5 6.25V18.75L11.25 25ZM7.625 9.0625C8.10417 8.5625 8.65625 8.17708 9.28125 7.90625C9.90625 7.63542 10.5625 7.5 11.25 7.5C11.9375 7.5 12.5938 7.63542 13.2188 7.90625C13.8438 8.17708 14.3958 8.5625 14.875 9.0625L18.625 6.96875L11.25 2.875L3.875 6.96875L7.625 9.0625ZM10 21.4375V17.3438C8.875 17.0521 7.96875 16.4583 7.28125 15.5625C6.59375 14.6667 6.25 13.6458 6.25 12.5C6.25 12.2708 6.26042 12.0573 6.28125 11.8594C6.30208 11.6615 6.34375 11.4583 6.40625 11.25L2.5 9.0625V17.2812L10 21.4375ZM11.25 15C11.9375 15 12.526 14.7552 13.0156 14.2656C13.5052 13.776 13.75 13.1875 13.75 12.5C13.75 11.8125 13.5052 11.224 13.0156 10.7344C12.526 10.2448 11.9375 10 11.25 10C10.5625 10 9.97396 10.2448 9.48438 10.7344C8.99479 11.224 8.75 11.8125 8.75 12.5C8.75 13.1875 8.99479 13.776 9.48438 14.2656C9.97396 14.7552 10.5625 15 11.25 15ZM12.5 21.4375L20 17.2812V9.0625L16.0938 11.25C16.1562 11.4583 16.1979 11.6615 16.2188 11.8594C16.2396 12.0573 16.25 12.2708 16.25 12.5C16.25 13.6458 15.9062 14.6667 15.2188 15.5625C14.5312 16.4583 13.625 17.0521 12.5 17.3438V21.4375Z" fill="#D41121"/>
                            </svg>
                            <span className="tech-type">DESIGN</span>
                            <span className="tech-name">Figma</span>
                        </div>
                        <div className="tech-item">
                            {/* Placeholder for Raster Icon */}
                            <svg width="23" height="25" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                            <span className="tech-type">RASTER</span>
                            <span className="tech-name">Adobe Photoshop</span>
                        </div>
                        <div className="tech-item">
                            {/* Placeholder for Vector Icon */}
                            <svg width="23" height="25" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                            <span className="tech-type">VECTOR</span>
                            <span className="tech-name">Adobe Illustrator</span>
                        </div>
                        <div className="tech-item">
                            {/* Placeholder for Motion Icon */}
                            <svg width="23" height="25" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                            <span className="tech-type">MOTION</span>
                            <span className="tech-name">After Effects</span>
                        </div>
                        <div className="tech-item">
                            {/* Placeholder for Visualization Icon */}
                            <svg width="23" height="25" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                            <span className="tech-type">VISUALIZATION</span>
                            <span className="tech-name">3ds Max</span>
                        </div>
                        <div className="tech-item">
                            {/* Placeholder for Production Icon */}
                            <svg width="23" height="25" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <span className="tech-type">PRODUCTION</span>
                            <span className="tech-name">Autodesk Maya</span>
                        </div>
                        <div className="tech-item">
                            {/* Placeholder for Engine Icon */}
                            <svg width="23" height="25" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <span className="tech-type">ENGINE</span>
                            <span className="tech-name">Unity 3D</span>
                        </div>
                        <div className="tech-item">
                            {/* Placeholder for Unreal Engine Icon */}
                            <svg width="23" height="25" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2"><line x1="2" y1="20" x2="2" y2="20"></line><line x1="7" y1="20" x2="7" y2="20"></line><line x1="12" y1="20" x2="12" y2="20"></line><line x1="17" y1="20" x2="17" y2="20"></line><line x1="22" y1="20" x2="22" y2="20"></line><polyline points="4 17 8 13 12 17 16 13 20 17"></polyline><path d="M12 4v7"></path><path d="M8 8l4-4 4 4"></path></svg>
                            <span className="tech-type">ENGINE</span>
                            <span className="tech-name">Unreal Engine 5</span>
                        </div>
                    </div>

                    {/* Core Competencies */}
                    <div className="about-header competencies-header">
                        <div className="about-horizontal-line"></div>
                        <span className="about-header-text">CORE COMPETENCIES</span>
                    </div>

                    <div className="competencies-list">
                        <div className="competency-item">
                            <span className="comp-name">Real-Time Environments</span>
                            <div className="comp-dashed-line"></div>
                            <span className="comp-status active">ACTIVE</span>
                        </div>
                        <div className="competency-item">
                            <span className="comp-name">3D Modeling & Assets</span>
                            <div className="comp-dashed-line"></div>
                            <span className="comp-status active">ACTIVE</span>
                        </div>
                        <div className="competency-item">
                            <span className="comp-name">Digital Collage & Layouts</span>
                            <div className="comp-dashed-line"></div>
                            <span className="comp-status practice">PRACTICE</span>
                        </div>
                        <div className="competency-item">
                            <span className="comp-name">Photorealistic Rendering</span>
                            <div className="comp-dashed-line"></div>
                            <span className="comp-status active">ACTIVE</span>
                        </div>
                        <div className="competency-item">
                            <span className="comp-name">UI/UX Prototyping</span>
                            <div className="comp-dashed-line"></div>
                            <span className="comp-status practice">PRACTICE</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;

import React from 'react';

const WorkAndProjects = () => {
    return (
        <section className="work-projects" id="work">
            <div className="work-projects__container">
                
                <div className="work-projects__left">
                    <span className="work-projects__subtitle">Creative Portfolio</span>
                    <h2 className="work-projects__title">
                        Work &<br />
                        Projects<span className="dot" style={{ color: '#D41121' }}>.</span>
                    </h2>
                    <div className="work-projects__desc-container">
                        <p className="work-projects__description">
                            A curated selection of digital experiences, visual narratives, and spatial designs crafted with precision and passion.
                        </p>
                    </div>
                </div>

                <div className="work-projects__right">
                    <span className="work-projects__subtitle">LINKS</span>
                    <div className="work-projects__links-list">
                        <a href="https://www.figma.com/team_invite/redeem/Wky4c4SyXvAUl8StaiZF9M?t=hsknPjMvQIhMerMw-21" target="_blank" rel="noreferrer" className="work-projects__link">
                            Figma
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        <a href="https://drive.google.com/drive/folders/1il0-7oiN-6tBMsUvC-UbJ65duF81Zdqf?usp=sharing" target="_blank" rel="noreferrer" className="work-projects__link">
                            Google Drive
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WorkAndProjects;
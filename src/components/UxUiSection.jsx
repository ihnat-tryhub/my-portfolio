import React from 'react';

const UxUiSection = () => {
    return (
        <section className="uxui-section" id="uxui">
            <div className="uxui-wrapper">
                
                <div className="uxui-header">
                    <span className="uxui-title-text">01 UX/UI</span>
                    <div className="uxui-line"></div>
                </div>

                <div className="uxui-container">
                    
                    <div className="uxui-item">
                        <img src="/Ui/Mood Tracker.png" alt="Mood Tracker" className="uxui-image" />
                        <h3 className="uxui-item-title">Mood Tracker</h3>
                        <p className="uxui-item-desc">DAILY EMOTION LOGGING</p>
                    </div>
                    
                    <div className="uxui-item">
                        <img src="/Ui/Mental Wellness.png" alt="Mental Wellness" className="uxui-image" />
                        <h3 className="uxui-item-title">Mental Wellness</h3>
                        <p className="uxui-item-desc">PERSONALIZED SELF-CARE TIPS</p>
                    </div>

                    <div className="uxui-item">
                        <img src="/Ui/Emotional Analytics.png" alt="Emotional Analytics" className="uxui-image" />
                        <h3 className="uxui-item-title">Emotional Analytics</h3>
                        <p className="uxui-item-desc">DATA-DRIVEN MOOD PATTERNS & STATS</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UxUiSection;

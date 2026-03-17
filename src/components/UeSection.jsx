import React from 'react';

const UeSection = () => {
    return (
        <section className="ue-section" id="ue5">
            <div className="ue-wrapper">
                
                <div className="ue-header">
                    <span className="ue-title-text">06 UNREAL ENGINE 5</span>
                    <div className="ue-line"></div>
                </div>

                <div className="ue-grid">
                    
                    <div className="ue-card">
                        <div className="ue-video-wrapper">
                            <video 
                                src="/Unreal Engine/DesktopRunner.mp4" 
                                className="ue-video" 
                                controls
                            />
                        </div>
                        <h3 className="ue-card-title">Desktop Runner</h3>
                    </div>

                    <div className="ue-card">
                        <div className="ue-video-wrapper">
                            <video 
                                src="/Unreal Engine/Environment.mp4" 
                                className="ue-video" 
                                controls
                            />
                        </div>
                        <h3 className="ue-card-title">Environment</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UeSection;

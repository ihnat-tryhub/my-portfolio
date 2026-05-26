import React, { useState } from 'react';
import ImageModal from './ImageModal';

const UxUiSection = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (src) => setModalImage(src);
    const closeModal = () => setModalImage(null);

    return (
        <section className="uxui-section" id="uxui">
            <div className="uxui-wrapper">
                
                <div className="uxui-header">
                    <span className="uxui-title-text">01 UX/UI</span>
                    <div className="uxui-line"></div>
                </div>

                <div className="uxui-container">
                    
                    <div className="uxui-item">
                        <img src="/Ui/Mood Tracker.png" alt="Mood Tracker" className="uxui-image cursor-zoom" onClick={() => openModal("/Ui/Mood Tracker.png")} />
                        <h3 className="uxui-item-title">Mood Tracker</h3>
                        <p className="uxui-item-desc">DAILY EMOTION LOGGING</p>
                    </div>
                    
                    <div className="uxui-item">
                        <img src="/Ui/Mental Wellness.png" alt="Mental Wellness" className="uxui-image cursor-zoom" onClick={() => openModal("/Ui/Mental Wellness.png")} />
                        <h3 className="uxui-item-title">Mental Wellness</h3>
                        <p className="uxui-item-desc">PERSONALIZED SELF-CARE TIPS</p>
                    </div>

                    <div className="uxui-item">
                        <img src="/Ui/Emotional Analytics.png" alt="Emotional Analytics" className="uxui-image cursor-zoom" onClick={() => openModal("/Ui/Emotional Analytics.png")} />
                        <h3 className="uxui-item-title">Emotional Analytics</h3>
                        <p className="uxui-item-desc">DATA-DRIVEN MOOD PATTERNS & STATS</p>
                    </div>

                </div>
            </div>
            
            <ImageModal 
                isOpen={!!modalImage} 
                src={modalImage} 
                onClose={closeModal} 
            />
        </section>
    );
};

export default UxUiSection;

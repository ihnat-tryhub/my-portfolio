import React, { useState } from 'react';
import ImageModal from './ImageModal';

const uxuiData = [
    { src: "/Ui/Mood Tracker.png", title: "Mood Tracker", desc: "DAILY EMOTION LOGGING" },
    { src: "/Ui/Mental Wellness.png", title: "Mental Wellness", desc: "PERSONALIZED SELF-CARE TIPS" },
    { src: "/Ui/Emotional Analytics.png", title: "Emotional Analytics", desc: "DATA-DRIVEN MOOD PATTERNS & STATS" }
];

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
                    {uxuiData.map((item, index) => (
                        <div className="uxui-item" key={index}>
                            <img src={item.src} alt={item.title} className="uxui-image cursor-zoom" onClick={() => openModal(item.src)} />
                            <h3 className="uxui-item-title">{item.title}</h3>
                            <p className="uxui-item-desc">{item.desc}</p>
                        </div>
                    ))}
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

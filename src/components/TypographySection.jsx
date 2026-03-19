import React, { useState } from 'react';
import ImageModal from './ImageModal';

const TypographySection = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (src) => setModalImage(src);
    const closeModal = () => setModalImage(null);

    return (
        <section className="typography-section" id="typography">
            <div className="typography-wrapper">
                
                <div className="uxui-header">
                    <span className="uxui-title-text">02 TYPOGRAPHY</span>
                    <div className="uxui-line"></div>
                </div>

                <div className="typography-cards-row">
                    
                    <div className="typography-card">
                        <img src="/Typography/Dynamic Split.png" alt="Dynamic Split" className="typography-card-img cursor-zoom" onClick={() => openModal("/Typography/Dynamic Split.png")} />
                        <div className="typography-text-box">
                            <h3 className="typography-card-title">Dynamic Split</h3>
                            <p className="typography-card-desc">TYPE HIERARCHY</p>
                        </div>
                    </div>
                    
                    <div className="typography-card">
                        <img src="/Typography/Tipotrip.png" alt="Tipotrip" className="typography-card-img cursor-zoom" onClick={() => openModal("/Typography/Tipotrip.png")} />
                        <div className="typography-text-box">
                            <h3 className="typography-card-title">Tipotrip</h3>
                            <p className="typography-card-desc">CUSTOM TYPOGRAPHY</p>
                        </div>
                    </div>

                </div>

                <div className="typography-modernist-img-container">
                    <img src="/Typography/The Modernist.png" alt="The Modernist" className="typography-modernist-img cursor-zoom" onClick={() => openModal("/Typography/The Modernist.png")} />

                    <div className="typography-text-box">
                        <h3 className="typography-card-title">The Modernist</h3>
                        <p className="typography-card-desc">MAGAZINE SPREAD</p>
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

export default TypographySection;

import React, { useState } from 'react';
import ImageModal from './ImageModal';

const CollagesSection = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (src) => setModalImage(src);
    const closeModal = () => setModalImage(null);

    return (
        <section className="collages-section" id="collages">
            <div className="collages-wrapper">
                
                <div className="collages-header">
                    <span className="collages-title-text">03 COLLAGES & POSTERS</span>
                    <div className="collages-line"></div>
                </div>

                <div className="collages-grid">
                    
                    <div className="collage-card">
                        <div className="collage-img-wrapper cursor-zoom" onClick={() => openModal("/CollagesPosters/Digital Vandalism.png")}>
                            <img src="/CollagesPosters/Digital Vandalism.png" alt="Digital Vandalism" className="collage-img" />
                        </div>
                        <h3 className="collage-card-title">Digital Vandalism</h3>
                    </div>

                    <div className="collage-card">
                        <div className="collage-img-wrapper cursor-zoom" onClick={() => openModal("/CollagesPosters/Neo Bauhaus.png")}>
                            <img src="/CollagesPosters/Neo Bauhaus.png" alt="Neo Bauhaus" className="collage-img" />
                        </div>
                        <h3 className="collage-card-title">Neo Bauhaus</h3>
                    </div>

                    <div className="collage-card tall-collage">
                        <div className="collage-img-wrapper cursor-zoom" onClick={() => openModal("/CollagesPosters/Concrete Utopia.png")}>
                            <img src="/CollagesPosters/Concrete Utopia.png" alt="Concrete Utopia" className="collage-img" />
                        </div>
                        <h3 className="collage-card-title">Concrete Utopia</h3>
                    </div>

                    <div className="collage-card tall-collage">
                        <div className="collage-img-wrapper cursor-zoom" onClick={() => openModal("/CollagesPosters/Brutalism.png")}>
                            <img src="/CollagesPosters/Brutalism.png" alt="Solar Brutalism" className="collage-img" />
                        </div>
                        <h3 className="collage-card-title">Solar Brutalism</h3>
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

export default CollagesSection;

import React, { useState } from 'react';
import ImageModal from './ImageModal';

const PhotosSection = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (src) => setModalImage(src);
    const closeModal = () => setModalImage(null);

    return (
        <section className="photos-section" id="photos">
            <div className="photos-wrapper">
                
                <div className="photos-header">
                    <span className="photos-title-text">05 PHOTOS</span>
                    <div className="photos-line"></div>
                </div>

                <div className="photos-grid">
                    
                    <div className="photos-card">
                        <div className="photos-img-wrapper cursor-zoom" onClick={() => openModal("/Photos/Monochrome Geometry.jpg")}>
                            <img src="/Photos/Monochrome Geometry.jpg" alt="Monochrome Geometry" className="photos-img" />
                        </div>
                        <h3 className="photos-card-title">Monochrome Geometry</h3>
                    </div>

                    <div className="photos-card">
                        <div className="photos-img-wrapper cursor-zoom" onClick={() => openModal("/Photos/Reaching for the Sky Soviet Brutalism.jpg")}>
                            <img src="/Photos/Reaching for the Sky Soviet Brutalism.jpg" alt="Reaching for the Sky Soviet Brutalism" className="photos-img" />
                        </div>
                        <h3 className="photos-card-title">Reaching for the Sky Soviet Brutalism</h3>
                    </div>

                    <div className="photos-card">
                        <div className="photos-img-wrapper cursor-zoom" onClick={() => openModal("/Photos/The Quiet Echoes of Autumn.jpg")}>
                            <img src="/Photos/The Quiet Echoes of Autumn.jpg" alt="The Quiet Echoes of Autumn" className="photos-img" />
                        </div>
                        <h3 className="photos-card-title">The Quiet Echoes of Autumn</h3>
                    </div>

                    <div className="photos-card">
                        <div className="photos-img-wrapper cursor-zoom" onClick={() => openModal("/Photos/Whispers of a Stray.jpg")}>
                            <img src="/Photos/Whispers of a Stray.jpg" alt="Whispers of a Stray" className="photos-img" />
                        </div>
                        <h3 className="photos-card-title">Whispers of a Stray</h3>
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

export default PhotosSection;

import React, { useState } from 'react';
import ImageModal from './ImageModal';

const photosData = [
    { src: "/Photos/Monochrome Geometry.jpg", title: "Monochrome Geometry" },
    { src: "/Photos/Reaching for the Sky Soviet Brutalism.jpg", title: "Reaching for the Sky Soviet Brutalism" },
    { src: "/Photos/The Quiet Echoes of Autumn.jpg", title: "The Quiet Echoes of Autumn" },
    { src: "/Photos/Whispers of a Stray.jpg", title: "Whispers of a Stray" }
];

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
                    {photosData.map((item, index) => (
                        <div className="photos-card" key={index}>
                            <div className="photos-img-wrapper cursor-zoom" onClick={() => openModal(item.src)}>
                                <img src={item.src} alt={item.title} className="photos-img" />
                            </div>
                            <h3 className="photos-card-title">{item.title}</h3>
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

export default PhotosSection;

import React, { useState } from 'react';
import ImageModal from './ImageModal';

const collagesData = [
    { src: "/CollagesPosters/Digital Vandalism.png", title: "Digital Vandalism" },
    { src: "/CollagesPosters/Neo Bauhaus.png", title: "Neo Bauhaus" },
    { src: "/CollagesPosters/Concrete Utopia.png", title: "Concrete Utopia", isTall: true },
    { src: "/CollagesPosters/Brutalism.png", title: "Solar Brutalism", isTall: true }
];

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
                    {collagesData.map((item, index) => (
                        <div className={`collage-card ${item.isTall ? 'tall-collage' : ''}`} key={index}>
                            <div className="collage-img-wrapper cursor-zoom" onClick={() => openModal(item.src)}>
                                <img src={item.src} alt={item.title} className="collage-img" />
                            </div>
                            <h3 className="collage-card-title">{item.title}</h3>
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

export default CollagesSection;

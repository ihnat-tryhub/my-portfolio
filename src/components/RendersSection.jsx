import React, { useState } from 'react';
import ImageModal from './ImageModal';

const rendersData = [
    { src: "/3D Renders/Chrome Seraphim.jpg", title: "Chrome Seraphim" },
    { src: "/3D Renders/Onyx Equine with Core.jpg", title: "Onyx Equine with Core" },
    { src: "/3D Renders/The Quiet Monument.jpg", title: "The Quiet Monument" },
    { src: "/3D Renders/Aurora Vesta.jpg", title: "Aurora Vesta" }
];

const RendersSection = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (src) => setModalImage(src);
    const closeModal = () => setModalImage(null);

    return (
        <section className="renders-section" id="renders">
            <div className="renders-wrapper">
                
                <div className="renders-header">
                    <span className="renders-title-text">04 3D RENDERS</span>
                    <div className="renders-line"></div>
                </div>

                <div className="renders-grid">
                    {rendersData.map((item, index) => (
                        <div className="renders-card" key={index}>
                            <div className="renders-img-wrapper cursor-zoom" onClick={() => openModal(item.src)}>
                                <img src={item.src} alt={item.title} className="renders-img" />
                            </div>
                            <h3 className="renders-card-title">{item.title}</h3>
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

export default RendersSection;

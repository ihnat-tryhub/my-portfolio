import React, { useState } from 'react';
import ImageModal from './ImageModal';

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
                    
                    <div className="renders-card">
                        <div className="renders-img-wrapper cursor-zoom" onClick={() => openModal("/3D Renders/Chrome Seraphim.png")}>
                            <img src="/3D Renders/Chrome Seraphim.png" alt="Chrome Seraphim" className="renders-img" />
                        </div>
                        <h3 className="renders-card-title">Chrome Seraphim</h3>
                    </div>

                    <div className="renders-card">
                        <div className="renders-img-wrapper cursor-zoom" onClick={() => openModal("/3D Renders/Onyx Equine with Core.png")}>
                            <img src="/3D Renders/Onyx Equine with Core.png" alt="Onyx Equine with Core" className="renders-img" />
                        </div>
                        <h3 className="renders-card-title">Onyx Equine with Core</h3>
                    </div>

                    <div className="renders-card">
                        <div className="renders-img-wrapper cursor-zoom" onClick={() => openModal("/3D Renders/The Quiet Monument.png")}>
                            <img src="/3D Renders/The Quiet Monument.png" alt="The Quiet Monument" className="renders-img" />
                        </div>
                        <h3 className="renders-card-title">The Quiet Monument</h3>
                    </div>

                    <div className="renders-card">
                        <div className="renders-img-wrapper cursor-zoom" onClick={() => openModal("/3D Renders/Aurora Vesta.png")}>
                            <img src="/3D Renders/Aurora Vesta.png" alt="Aurora Vesta" className="renders-img" />
                        </div>
                        <h3 className="renders-card-title">Aurora Vesta</h3>
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

export default RendersSection;

import React from 'react';

const PhotosSection = () => {
    return (
        <section className="photos-section" id="photos">
            <div className="photos-wrapper">
                
                <div className="photos-header">
                    <span className="photos-title-text">05 PHOTOS</span>
                    <div className="photos-line"></div>
                </div>

                <div className="photos-grid">
                    
                    <div className="photos-card">
                        <div className="photos-img-wrapper">
                            <img src="/Photos/Monochrome Geometry.png" alt="Monochrome Geometry" className="photos-img" />
                        </div>
                        <h3 className="photos-card-title">Monochrome Geometry</h3>
                    </div>

                    <div className="photos-card">
                        <div className="photos-img-wrapper">
                            <img src="/Photos/Reaching for the Sky Soviet Brutalism.png" alt="Reaching for the Sky Soviet Brutalism" className="photos-img" />
                        </div>
                        <h3 className="photos-card-title">Reaching for the Sky Soviet Brutalism</h3>
                    </div>

                    <div className="photos-card">
                        <div className="photos-img-wrapper">
                            <img src="/Photos/The Quiet Echoes of Autumn.png" alt="The Quiet Echoes of Autumn" className="photos-img" />
                        </div>
                        <h3 className="photos-card-title">The Quiet Echoes of Autumn</h3>
                    </div>

                    <div className="photos-card">
                        <div className="photos-img-wrapper">
                            <img src="/Photos/Whispers of a Stray.png" alt="Whispers of a Stray" className="photos-img" />
                        </div>
                        <h3 className="photos-card-title">Whispers of a Stray</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PhotosSection;

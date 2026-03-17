import React from 'react';

const CollagesSection = () => {
    return (
        <section className="collages-section" id="collages">
            <div className="collages-wrapper">
                
                <div className="collages-header">
                    <span className="collages-title-text">03 COLLAGES & POSTERS</span>
                    <div className="collages-line"></div>
                </div>

                <div className="collages-grid">
                    
                    <div className="collage-card">
                        <div className="collage-img-wrapper">
                            <img src="/CollagesPosters/Digital Vandalism.png" alt="Digital Vandalism" className="collage-img" />
                        </div>
                        <h3 className="collage-card-title">Digital Vandalism</h3>
                    </div>

                    <div className="collage-card">
                        <div className="collage-img-wrapper">
                            <img src="/CollagesPosters/Neo Bauhaus.png" alt="Neo Bauhaus" className="collage-img" />
                        </div>
                        <h3 className="collage-card-title">Neo Bauhaus</h3>
                    </div>

                    <div className="collage-card">
                        <div className="collage-img-wrapper">
                            <img src="/CollagesPosters/Concrete Utopia.png" alt="Concrete Utopia" className="collage-img" />
                        </div>
                        <h3 className="collage-card-title">Concrete Utopia</h3>
                    </div>

                    <div className="collage-card">
                        <div className="collage-img-wrapper">
                            <img src="/CollagesPosters/Brutalism.png" alt="Solar Brutalism" className="collage-img" />
                        </div>
                        <h3 className="collage-card-title">Solar Brutalism</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CollagesSection;

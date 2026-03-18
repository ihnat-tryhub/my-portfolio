import Hero3D from './Hero3D';

const Mainpage = () => {
  return (
    <main className="hero" id="home">
        <Hero3D />
        <div className="hero__content" style={{ zIndex: 1, position: 'relative' }}>
          <h1 className="hero__title">
            Interactive<br />Media<br />Designer<span className="dot">.</span>
          </h1>

          <p className="hero__description">
            Bridging the gap between aesthetic visual design and<br />spatial 3D
            experiences.
          </p>

          <div className="hero__meta">
            <div className="meta-item">
              <span className="meta-label">SPECIALIZATION</span>
              <span className="meta-value">UX/UI • WEBGL • 3D</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">LOCATION</span>
              <span className="meta-value">BELGRADE / REMOTE</span>
            </div>
          </div>
        </div>

        <div className="scroll-explore">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>
      </main>
  )
}

export default Mainpage
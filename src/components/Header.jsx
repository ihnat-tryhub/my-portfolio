import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('work');

  useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -70% 0px', // Trigger when section passes the top 30% of viewport
        threshold: 0,
    };

    const workSections = ['work', 'uxui', 'typography', 'collages', 'renders', 'photos', 'ue5'];

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                
                if (workSections.includes(id)) {
                    setActiveTab('work');
                } else if (id === 'about') {
                    setActiveTab('about');
                } else if (id === 'contact') {
                    setActiveTab('contact');
                } else if (id === 'home') {
                    setActiveTab(''); // Remove active link on the very top home screen
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    setTimeout(() => {
        const sectionsToObserve = ['home', ...workSections, 'about', 'contact'];
        sectionsToObserve.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="bold-text">KSENIJA</span><br />
        KRIUKOVA<span className="dot">.</span>
      </a>

      <nav className="nav">
        <ul className="nav__list">
          <li><a href="#work" className={`nav__link ${activeTab === 'work' ? 'active' : ''}`}>WORK</a></li>
          <li><a href="#about" className={`nav__link ${activeTab === 'about' ? 'active' : ''}`}>ABOUT</a></li>
          <li><a href="#contact" className={`nav__link ${activeTab === 'contact' ? 'active' : ''}`}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

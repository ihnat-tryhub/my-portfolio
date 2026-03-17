import React, { useState, useEffect } from 'react';
import './SideNav.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work & Projects' },
  { id: 'uxui', label: '01 UX/UI' },
  { id: 'typography', label: '02 Typography' },
  { id: 'collages', label: '03 Collages & Posters' },
  { id: 'renders', label: '04 3D Renders' },
  { id: 'photos', label: '05 Photos' },
  { id: 'ue5', label: '06 Unreal Engine 5' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

const SideNav = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3, // Trigger when 30% of the element is visible
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // A slight delay ensures all components are mounted before observing
        setTimeout(() => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.observe(element);
                }
            });
        }, 100);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="side-nav">
            <div className="side-nav-dots">
                {sections.map((section) => (
                    <div key={section.id} className="side-nav-item">
                        <span className={`side-nav-label ${activeSection === section.id ? 'active' : ''}`}>
                            {section.label}
                        </span>
                        <a 
                            href={`#${section.id}`} 
                            className={`side-nav-dot ${activeSection === section.id ? 'active' : ''}`}
                            aria-label={`Scroll to ${section.label}`}
                        ></a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideNav;

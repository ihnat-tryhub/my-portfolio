import React, { useState, useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ isOpen, src, alt, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) setIsClosing(false);
    }, [isOpen]);

    const triggerClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') triggerClose();
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    if (!isOpen && !isClosing) return null;

    return (
        <div className={`modal-overlay ${isClosing ? 'closing-overlay' : ''}`} onClick={triggerClose}>
            <div className={`modal-content ${isClosing ? 'closing-content' : ''}`} onClick={e => e.stopPropagation()}>
                <img src={src} alt={alt || "Full screen image"} className="modal-img" />
                <button className="modal-close-btn" onClick={triggerClose} aria-label="Close modal">
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ImageModal;

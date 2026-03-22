import React, { useState } from 'react';

const ContactSection = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        
        const formData = new FormData(e.target);
        
        // Replace with your Web3Forms access key
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            }).then(res => res.json());

            if (res.success) {
                setStatus("Message sent successfully!");
                e.target.reset();
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again.");
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-wrapper">
                
                {/* Header */}
                <div className="contact-header">
                    <span className="contact-subtitle">CONTACT</span>
                    <h2 className="contact-title">
                        <span className="white-italic">Let's </span>
                        <span className="white-italic">Connect</span>
                        <span className="dot">.</span>
                    </h2>
                </div>

                <div className="contact-content-container">
                    
                    {/* Left Column - Links */}
                    <div className="contact-links">
                        <a href="tel:+381611512369" className="contact-link-card">
                            <div className="contact-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="contact-info">
                                <span className="contact-label">PHONE</span>
                                <span className="contact-value">+381 61 151 2369</span>
                            </div>
                            <div className="contact-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </a>

                        <a href="mailto:ksenijakriukova@gmail.com" className="contact-link-card">
                            <div className="contact-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                            </div>
                            <div className="contact-info">
                                <span className="contact-label">EMAIL</span>
                                <span className="contact-value">ksenijakriukova@gmail.com</span>
                            </div>
                            <div className="contact-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </a>

                        <a href="https://t.me/fyism" className="contact-link-card">
                            <div className="contact-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </div>
                            <div className="contact-info">
                                <span className="contact-label">TELEGRAM</span>
                                <span className="contact-value">@fyism</span>
                            </div>
                            <div className="contact-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/ksenija-interactive" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                            <div className="contact-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </div>
                            <div className="contact-info">
                                <span className="contact-label">LINKEDIN</span>
                                <span className="contact-value">/ksenija-kriukova</span>
                            </div>
                            <div className="contact-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </a>

                        <a href="https://artstation.com/ncspbchh9" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                            <div className="contact-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D41121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                            </div>
                            <div className="contact-info">
                                <span className="contact-label">ARTSTATION</span>
                                <span className="contact-value">/ncspbchh9</span>
                            </div>
                            <div className="contact-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </a>
                    </div>

                    {/* Right Column - Form */}
                    <form className="contact-form-container" onSubmit={handleSubmit}>
                        <h3 className="form-title">DIRECT MESSAGE</h3>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">YOUR NAME</label>
                                <input type="text" name="name" required className="form-input" placeholder="REQUIRED" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">EMAIL ADDRESS</label>
                                <input type="email" name="email" required className="form-input" placeholder="REQUIRED" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">YOUR MESSAGE</label>
                            <textarea name="message" required className="form-textarea" placeholder="WHAT'S ON YOUR MIND?"></textarea>
                        </div>

                        <button type="submit" className="form-submit-btn" disabled={status === "Sending..."} style={{ opacity: status === "Sending..." ? 0.7 : 1 }}>
                            {status === "Sending..." ? "SENDING..." : "SEND MESSAGE"} 
                            {status !== "Sending..." && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            )}
                        </button>

                        {status && status !== "Sending..." && (
                            <div style={{ color: status === "Message sent successfully!" ? "#4ade80" : "#D41121", marginTop: "16px", fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: "700" }}>
                                {status}
                            </div>
                        )}
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;

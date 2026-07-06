import React, { useState, useEffect, useRef } from 'react';
import { X, Zap, ArrowRight, Lock, ChevronDown, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import './ExitIntentModal.css';

const INDUSTRIES = [
  { value: 'retail', label: 'Retail' },
  { value: 'restaurant', label: 'Restaurant / F&B' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'other', label: 'Other' }
];

const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('exitModalState', { detail: { isVisible } }));
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isVisible]);
  
  // Form State
  const [formData, setFormData] = useState({
    industry: '',
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    shareLocation: false
  });
  
  // Validation State
  const [errors, setErrors] = useState({});
  
  // Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Close dropdown on outside click
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('OwnRewards_lead_modal_v7');
    
    if (!hasSeenModal) {
      const handleMouseLeave = (e) => {
        if (e.clientY <= 0) {
          showModal();
        }
      };

      const timer = setTimeout(() => {
        showModal();
      }, 10000);

      const showModal = () => {
        setIsVisible(true);
        sessionStorage.setItem('OwnRewards_lead_modal_v7', 'true');
        document.removeEventListener('mouseleave', handleMouseLeave);
        clearTimeout(timer);
      };

      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
        clearTimeout(timer);
      };
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.industry) newErrors.industry = 'Please select your industry.';
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid work email.';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your WhatsApp number.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error on type
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }, 1500);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="lead-modal-overlay">
      <div className="lead-modal">
        <button className="lead-modal-close" onClick={() => setIsVisible(false)}>
          <X size={20} />
        </button>
        
        {isSuccess ? (
          <div className="lead-modal-success">
            <div className="success-icon-wrapper">
              <CheckCircle2 size={48} className="success-icon" />
            </div>
            <h2>You're All Set!</h2>
            <p>Your free guide has been sent to your email and WhatsApp.</p>
          </div>
        ) : (
          <>
            <div className="lead-modal-header-center">
              <div className="lead-modal-badge">
                <Zap size={14} /> FREE DOWNLOAD
              </div>
              
              <h2 className="lead-modal-title">Get Your Free WhatsApp Guide</h2>
              <p className="lead-modal-subtitle">
                Learn how to automate your industry marketing & boost conversions.
              </p>
            </div>

            <form className="lead-modal-form" onSubmit={handleSubmit} noValidate>
              
              {/* Custom Industry Dropdown */}
              <div className="form-group" ref={dropdownRef}>
                <label>SELECT INDUSTRY</label>
                <div 
                  className={`custom-select ${isDropdownOpen ? 'open' : ''} ${errors.industry ? 'has-error' : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                    }
                  }}
                >
                  <div className="select-value">
                    {formData.industry ? INDUSTRIES.find(i => i.value === formData.industry).label : <span className="placeholder">Select your industry</span>}
                  </div>
                  <ChevronDown size={18} className="select-arrow" />
                </div>
                {isDropdownOpen && (
                  <div className="select-dropdown">
                    {INDUSTRIES.map(ind => (
                      <div 
                        key={ind.value} 
                        className={`select-option ${formData.industry === ind.value ? 'selected' : ''}`}
                        onClick={() => {
                          handleChange('industry', ind.value);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {ind.label}
                      </div>
                    ))}
                  </div>
                )}
                {errors.industry && (
                  <div className="error-message">
                    <AlertCircle size={14} /> {errors.industry}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>FULL NAME</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className={errors.fullName ? 'has-error' : ''}
                />
                {errors.fullName && (
                  <div className="error-message">
                    <AlertCircle size={14} /> {errors.fullName}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>WORK EMAIL</label>
                <input 
                  type="email" 
                  placeholder="john@company.com" 
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={errors.email ? 'has-error' : ''}
                />
                {errors.email && (
                  <div className="error-message">
                    <AlertCircle size={14} /> {errors.email}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>WHATSAPP NUMBER</label>
                <div className={`phone-input-group ${errors.phone ? 'has-error' : ''}`}>
                  <select 
                    className="country-code" 
                    value={formData.countryCode}
                    onChange={(e) => handleChange('countryCode', e.target.value)}
                  >
                    <option value="+91">+91 (India)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                  </select>
                  <input 
                    type="tel" 
                    placeholder="98765 43210" 
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>
                {errors.phone && (
                  <div className="error-message">
                    <AlertCircle size={14} /> {errors.phone}
                  </div>
                )}
              </div>

              <div className="location-toggle-box">
                <div className="location-text">
                  <h4>Auto-detect my city <span>(Optional)</span></h4>
                  <p>Used only to personalize recommendations.</p>
                </div>
                <label className="ios-toggle">
                  <input 
                    type="checkbox" 
                    checked={formData.shareLocation} 
                    onChange={(e) => handleChange('shareLocation', e.target.checked)} 
                  />
                  <span className="ios-slider"></span>
                </label>
              </div>

              <button 
                type="submit" 
                className={`lead-submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loader2 size={18} className="spinner" /> : <><ArrowRight size={18} /> Get My Free Guide</>}
              </button>
            </form>

            <div className="lead-modal-footer">
               🔒 Your information is secure. We never spam.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentModal;

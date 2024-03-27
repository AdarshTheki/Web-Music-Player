/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import './Modal.css';

export default function Modal({ children, isOpen, onClose }) {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (isOpen && event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleEscapeKey);
        return () => document.removeEventListener('mousedown', handleEscapeKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal'>
                <div>{children}</div>
            </div>
        </div>
    );
}

import React from 'react';
import comingSoon from '../assets/comingsoon.mp4';

interface DialogProps {
  open: boolean;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose }) => {
  return (
    <div className={`dialogOverlay${open ? ' dialogOverlayOpen' : ''}`} onClick={onClose} style={{ pointerEvents: open ? 'all' : 'none' }}>
      <div className={`dialogBox${open ? ' dialogBoxOpen' : ''}`} onClick={e => e.stopPropagation()}>
        <video
          className="dialogVideo"
          src={comingSoon}
          autoPlay
          loop
          muted
          playsInline
        />
        <button className="dialogClose" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default Dialog;

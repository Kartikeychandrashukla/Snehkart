import React, { useEffect, useRef, useState } from 'react';

interface PersonCardProps {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, role, imageSrc, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`card${visible ? ' cardVisible' : ''}`}>
      <div className="avatarWrapper">
        <img src={imageSrc} alt={name} className="avatar" />
      </div>
      <div className="info">
        <h2 className="name">{name}</h2>
        <p className="role">{role}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default PersonCard;

import React from 'react';
import PersonCard from './PersonCard';

import PERSON_1 from '../assets/snehaProfile.jpeg';
import PERSON_2 from '../assets/kartikeyProfile.jpeg';

const Hero: React.FC = () => {
  return (
    <div id="home" className="homeWrapper">
      {/* Single background layer spanning both sections */}
      <div className="homeBg" aria-hidden="true">
        <div className="homeBgOrb homeBgOrb1" />
        <div className="homeBgOrb homeBgOrb2" />
        <div className="homeBgOrb homeBgOrb3" />
        <div className="homeBgOrb homeBgOrb4" />
        <div className="homeBgGrid" />
        <div className="homeBgRing homeBgRing1" />
        <div className="homeBgRing homeBgRing2" />
        <div className="homeBgLine homeBgLine1" />
        <div className="homeBgLine homeBgLine2" />
        <div className="homeBgLine homeBgLine3" />
        <div className="homeBgDot homeBgDot1" />
        <div className="homeBgDot homeBgDot2" />
        <div className="homeBgDot homeBgDot3" />
        <div className="homeBgDot homeBgDot4" />
        <div className="homeBgDot homeBgDot5" />
      </div>

      {/* Section 1 — Heading */}
      <section className="heroLanding">
        <div className="centerText">
          <h1 className="heading">
            <span className="headingLine">
              {['Built', 'to', 'Trend,'].map((word, i) => (
                <span key={i} className="wordAnimate" style={{ animationDelay: `${i * 0.12}s` }}>{word}</span>
              ))}
            </span>
            <span className="headingLine">
              {['Designed', 'to', 'Convert.'].map((word, i) => (
                <span key={i} className="wordAnimate" style={{ animationDelay: `${(i + 3) * 0.12}s` }}>{word}</span>
              ))}
            </span>
          </h1>
        </div>
      </section>      {/* Slogan banner */}
      <div className="sloganWrapper">
        <p className="sloganText">
          Clicks are cheap. <span className="sloganAccent">We optimise for</span> <span className="sloganHighlight sloganQuoted">wow</span> <span className="sloganAccent">and</span> <span className="sloganHighlight sloganQuoted">worth it</span>.
        </p>
      </div>

      {/* Section 2 — Founders */}
      <section className="hero" id="founders">
        <div className="leftCard">
          <PersonCard
            name="Sneha"
            role="Founder"
            imageSrc={PERSON_1}
            description={`Bold energy, sharp instincts, and a "no waiting, just doing" mindset - Sneha is the force behind Snekart. She doesn't follow trends, she sets them. Known for her confidence and unapologetic voice, she brings clarity, creativity, and serious business vision to everything she touches.\nFast learner, natural leader, and a little bit rebellious in the best way - she's the kind of founder who turns ideas into action before most people are still overthinking. If Snekart has a vibe, it's her. 💅`}
          />
        </div>
        <div className="rightCard">
          <PersonCard
            name="Kartikey"
            role="Founder"
            imageSrc={PERSON_2}
            description={`Calm, collected, and quietly brilliant — Kartikey is the one making sure everything actually works. While Sneha brings the spark, he builds the system behind it.\nLow-key, nonchalant, and all about execution — he's not loud about it, but he's the reason ideas don't just stay ideas. If Sneha is the energy, Kartikey is the structure holding it all together.\nDifferent energies, same vision — and that's what makes it click. 🚀`}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;

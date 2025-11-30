import React, { useState } from 'react';
import { RealmType } from './types';
import { SUPER_POWERS, CERTIFICATES, QUESTS } from './constants';
import { Compartment } from './components/Compartment';
import { Grimoire } from './components/Grimoire';
import { CharacterHUD } from './components/CharacterHUD';
import { QuestLog } from './components/QuestLog';
import { Sword, Feather, Scroll, Github, Linkedin, Mail, Gamepad2 } from 'lucide-react';

const App: React.FC = () => {
  const [realm, setRealm] = useState<RealmType>(RealmType.TECHNICAL);

  const toggleRealm = () => {
    setRealm(prev => prev === RealmType.TECHNICAL ? RealmType.ALTER_EGO : RealmType.TECHNICAL);
  };

  const currentTheme = realm === RealmType.TECHNICAL ? 'tech' : 'magic';
  const isTech = realm === RealmType.TECHNICAL;
  
  // Filter powers based on realm
  const activePowers = SUPER_POWERS.filter(p => p.alignment === realm);

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${
      isTech 
        ? 'bg-slate-950 selection:bg-tech-blue selection:text-black crt' 
        : 'bg-[#0c0a09] selection:bg-magic-crimson selection:text-white'
    }`}>
      
      {/* Background Decor */}
      <div className={`fixed inset-0 opacity-20 pointer-events-none z-0 mix-blend-overlay ${isTech ? 'animate-scanline' : ''}`}
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }}></div>

      {/* Game HUD Elements */}
      <CharacterHUD realm={realm} />
      <QuestLog quests={QUESTS} realm={realm} />

      {/* Navigation / Realm Switcher (Top Right) */}
      <nav className="fixed top-0 right-0 w-full md:w-auto z-40 p-2 md:p-4 flex justify-end items-center bg-gradient-to-b from-black/90 to-transparent">
        <button 
          onClick={toggleRealm}
          className={`
            relative px-4 py-2 md:px-8 md:py-3 border-2 font-bold tracking-[0.2em] uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs md:text-base
            ${isTech 
              ? 'border-tech-blue text-tech-blue bg-tech-dark/80 font-tech shadow-[0_0_15px_#00f0ff]' 
              : 'border-magic-crimson text-magic-crimson bg-stone-900/80 font-medieval shadow-[0_0_15px_#9f1239]'}
          `}
        >
          <span className="flex items-center gap-2 md:gap-3">
             {isTech ? <Gamepad2 size={16} className="md:w-5 md:h-5" /> : <Feather size={16} className="md:w-5 md:h-5" />}
             {isTech ? "Switch to Magic" : "Switch to Tech"}
          </span>
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 pt-24 md:pt-32 pb-20 px-4 max-w-7xl mx-auto md:pl-4 lg:pl-24">
        
        {/* Intro Section */}
        <section className="text-center mb-12 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 mt-8 md:mt-0">
          <h2 className={`text-3xl md:text-7xl font-bold mb-4 md:mb-6 drop-shadow-lg uppercase tracking-tighter ${isTech ? 'font-tech text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-white' : 'font-medieval text-royal-gold'}`}>
            {isTech ? "SYSTEM_ARCHITECTURE" : "The Arcane Gallery"}
          </h2>
          <div className="flex justify-center">
            <p className={`text-sm md:text-xl max-w-3xl leading-relaxed border-l-4 pl-4 md:pl-6 text-left ${isTech ? 'border-tech-blue text-gray-300 font-mono' : 'border-royal-gold text-parchment-dark font-medieval italic'}`}>
              {isTech 
                ? "> INITIALIZING PORTFOLIO PROTOCOLS... \n> LOADED: Engineering Skills, Cloud Infrastructure, Logic Gates. \n> STATUS: Operational."
                : "Enter the atelier of the mind, where logic dissolves into pure creation. Here, the boundaries of reality are rewritten by the quill of imagination."}
            </p>
          </div>
        </section>

        {/* The Skill Tree (Grid) */}
        <section className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className={`h-2 w-2 rounded-full ${isTech ? 'bg-tech-blue animate-pulse' : 'bg-royal-gold animate-glow'}`}></div>
            <h3 className={`text-base md:text-xl uppercase tracking-widest ${isTech ? 'text-tech-blue font-tech' : 'text-royal-gold font-cinzel'}`}>
              Active Skill Tree
            </h3>
            <div className={`h-[1px] flex-1 ${isTech ? 'bg-tech-blue/30' : 'bg-royal-gold/30'}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {activePowers.map(power => (
              <Compartment key={power.id} power={power} themeColor={currentTheme} />
            ))}
          </div>
        </section>

        {/* Realm Specific Loot (Certificates vs Gallery) */}
        <section className={`border rounded-xl p-4 md:p-8 ${isTech ? 'border-tech-blue/20 bg-tech-grid/20' : 'border-royal-gold/20 bg-stone-900/40'}`}>
          <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
             <h3 className={`text-2xl md:text-3xl font-bold text-center ${isTech ? 'font-tech text-tech-blue' : 'font-medieval text-royal-gold'}`}>
              {isTech ? "ACQUIRED DATA LOGS" : "VISUAL MANIFESTATIONS"}
            </h3>
          </div>

          {isTech ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTIFICATES.map((cert, idx) => (
                <div key={idx} className="relative group overflow-hidden bg-black/50 border border-tech-blue/30 p-6 rounded hover:border-tech-blue transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <div className="absolute top-0 left-0 w-1 h-full bg-tech-blue transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                  <Scroll className="text-tech-blue mb-4 group-hover:text-white transition-colors" />
                  <h4 className="font-tech text-white text-lg mb-1">{cert.title}</h4>
                  <p className="text-gray-500 text-xs font-mono uppercase">{cert.issuer}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[3/4] bg-stone-900 border-4 double border-magic-crimson/30 rounded-lg overflow-hidden relative group cursor-pointer">
                  <img 
                    src={`https://picsum.photos/400/600?random=${i}`} 
                    alt="Generative Art" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-royal-gold font-medieval text-sm md:text-lg">Artifact #{i}</span>
                    <span className="text-[10px] md:text-xs text-gray-400">Rare Item</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-20 md:mt-32 border-t border-gray-800 pt-10 text-center text-gray-500">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-white transition-colors transform hover:-translate-y-1"><Github /></a>
            <a href="#" className="hover:text-white transition-colors transform hover:-translate-y-1"><Linkedin /></a>
            <a href="#" className="hover:text-white transition-colors transform hover:-translate-y-1"><Mail /></a>
          </div>
          <p className="font-mono text-[10px] md:text-xs opacity-50">
            PRESS START TO CONTINUE • COPYRIGHT 2024
          </p>
        </footer>
      </main>

      {/* The Grimoire (Chat) */}
      <Grimoire />

    </div>
  );
};

export default App;
import React, { useState } from 'react';
import { RealmType } from './types';
import { SUPER_POWERS, QUESTS, CERTIFICATES } from './constants';
import { Compartment } from './components/Compartment';
import { Grimoire } from './components/Grimoire';
import { CharacterHUD } from './components/CharacterHUD';
import { QuestLog } from './components/QuestLog';
import { Github, Linkedin, Mail, Scroll, Code } from 'lucide-react';

const App: React.FC = () => {
  const [realm, setRealm] = useState<RealmType>(RealmType.TECHNICAL);
  const [isQuestLogOpen, setIsQuestLogOpen] = useState(false);

  const toggleRealm = () => {
    setRealm(prev => prev === RealmType.TECHNICAL ? RealmType.ALTER_EGO : RealmType.TECHNICAL);
  };

  const currentTheme = realm === RealmType.TECHNICAL ? 'tech' : 'magic';
  const activePowers = SUPER_POWERS.filter(p => p.alignment === realm);
  const activeQuests = QUESTS; // Show all quests or filter if needed

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${
      realm === RealmType.TECHNICAL 
        ? 'bg-[#050505] selection:bg-cyan-900 selection:text-white' 
        : 'bg-[#0f0a05] selection:bg-red-900 selection:text-white'
    }`}>
      
      {/* Visual FX Layers */}
      {realm === RealmType.TECHNICAL && (
        <>
           <div className="scanlines"></div>
           <div className="scanline-bar"></div>
           <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        </>
      )}
      {realm === RealmType.ALTER_EGO && (
        <>
          <div className="vignette"></div>
          <div className="fixed inset-0 opacity-10 pointer-events-none"
               style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }}></div>
        </>
      )}

      {/* Heads Up Display (Nav) */}
      <CharacterHUD 
        realm={realm} 
        toggleRealm={toggleRealm} 
        toggleQuestLog={() => setIsQuestLogOpen(true)}
      />

      {/* Quest Log Sidebar */}
      <QuestLog 
        isOpen={isQuestLogOpen} 
        onClose={() => setIsQuestLogOpen(false)} 
        quests={activeQuests}
        realm={realm}
      />

      {/* Main Content Area */}
      <main className="relative z-10 pt-24 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
        
        {/* Intro Section */}
        <section className="text-center mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className={`text-4xl md:text-7xl font-bold mb-6 drop-shadow-2xl ${
             realm === RealmType.TECHNICAL ? 'text-white font-mono tracking-tighter' : 'text-royal-gold font-medieval'
          }`}>
            {realm === RealmType.TECHNICAL ? "SYSTEM_ONLINE" : "The Dual Soul"}
          </h2>
          <p className={`text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed border-l-4 pl-4 italic ${
             realm === RealmType.TECHNICAL ? 'text-tech-blue border-tech-blue font-mono' : 'text-parchment-dark border-royal-gold font-cinzel'
          }`}>
            {realm === RealmType.TECHNICAL 
              ? "> Initializing creative logic modules... Architecting reliable systems."
              : "Where imagination commands the machine. A chronicle of creativity."}
          </p>
        </section>

        {/* The Compartments (Skill Tree) */}
        <div className="mb-8 flex items-center gap-2 opacity-50">
           <Code size={16} className={realm === RealmType.TECHNICAL ? 'text-tech-blue' : 'text-royal-gold'} />
           <span className={`text-xs uppercase tracking-widest ${realm === RealmType.TECHNICAL ? 'font-mono' : 'font-cinzel'}`}>
             Ability Matrix
           </span>
        </div>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {activePowers.map(power => (
            <Compartment key={power.id} power={power} themeColor={currentTheme} />
          ))}
        </section>

        {/* Realm Specific Features */}
        <section className="border-t border-white/10 pt-16">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className={`h-[1px] flex-1 max-w-[100px] ${realm === RealmType.TECHNICAL ? 'bg-tech-blue/50' : 'bg-royal-gold/50'}`}></div>
            <h3 className={`text-2xl md:text-3xl ${realm === RealmType.TECHNICAL ? 'text-tech-blue font-mono' : 'text-royal-gold font-cinzel'}`}>
              {realm === RealmType.TECHNICAL ? "CERTIFIED_PROTOCOLS" : "Visual Incantations"}
            </h3>
            <div className={`h-[1px] flex-1 max-w-[100px] ${realm === RealmType.TECHNICAL ? 'bg-tech-blue/50' : 'bg-royal-gold/50'}`}></div>
          </div>

          {realm === RealmType.TECHNICAL ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTIFICATES.map((cert, idx) => (
                <div key={idx} className="bg-black/40 border border-tech-blue/30 p-6 rounded flex items-start gap-4 hover:border-tech-blue hover:bg-tech-blue/5 transition-colors group cursor-default">
                  <Scroll className="text-tech-blue group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-mono text-white text-lg">{cert.title}</h4>
                    <p className="text-gray-500 text-xs font-mono">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-stone-900 border-2 border-magic-crimson/30 rounded overflow-hidden relative group">
                  <img 
                    src={`https://picsum.photos/400?random=${i + 10}`} 
                    alt="Generative Art" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-parchment font-medieval text-sm">Artifact #{i}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className={`mt-32 border-t pt-10 text-center ${realm === RealmType.TECHNICAL ? 'border-tech-blue/20 text-gray-500 font-mono' : 'border-royal-gold/20 text-parchment-dark font-cinzel'}`}>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="hover:text-white transition-colors transform hover:-translate-y-1"><Github /></a>
            <a href="#" className="hover:text-white transition-colors transform hover:-translate-y-1"><Linkedin /></a>
            <a href="#" className="hover:text-white transition-colors transform hover:-translate-y-1"><Mail /></a>
          </div>
          <p className="text-xs tracking-widest opacity-60">
            CHRONICLES OF THE DUAL SOUL • 2024
          </p>
        </footer>
      </main>

      {/* The Grimoire (Chat) */}
      <Grimoire />

    </div>
  );
};

export default App;
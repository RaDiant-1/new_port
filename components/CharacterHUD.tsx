import React from 'react';
import { User, Shield, Zap, Heart, Brain } from 'lucide-react';
import { RealmType } from '../types';

interface HudProps {
  realm: RealmType;
}

export const CharacterHUD: React.FC<HudProps> = ({ realm }) => {
  const isTech = realm === RealmType.TECHNICAL;

  const barColor1 = isTech ? 'bg-stamina-green' : 'bg-health-red';
  const barColor2 = isTech ? 'bg-tech-blue' : 'bg-mana-blue';
  
  const label1 = isTech ? 'SYSTEM INTEGRITY' : 'LIFE FORCE';
  const label2 = isTech ? 'PROCESSING POWER' : 'MANA POOL';

  const avatarBorder = isTech ? 'border-tech-blue' : 'border-royal-gold';
  const bgStyle = isTech ? 'bg-tech-dark/90 border-tech-blue' : 'bg-void-dark/90 border-royal-gold';
  const font = isTech ? 'font-tech' : 'font-medieval';

  return (
    <div className={`fixed top-2 left-2 md:top-4 md:left-4 z-50 flex items-center gap-3 md:gap-4 p-2 md:p-4 rounded-lg border-2 backdrop-blur-md transition-all duration-500 shadow-xl ${bgStyle} max-w-[95vw] md:max-w-none`}>
      
      {/* Avatar Frame */}
      <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded border-2 ${avatarBorder} overflow-hidden shrink-0`}>
        <img 
          src={isTech ? "https://picsum.photos/seed/tech/200" : "https://picsum.photos/seed/magic/200"} 
          alt="Avatar" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-black text-white text-[10px] md:text-xs px-1 font-bold">Lvl 24</div>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-1 md:gap-2 min-w-[140px] md:min-w-[200px]">
        {/* Name & Class */}
        <div className={`flex justify-between items-end ${font}`}>
          <span className={`text-sm md:text-lg font-bold ${isTech ? 'text-tech-blue' : 'text-royal-gold'}`}>
            {isTech ? 'OPERATOR_ZERO' : 'GRAND ALCHEMIST'}
          </span>
          <span className="text-[10px] md:text-xs text-gray-400 hidden sm:inline">
            {isTech ? 'Class: Cyber-Paladin' : 'Class: Void Warlock'}
          </span>
        </div>

        {/* HP Bar */}
        <div className="w-full h-2 md:h-3 bg-black/50 rounded-full border border-gray-700 relative overflow-hidden group">
          <div className={`h-full ${barColor1} w-[85%] transition-all duration-1000 relative`}>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/30 to-transparent"></div>
          </div>
          <span className="absolute top-0 left-2 text-[6px] md:text-[8px] text-white/80 font-mono leading-2 md:leading-3">{label1} 85%</span>
        </div>

        {/* MP Bar */}
        <div className="w-full h-2 md:h-3 bg-black/50 rounded-full border border-gray-700 relative overflow-hidden">
          <div className={`h-full ${barColor2} w-[60%] transition-all duration-1000 relative`}>
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/30 to-transparent"></div>
          </div>
          <span className="absolute top-0 left-2 text-[6px] md:text-[8px] text-white/80 font-mono leading-2 md:leading-3">{label2} 60%</span>
        </div>
      </div>
      
      {/* Stat Icons (Hidden on very small mobile) */}
      <div className="hidden lg:flex flex-col gap-1 ml-2">
        <div className="flex items-center gap-1 text-gray-400 text-xs font-mono" title="Defense">
           <Shield size={12} /> 120
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-xs font-mono" title="Intelligence">
           <Brain size={12} /> 255
        </div>
      </div>
    </div>
  );
};
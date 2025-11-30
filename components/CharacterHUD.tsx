import React from 'react';
import { Sword, Feather, User, Battery, Zap, Menu } from 'lucide-react';
import { RealmType } from '../types';
import { motion } from 'framer-motion';

interface CharacterHUDProps {
  realm: RealmType;
  toggleRealm: () => void;
  toggleQuestLog: () => void;
}

export const CharacterHUD: React.FC<CharacterHUDProps> = ({ realm, toggleRealm, toggleQuestLog }) => {
  const isTech = realm === RealmType.TECHNICAL;

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-2 border-b-2 transition-colors duration-500 flex items-center justify-between
        ${isTech ? 'bg-black/90 border-tech-blue/50 text-tech-blue' : 'bg-black/90 border-royal-gold/50 text-royal-gold'}
      `}
    >
      {/* Left: Avatar & Level */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 md:w-12 md:h-12 border-2 rounded-lg flex items-center justify-center overflow-hidden bg-black
           ${isTech ? 'border-tech-blue' : 'border-royal-gold'}
        `}>
           <User size={24} />
        </div>
        <div className="hidden md:flex flex-col">
          <span className={`text-xs font-bold uppercase tracking-widest ${isTech ? 'font-mono' : 'font-cinzel'}`}>
             {isTech ? 'Operator' : 'Warlock'} Lvl. 42
          </span>
          <div className="w-24 h-2 bg-gray-800 rounded-full mt-1 overflow-hidden">
            <div className={`h-full w-[70%] ${isTech ? 'bg-green-500' : 'bg-purple-500'}`}></div>
          </div>
        </div>
      </div>

      {/* Middle: Bars (Mobile: Hidden or Simplified) */}
      <div className="flex-1 max-w-md mx-4 hidden sm:flex flex-col gap-1">
        <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider">
           <Battery size={12} className="text-red-500" /> HP (Caffeine)
        </div>
        <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-white/10">
           <div className="h-full w-[90%] bg-red-600 shadow-[0_0_10px_red]"></div>
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider mt-1">
           <Zap size={12} className="text-blue-500" /> MP (Mana)
        </div>
        <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-white/10">
           <div className="h-full w-[60%] bg-blue-600 shadow-[0_0_10px_blue]"></div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleQuestLog}
          className={`hidden md:block px-4 py-1.5 border text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all
            ${isTech ? 'border-tech-blue text-tech-blue font-mono' : 'border-royal-gold text-royal-gold font-medieval'}
          `}
        >
          Quest Log
        </button>

        <button 
           onClick={toggleQuestLog} 
           className="md:hidden p-2 border rounded hover:bg-white/10"
        >
           <Menu size={18} />
        </button>

        <button 
          onClick={toggleRealm}
          className={`
            relative p-2 border-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_currentColor]
            ${isTech ? 'border-tech-blue text-tech-blue bg-tech-blue/10' : 'border-magic-crimson text-magic-crimson bg-magic-crimson/10'}
          `}
          title="Switch Realm"
        >
          {isTech ? <Sword size={20} /> : <Feather size={20} />}
        </button>
      </div>
    </motion.div>
  );
};
import React, { useState } from 'react';
import { Scroll, CheckCircle, Lock, Sword, ChevronRight, X } from 'lucide-react';
import { Quest, RealmType } from '../types';

interface QuestLogProps {
  quests: Quest[];
  realm: RealmType;
}

export const QuestLog: React.FC<QuestLogProps> = ({ quests, realm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isTech = realm === RealmType.TECHNICAL;
  
  const borderColor = isTech ? 'border-tech-blue' : 'border-royal-gold';
  const bgColor = isTech ? 'bg-tech-dark/95' : 'bg-stone-900/95';
  const textColor = isTech ? 'text-tech-blue' : 'text-royal-gold';
  const font = isTech ? 'font-tech' : 'font-medieval';

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed top-20 md:top-24 left-2 md:left-4 z-40 p-2 border-2 ${borderColor} ${bgColor} rounded hover:scale-105 transition-transform`}
        title="Open Quest Log"
      >
        <Scroll className={`${textColor} w-5 h-5 md:w-6 md:h-6`} />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isTech ? 'bg-tech-blue' : 'bg-royal-gold'}`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${isTech ? 'bg-tech-blue' : 'bg-royal-gold'}`}></span>
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed top-20 md:top-24 left-2 md:left-4 z-40 w-[calc(100vw-1rem)] md:w-80 max-h-[60vh] overflow-hidden flex flex-col border-2 ${borderColor} ${bgColor} rounded shadow-2xl animate-in slide-in-from-left-5 duration-300`}>
      {/* Header */}
      <div className={`p-3 border-b ${borderColor} flex justify-between items-center ${isTech ? 'bg-tech-grid' : 'bg-black/30'}`}>
        <h3 className={`${font} ${textColor} text-lg md:text-xl flex items-center gap-2`}>
          <Sword size={16} /> QUEST LOG
        </h3>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
          <X size={18} />
        </button>
      </div>

      {/* Quest List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-thin">
        <div className="text-xs uppercase tracking-widest text-gray-500 font-bold px-2 mt-2 mb-1">Main Quest</div>
        {quests.filter(q => q.type === 'MAIN').map(quest => (
          <QuestItem key={quest.id} quest={quest} isTech={isTech} />
        ))}

        <div className="text-xs uppercase tracking-widest text-gray-500 font-bold px-2 mt-4 mb-1">Side Quests</div>
        {quests.filter(q => q.type === 'SIDE').map(quest => (
          <QuestItem key={quest.id} quest={quest} isTech={isTech} />
        ))}
      </div>
    </div>
  );
};

const QuestItem: React.FC<{ quest: Quest; isTech: boolean }> = ({ quest, isTech }) => {
  const isLocked = quest.status === 'LOCKED';
  const isCompleted = quest.status === 'COMPLETED';
  
  return (
    <div className={`
      relative p-3 rounded border transition-all duration-300 group
      ${isLocked ? 'border-gray-700 opacity-60 grayscale' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}
      ${isCompleted ? 'border-green-800 bg-green-900/10' : ''}
    `}>
      <div className="flex justify-between items-start mb-1">
        <h4 className={`font-bold text-sm ${isTech ? 'font-mono' : 'font-medieval'} ${isCompleted ? 'text-green-500 line-through' : 'text-gray-200'}`}>
          {quest.title}
        </h4>
        <div className="mt-1">
            {isLocked && <Lock size={12} className="text-gray-500" />}
            {isCompleted && <CheckCircle size={12} className="text-green-500" />}
            {!isLocked && !isCompleted && <ChevronRight size={12} className="text-yellow-500 animate-pulse" />}
        </div>
      </div>
      
      {!isLocked && (
        <>
          <p className="text-xs text-gray-400 mb-2 font-body leading-relaxed">{quest.description}</p>
          <div className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded inline-block ${isTech ? 'bg-tech-blue/20 text-tech-blue' : 'bg-royal-gold/20 text-royal-gold'}`}>
            Reward: {quest.reward}
          </div>
        </>
      )}
    </div>
  );
};
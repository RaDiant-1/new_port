import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Circle, Trophy } from 'lucide-react';
import { Quest, RealmType } from '../types';

interface QuestLogProps {
  isOpen: boolean;
  onClose: () => void;
  quests: Quest[];
  realm: RealmType;
}

export const QuestLog: React.FC<QuestLogProps> = ({ isOpen, onClose, quests, realm }) => {
  const isTech = realm === RealmType.TECHNICAL;
  const borderColor = isTech ? 'border-tech-blue' : 'border-royal-gold';
  const textColor = isTech ? 'text-tech-blue' : 'text-royal-gold';
  const bgColor = isTech ? 'bg-black/95' : 'bg-void-dark/95';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed right-0 top-0 bottom-0 w-full sm:w-[400px] z-[70] ${bgColor} border-l-4 ${borderColor} shadow-2xl overflow-hidden flex flex-col`}
          >
            {/* Header */}
            <div className={`p-6 border-b ${borderColor} flex justify-between items-center`}>
              <h2 className={`text-2xl font-bold ${isTech ? 'font-mono tracking-tighter' : 'font-medieval tracking-widest'} ${textColor}`}>
                QUEST LOG
              </h2>
              <button onClick={onClose} className="hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
               {quests.map((quest) => (
                 <motion.div 
                    key={quest.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-4 border border-white/10 rounded hover:bg-white/5 transition-colors group relative overflow-hidden`}
                 >
                    {/* Status Indicator */}
                    <div className="absolute top-2 right-2">
                       {quest.status === 'COMPLETED' ? (
                         <CheckCircle className="text-green-500" size={18} />
                       ) : (
                         <Circle className="text-yellow-500 animate-pulse" size={18} />
                       )}
                    </div>

                    <h3 className={`text-lg font-bold mb-1 group-hover:${textColor} transition-colors ${isTech ? 'font-mono' : 'font-cinzel'}`}>
                      {quest.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 font-body mb-3">
                      {quest.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                       {quest.tags.map(tag => (
                         <span key={tag} className="text-[10px] uppercase px-1.5 py-0.5 border border-white/20 rounded text-gray-500">
                           {tag}
                         </span>
                       ))}
                    </div>

                    <div className={`text-xs flex items-center gap-1 ${quest.status === 'COMPLETED' ? 'text-green-400' : 'text-yellow-400'}`}>
                       <Trophy size={12} />
                       <span>{quest.reward}</span>
                    </div>
                 </motion.div>
               ))}
            </div>

            {/* Footer decoration */}
            <div className={`p-4 border-t ${borderColor} text-center text-xs opacity-50`}>
               {isTech ? 'SYSTEM.LOG.END' : 'CHRONICLE UPDATED'}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
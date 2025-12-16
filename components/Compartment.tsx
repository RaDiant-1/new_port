import React, { useState } from 'react';
import { SuperPower } from '../types';
import { ChevronDown, ExternalLink, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CompartmentProps {
  power: SuperPower;
  themeColor: 'tech' | 'magic';
}

export const Compartment: React.FC<CompartmentProps> = ({ power, themeColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isTech = themeColor === 'tech';
  
  // Dynamic Styles
  const borderColor = isTech ? 'border-tech-blue' : 'border-magic-crimson';
  const textColor = isTech ? 'text-tech-blue' : 'text-magic-crimson';
  const bgColor = isTech ? 'bg-black/80' : 'bg-black/60';
  const fontFamily = isTech ? 'font-mono' : 'font-cinzel';
  
  // Colors for hover effect (Tech Blue / Magic Crimson)
  const glowHex = isTech ? '#00f0ff' : '#9f1239';

  return (
    <motion.div 
      layout
      className={`
        relative w-full
        ${isExpanded ? 'md:col-span-2 row-span-auto' : 'col-span-1'}
        rounded-lg transition-all duration-300
      `}
    >
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          relative border-2 ${borderColor} ${bgColor} 
          rounded-lg overflow-hidden cursor-pointer backdrop-blur-sm
          ${!isExpanded ? `hover:scale-[1.02] hover:shadow-[0_0_20px_${glowHex}]` : ''}
          transition-all duration-300
        `}
      >
        {/* Card Header / Minimized View */}
        <motion.div layout="position" className="p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
          
          {/* Icon Box */}
          <motion.div layout className={`p-3 rounded border ${borderColor} bg-black/50 shrink-0`}>
            <power.icon className={`w-8 h-8 ${textColor}`} />
          </motion.div>
          
          <div className="flex-1 w-full">
            <div className="flex justify-between items-center w-full mb-1">
              <motion.h3 layout className={`text-xl font-bold text-white ${fontFamily}`}>
                {power.name}
              </motion.h3>
              {/* Level Badge */}
              <motion.span layout className={`text-xs px-2 py-0.5 border ${borderColor} rounded ${textColor} bg-${themeColor === 'tech' ? 'blue' : 'red'}-900/20`}>
                LVL {power.level}
              </motion.span>
            </div>

            {/* Progress Bar (Visual Flair) */}
            <motion.div layout className="w-full h-1 bg-white/10 rounded-full mt-2 mb-2 overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }} 
                 animate={{ width: `${power.level}%` }} 
                 transition={{ duration: 1.5, delay: 0.2 }}
                 className={`h-full ${isTech ? 'bg-tech-blue' : 'bg-magic-crimson'}`} 
               />
            </motion.div>

            {/* Preview Description */}
            {!isExpanded && (
               <motion.p 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }}
                 className="text-sm text-gray-400 font-body line-clamp-2"
               >
                 {power.description}
               </motion.p>
            )}
          </div>

          <div className="absolute top-4 right-4 md:static">
             <motion.button 
               animate={{ rotate: isExpanded ? 180 : 0 }}
               className={`p-1 rounded-full hover:bg-white/10 ${textColor}`}
             >
               <ChevronDown size={20} />
             </motion.button>
          </div>
        </motion.div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10"
            >
              <div className="p-5 bg-black/40">
                <p className={`text-sm md:text-base text-gray-300 font-body mb-6 italic border-l-2 ${borderColor} pl-4`}>
                   {power.description}
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {power.subPowers.map((sub, i) => (
                    <motion.div 
                       key={sub.id}
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="p-3 rounded bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-colors"
                       onClick={(e) => e.stopPropagation()} 
                    >
                       <div className="flex justify-between items-start">
                          <h4 className={`font-bold ${textColor} ${fontFamily} mb-1`}>{sub.name}</h4>
                          {sub.link && <ExternalLink size={14} className="text-gray-500 hover:text-white" />}
                       </div>
                       <p className="text-xs md:text-sm text-gray-400 mb-2">{sub.description}</p>
                       <div className="flex flex-wrap gap-2">
                         {sub.tags.map(tag => (
                           <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-black rounded text-gray-500 font-mono">
                             {tag}
                           </span>
                         ))}
                       </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      setIsExpanded(false);
                    }}
                    className={`text-xs uppercase font-bold hover:underline ${textColor}`}
                  >
                    Close Compartment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

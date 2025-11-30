import React, { useState } from 'react';
import { SuperPower } from '../types';
import { ChevronDown, ExternalLink, Star, Zap } from 'lucide-react';

interface CompartmentProps {
  power: SuperPower;
  themeColor: string;
}

export const Compartment: React.FC<CompartmentProps> = ({ power, themeColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isTech = themeColor === 'tech';
  
  const borderColor = isTech ? 'border-tech-blue' : 'border-magic-crimson';
  const shadowColor = isTech ? 'shadow-[0_0_10px_#00f0ff_inset]' : 'shadow-[0_0_10px_#9f1239_inset]';
  const textColor = isTech ? 'text-tech-blue' : 'text-magic-crimson';
  const bgColor = isTech ? 'bg-tech-dark' : 'bg-stone-900';
  const fontTitle = isTech ? 'font-tech' : 'font-medieval';

  return (
    <div 
      className={`
        game-card relative w-full transition-all duration-500 ease-in-out
        border-2 ${borderColor} ${bgColor}
        ${isExpanded ? 'col-span-1 md:col-span-2 row-span-2' : 'col-span-1'}
        rounded-lg overflow-hidden group
        hover:shadow-2xl
      `}
    >
      {/* Skill Node Connector Line (Visual only) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-gray-700 -mt-4 z-0"></div>

      {/* Header / Card Face */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-4 md:p-6 flex flex-col items-center justify-center min-h-[180px] md:min-h-[220px] text-center relative z-10"
      >
        {/* Level Badge */}
        <div className={`absolute top-2 right-2 text-[10px] md:text-xs font-bold px-2 py-1 rounded ${isTech ? 'bg-tech-blue text-black' : 'bg-royal-gold text-black'}`}>
          LVL {power.levelReq}
        </div>

        {/* Icon Container */}
        <div className={`
          relative p-3 md:p-5 rounded-full border-2 ${borderColor} mb-3 md:mb-4 bg-black 
          transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110
          ${shadowColor}
        `}>
          <power.icon className={`w-6 h-6 md:w-8 md:h-8 ${textColor}`} />
        </div>

        <h3 className={`text-lg md:text-2xl ${fontTitle} font-bold text-parchment mb-2 tracking-wide uppercase`}>
          {power.name}
        </h3>
        
        <p className="font-body text-gray-400 text-xs md:text-sm max-w-[95%] md:max-w-[90%] mb-4 line-clamp-2">
          {power.description}
        </p>

        {/* Interaction Prompt */}
        <div className={`
          mt-auto flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity
          ${isTech ? 'text-tech-blue' : 'text-royal-gold'}
        `}>
          <span>{isExpanded ? 'Collapse' : 'Inspect Skill'}</span>
          <ChevronDown className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} size={14} />
        </div>
      </div>

      {/* Expanded Content (Skill Details) */}
      <div className={`
        bg-black/80 backdrop-blur-sm border-t border-white/10
        transition-all duration-500 overflow-hidden
        ${isExpanded ? 'max-h-[800px] md:max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {power.subPowers.map((sub) => (
            <div key={sub.id} className={`
              border p-3 md:p-4 rounded bg-white/5 hover:bg-white/10 transition-colors
              ${isTech ? 'border-tech-blue/30' : 'border-magic-crimson/30'}
            `}>
              <div className="flex justify-between items-start mb-2">
                <h4 className={`text-base md:text-lg ${fontTitle} ${isTech ? 'text-tech-blue' : 'text-royal-gold'}`}>
                  {sub.name}
                </h4>
                {sub.link && <ExternalLink size={14} className="text-gray-500 hover:text-white" />}
              </div>
              
              <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={10} className={i < (sub.rank || 0) ? "text-yellow-500 fill-yellow-500" : "text-gray-700"} />
                   ))}
                </div>
                {sub.manaCost && (
                  <div className="flex items-center gap-1 text-blue-400">
                    <Zap size={10} className="fill-blue-400" />
                    <span>{sub.manaCost} MP</span>
                  </div>
                )}
              </div>

              <p className="text-xs md:text-sm font-body text-gray-300 mb-3">{sub.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {sub.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-black rounded border border-white/10 text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
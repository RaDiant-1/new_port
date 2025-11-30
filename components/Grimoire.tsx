import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Minimize2 } from 'lucide-react';
import { consultGrimoire } from '../services/geminiService';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

export const Grimoire: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings, traveler. I am the Grimoire. Ask me of the Code, or of the Creator.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleAsk = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || isLoading) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const answer = await consultGrimoire(userText);

    setMessages(prev => [...prev, { role: 'model', text: answer }]);
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 z-40 p-3 md:p-4 bg-void-dark border-2 border-royal-gold rounded-full shadow-[0_0_20px_#d4af37] hover:scale-110 transition-transform group"
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-royal-gold animate-spin-slow group-hover:animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 w-full h-[60vh] md:h-[500px] md:w-96 bg-void-dark border-t-2 md:border-4 border-double border-royal-gold md:rounded-lg shadow-2xl flex flex-col font-medieval overflow-hidden"
          >
            {/* Header */}
            <div className="bg-royal-gold/20 p-3 border-b border-royal-gold flex justify-between items-center backdrop-blur-md">
              <h3 className="text-royal-gold text-lg md:text-xl font-cinzel flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> The Grimoire
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-parchment hover:text-red-500"
              >
                <Minimize2 size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-royal-gold/50 shrink-0 ${msg.role === 'user' ? 'bg-tech-blue/20' : 'bg-magic-purple/20'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-tech-blue" /> : <Bot size={14} className="text-magic-purple" />}
                  </div>
                  <div className={`p-3 rounded-lg text-sm font-body max-w-[80%] ${
                    msg.role === 'user' 
                      ? 'bg-tech-blue/10 border border-tech-blue/30 text-parchment' 
                      : 'bg-parchment text-void-dark border border-royal-gold shadow-inner'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-magic-purple/20 flex items-center justify-center border border-royal-gold/50">
                    <Sparkles size={14} className="text-magic-purple animate-spin" />
                  </div>
                  <div className="p-3 rounded-lg text-sm bg-parchment text-void-dark border border-royal-gold italic">
                    Consulting the spirits...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleAsk} className="p-3 bg-void-dark border-t border-royal-gold flex gap-2">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask thy question..."
                className="flex-1 bg-gray-900 border border-royal-gold/30 rounded px-3 py-2 text-parchment focus:outline-none focus:border-royal-gold font-body text-sm"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="p-2 bg-royal-gold/20 hover:bg-royal-gold/40 border border-royal-gold rounded text-royal-gold transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
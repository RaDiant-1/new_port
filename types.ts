import { LucideIcon } from 'lucide-react';

export enum RealmType {
  TECHNICAL = 'TECHNICAL', // The Paladin/Engineer
  ALTER_EGO = 'ALTER_EGO'  // The Warlock/Artist
}

export interface SubPower {
  id: string;
  name: string;
  description: string;
  link?: string;
  image?: string;
  tags: string[];
}

export interface SuperPower {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  subPowers: SubPower[];
  alignment: RealmType; 
  level: number; // For gamification
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  reward: string; // e.g., "XP +500", "New Skill"
  status: 'ACTIVE' | 'COMPLETED';
  tags: string[];
  link?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
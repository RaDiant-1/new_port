import { LucideIcon } from 'lucide-react';

export enum RealmType {
  TECHNICAL = 'TECHNICAL', // The Paladin/Engineer
  ALTER_EGO = 'ALTER_EGO'  // The Warlock/Artist
}

export interface SubPower {
  id: string;
  name: string;
  description: string;
  details?: string;
  link?: string;
  image?: string;
  tags: string[];
  rank?: number; // 1-5 stars
  manaCost?: number; // Game flavor
}

export interface SuperPower {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  subPowers: SubPower[];
  alignment: RealmType;
  levelReq: number; // Game flavor
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  reward: string;
  status: 'ACTIVE' | 'COMPLETED' | 'LOCKED';
  type: 'MAIN' | 'SIDE';
  icon: LucideIcon;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

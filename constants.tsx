import { 
  Cpu, 
  Sparkles, 
  Shield, 
  Palette,
  Sword, 
  Scroll, 
  Map,
  Target,
  Trophy,
  Zap
} from 'lucide-react';
import { RealmType, SuperPower, Quest } from './types';

export const SUPER_POWERS: SuperPower[] = [
  // TECHNICAL REALM
  {
    id: 'frontend-fortress',
    name: 'Fortress of Frontend',
    icon: Shield,
    description: 'Constructing impenetrable user interfaces with modern React architecture.',
    alignment: RealmType.TECHNICAL,
    levelReq: 5,
    subPowers: [
      {
        id: 'react-mastery',
        name: 'React 18 Architecture',
        description: 'Advanced patterns, Hooks, and Suspense boundaries.',
        tags: ['React', 'TypeScript', 'Performance'],
        rank: 5,
        manaCost: 40,
        image: 'https://picsum.photos/400/300?grayscale'
      },
      {
        id: 'tailwind-masonry',
        name: 'Tailwind Masonry',
        description: 'Rapid UI development with utility-first CSS strategies.',
        tags: ['CSS', 'Responsive', 'Design Systems'],
        rank: 4,
        manaCost: 25
      }
    ]
  },
  {
    id: 'backend-bastion',
    name: 'Bastion of Backend',
    icon: Cpu,
    description: 'Server-side logic, API gateways, and database management.',
    alignment: RealmType.TECHNICAL,
    levelReq: 8,
    subPowers: [
      {
        id: 'node-necromancy',
        name: 'Node.js Necromancy',
        description: 'Breathing life into servers and microservices.',
        tags: ['Node', 'Express', 'NestJS'],
        rank: 4,
        manaCost: 50
      },
      {
        id: 'db-dungeons',
        name: 'Dungeon Databases',
        description: 'Structuring data within SQL and NoSQL vaults.',
        tags: ['PostgreSQL', 'Mongo', 'Redis'],
        rank: 3,
        manaCost: 35
      }
    ]
  },
  
  // ALTER EGO REALM
  {
    id: 'prompt-alchemy',
    name: 'Alchemy of Prompts',
    icon: Sparkles,
    description: 'Transmuting natural language into digital gold via LLMs.',
    alignment: RealmType.ALTER_EGO,
    levelReq: 12,
    subPowers: [
      {
        id: 'visual-spells',
        name: 'Visual Incantations',
        description: 'Generative art workflows using Midjourney and Gemini.',
        tags: ['GenAI', 'Art', 'Diffusers'],
        rank: 5,
        manaCost: 100,
        image: 'https://picsum.photos/400/300?blur=2'
      },
      {
        id: 'text-weaving',
        name: 'Narrative Weaving',
        description: 'Storytelling engines and persona constraints.',
        tags: ['LLM', 'Creative Writing', 'Gemini'],
        rank: 4,
        manaCost: 60
      }
    ]
  },
  {
    id: 'chaos-design',
    name: 'Chaos Design',
    icon: Palette,
    description: 'Breaking grid systems to create unique, memorable experiences.',
    alignment: RealmType.ALTER_EGO,
    levelReq: 7,
    subPowers: [
      {
        id: 'ui-sorcery',
        name: 'UI Sorcery',
        description: 'Animations, micro-interactions, and 3D web elements.',
        tags: ['Three.js', 'Framer Motion', 'WebGL'],
        rank: 3,
        manaCost: 80
      }
    ]
  }
];

export const QUESTS: Quest[] = [
  {
    id: 'q1',
    title: 'The Enterprise Refactor',
    description: 'Migrate the legacy monolith to a micro-frontend architecture.',
    reward: 'Title: System Architect',
    status: 'ACTIVE',
    type: 'MAIN',
    icon: Sword
  },
  {
    id: 'q2',
    title: 'The AI Integration',
    description: 'Imbue the platform with generative intelligence.',
    reward: '+2500 Mana',
    status: 'ACTIVE',
    type: 'MAIN',
    icon: Zap
  },
  {
    id: 'q3',
    title: 'Learn Rust',
    description: 'Master the ancient tongue of safety and speed.',
    reward: 'New Skill Tree',
    status: 'LOCKED',
    type: 'SIDE',
    icon: Scroll
  },
  {
    id: 'q4',
    title: 'Launch Indie Game',
    description: 'Release "The Dual Soul" on Steam.',
    reward: 'Achievement: Game Dev',
    status: 'COMPLETED',
    type: 'SIDE',
    icon: Trophy
  }
];

export const CERTIFICATES = [
  { title: "Grandmaster of React", issuer: "Meta Guild" },
  { title: "Cloud Architect", issuer: "Google Citadel" },
  { title: "Prompt Engineer Level V", issuer: "OpenAI Tower" }
];
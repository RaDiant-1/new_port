import { 
  Code, 
  Cpu, 
  Sparkles, 
  Palette, 
  Shield, 
  Zap,
  Database,
  Globe
} from 'lucide-react';
import { RealmType, SuperPower, Quest, Certificate } from './types';

export const SUPER_POWERS: SuperPower[] = [
  // TECHNICAL REALM
  {
    id: 'frontend-fortress',
    name: 'Frontend Fortress',
    icon: Shield,
    description: 'Constructing impenetrable user interfaces with modern React architecture.',
    alignment: RealmType.TECHNICAL,
    level: 99,
    subPowers: [
      {
        id: 'react-mastery',
        name: 'React 19 Architecture',
        description: 'Advanced patterns, Hooks, and Suspense boundaries.',
        tags: ['React', 'TypeScript', 'Performance'],
      },
      {
        id: 'tailwind-masonry',
        name: 'Tailwind Mastery',
        description: 'Rapid UI development with utility-first CSS strategies.',
        tags: ['CSS', 'Responsive', 'Design Systems'],
      },
      {
        id: 'state-sorcery',
        name: 'State Management Sorcery',
        description: 'Implementing robust state solutions like Redux or Zustand.',
        tags: ['Redux', 'Zustand', 'Context API'],
      },
      {
        id: 'api-rituals',
        name: 'API Integration Rituals',
        description: 'Seamlessly connecting to backend services and RESTful APIs.',
        tags: ['REST', 'GraphQL', 'Axios'],
      }
    ]
  },
  {
    id: 'backend-bastion',
    name: 'Backend Bastion',
    icon: Database,
    description: 'Server-side logic, API gateways, and database management.',
    alignment: RealmType.TECHNICAL,
    level: 75,
    subPowers: [
      {
        id: 'node-necromancy',
        name: 'Node.js Necromancy',
        description: 'Breathing life into servers and microservices.',
        tags: ['Node', 'Express', 'NestJS'],
      },
      {
        id: 'db-dungeons',
        name: 'SQL Vaults',
        description: 'Structuring data within SQL and NoSQL vaults.',
        tags: ['PostgreSQL', 'Mongo', 'Redis'],
      }
    ]
  },
  
  // ALTER EGO REALM
  {
    id: 'prompt-alchemy',
    name: 'Prompt Alchemy',
    icon: Sparkles,
    description: 'Transmuting natural language into digital gold via LLMs.',
    alignment: RealmType.ALTER_EGO,
    level: 88,
    subPowers: [
      {
        id: 'visual-spells',
        name: 'Visual Incantations',
        description: 'Generative art workflows using Midjourney and Gemini.',
        tags: ['GenAI', 'Art', 'Diffusers'],
      },
      {
        id: 'text-weaving',
        name: 'Narrative Weaving',
        description: 'Storytelling engines and persona constraints.',
        tags: ['LLM', 'Creative Writing', 'Gemini'],
      }
    ]
  },
  {
    id: 'chaos-design',
    name: 'Chaos Design',
    icon: Palette,
    description: 'Breaking grid systems to create unique, memorable experiences.',
    alignment: RealmType.ALTER_EGO,
    level: 60,
    subPowers: [
      {
        id: 'ui-sorcery',
        name: 'UI Sorcery',
        description: 'Animations, micro-interactions, and 3D web elements.',
        tags: ['Three.js', 'Framer Motion', 'WebGL'],
      }
    ]
  }
];

export const QUESTS: Quest[] = [
  {
    id: 'q1',
    title: "The E-Commerce Monolith",
    description: "Rebuild a legacy storefront using Next.js and Shopify headless API.",
    reward: "Mastery of Headless Commerce",
    status: 'COMPLETED',
    tags: ['Next.js', 'Shopify', 'GraphQL'],
    link: '#'
  },
  {
    id: 'q2',
    title: "SaaS Dashboard of Infinity",
    description: "Create a real-time analytics dashboard processing million of events.",
    reward: "+500 Experience",
    status: 'ACTIVE',
    tags: ['React', 'D3.js', 'WebSockets'],
    link: '#'
  },
  {
    id: 'q3',
    title: "The Generative Grimorie",
    description: "An AI-powered spellbook that generates bedtime stories for goblins.",
    reward: "Creativity +10",
    status: 'COMPLETED',
    tags: ['Gemini API', 'OpenAI', 'Next.js'],
    link: '#'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'c1',
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    date: '2023'
  },
  {
    id: 'c2',
    title: 'Google Cloud Professional Architect',
    issuer: 'Google Cloud',
    date: '2024'
  },
  {
    id: 'c3',
    title: 'Creative Coding with WebGL',
    issuer: 'Awwwards Academy',
    date: '2022'
  }
];
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
};

export type Experience = {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string[];
};

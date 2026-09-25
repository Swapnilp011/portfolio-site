import type { ComponentType, SVGProps } from 'react';
import type { LucideIcon } from 'lucide-react';

export type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export type Skill = {
  name: string;
  logo: string;
  icon?: IconComponent;
};

export type Project = {
  title: string;
  description: string[];
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type Experience = {
  title: string;
  company: string;
  companyLogo?: string;
  companyUrl?: string;
  period: string;
  location: string;
  description: string[];
};

export type SocialLink = {
  name: string;
  icon: IconComponent;
  url: string;
  color?: string;
  badgeLabel?: string;
};

export interface ScanResult {
  itemName: string;
  recyclable: boolean;
  recyclabilityScore: number;
  category: string;
  summary: string;
  disposalInstructions: string;
  tags: string[];
  co2Impact: string;
  fallback?: boolean;
  warning?: string;
}

export interface Program {
  id: string;
  emoji: string;
  title: string;
  organizer: string;
  type: 'Government' | 'NGO' | 'Private';
  description: string;
  status: string;
  joinedCount: number;
  featured?: boolean;
}

export interface EcoTip {
  id: string;
  iconName: string; // Name of Lucide icon to load dynamically
  title: string;
  description: string;
  impact: string;
}

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

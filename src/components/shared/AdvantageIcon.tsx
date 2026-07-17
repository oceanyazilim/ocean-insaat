import {
  Shield,
  Clock,
  Award,
  Users,
  HardHat,
  Wallet,
  FileText,
  ClipboardList,
  LifeBuoy,
  ScrollText,
} from 'lucide-react';
import type { Advantage } from '@/data/advantages';

const map: Record<Advantage['icon'], typeof Shield> = {
  shield: Shield,
  clock: Clock,
  award: Award,
  users: Users,
  'hard-hat': HardHat,
  wallet: Wallet,
  'file-text': FileText,
  'clipboard-list': ClipboardList,
  'life-buoy': LifeBuoy,
  scroll: ScrollText,
};

export function AdvantageIcon({ icon, className }: { icon: Advantage['icon']; className?: string }) {
  const Icon = map[icon] ?? Shield;
  return <Icon className={className ?? 'h-6 w-6'} strokeWidth={1.4} />;
}

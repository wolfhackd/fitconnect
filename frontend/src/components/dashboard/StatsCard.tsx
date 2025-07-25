import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface StatsCardProps {
  title: string;
  icon: ReactNode;
  className?: string;
  value: number;
}

export const StatsCard = ({
  title,
  icon,
  className,
  value,
}: StatsCardProps) => {
  return (
    <Card
      className={cn(
        'text-white transition-all duration-300 hover:scale-105',
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
        <div className="opacity-80">{icon}</div>
      </CardHeader>
      <CardContent className="mb-1 font-bold text-2xl">{value}</CardContent>
    </Card>
  );
};

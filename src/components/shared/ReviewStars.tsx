
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewStarsProps {
  rating: number;
  maxStars?: number;
  starSize?: number;
  className?: string;
}

export function ReviewStars({ rating, maxStars = 5, starSize = 16, className }: ReviewStarsProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-0.5 text-primary", className)}>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <Star key={`full-${i}`} fill="currentColor" size={starSize} />
        ))}
      {halfStar && <StarHalf key="half" fill="currentColor" size={starSize} />}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <Star key={`empty-${i}`} size={starSize} />
        ))}
    </div>
  );
}

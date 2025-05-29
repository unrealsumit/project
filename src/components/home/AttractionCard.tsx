
import type { Attraction } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ReviewStars } from '@/components/shared/ReviewStars';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface AttractionCardProps {
  attraction: Attraction;
}

export function AttractionCard({ attraction }: AttractionCardProps) {
  const imageProps = attraction.images[0].endsWith('.png"') ? { src: attraction.images[0].slice(0, -1), "data-ai-hint": attraction.images[0].split('" data-ai-hint="')[1] } : { src: attraction.images[0] || "https://placehold.co/300x200.png", "data-ai-hint": "placeholder image" };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-card">
      <div className="relative h-48 w-full">
        <Image
          src={imageProps.src}
          alt={attraction.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          data-ai-hint={imageProps['data-ai-hint']}
        />
      </div>
      <CardHeader className="pb-2 flex-shrink-0">
        <CardTitle className="text-xl md:text-2xl text-primary">{attraction.name}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2">{attraction.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <ReviewStars rating={attraction.rating} />
          <span className="text-sm text-muted-foreground">({attraction.reviewsCount} reviews)</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1 text-accent" />
          {attraction.category}
        </div>
      </CardContent>
      <CardFooter className="flex-shrink-0">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={`/attractions/${attraction.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

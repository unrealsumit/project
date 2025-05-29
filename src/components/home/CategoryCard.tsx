
import type { Category } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = category.icon;
  const imageProps = category.image?.endsWith('.png"') ? { src: category.image.slice(0, -1), "data-ai-hint": category.image.split('" data-ai-hint="')[1] } : { src: category.image || "https://placehold.co/300x200.png", "data-ai-hint": "placeholder image" };


  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-card">
      {category.image && (
        <div className="relative h-40 w-full">
          <Image
            src={imageProps.src}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={imageProps["data-ai-hint"]}
          />
        </div>
      )}
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-xl md:text-2xl text-primary">
          <IconComponent className="h-6 w-6" />
          {category.name}
        </CardTitle>
        {category.description && (
          <CardDescription className="text-muted-foreground">{category.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <Button asChild variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
          <Link href={`/search?category=${category.id}`}>
            Explore {category.name} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}


import { CategoryCard } from '@/components/home/CategoryCard';
import { AttractionCard } from '@/components/home/AttractionCard';
import { categories, attractions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const topAttractions = attractions.slice(0, 3); // Show top 3 attractions

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-lg overflow-hidden shadow-xl min-h-[300px] md:min-h-[400px] flex items-center justify-center p-6 md:p-12 text-center bg-gradient-to-r from-primary/80 to-accent/80">
        <Image 
          src="https://placehold.co/1200x400.png" 
          alt="Lucknow Skyline" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 z-0 opacity-30"
          data-ai-hint="Lucknow skyline panorama"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Welcome to Lucknow Navigator
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover the City of Nawabs - its rich history, vibrant culture, and delectable cuisine.
          </p>
          <Button size="lg" asChild className="bg-background text-primary hover:bg-background/90 shadow-md">
            <Link href="/ai-guide">
              <Sparkles className="mr-2 h-5 w-5" /> Get Personalized Tour Guide
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-primary border-b-2 border-primary/30 pb-2">Explore by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Top Attractions Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-primary border-b-2 border-primary/30 pb-2">Top Attractions</h2>
          <Button variant="link" asChild className="text-accent hover:text-accent/80">
            <Link href="/search?filter=top_attractions">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topAttractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </section>

      {/* Call to action for AI Tour Guide */}
      <section className="bg-card p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Need Help Planning Your Trip?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Let our AI Tour Guide craft a personalized itinerary for you based on your interests and preferences.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/ai-guide">
            <Sparkles className="mr-2 h-5 w-5" />
            Try AI Tour Guide
          </Link>
        </Button>
      </section>
    </div>
  );
}


'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, Filter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { attractions, categories } from '@/lib/data';
import type { Attraction, Category } from '@/lib/types';
import { AttractionCard } from '@/components/home/AttractionCard';import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>([]);

  useEffect(() => {
    let results = attractions;

    if (selectedCategory !== 'all') {
      const categoryName = categories.find(c => c.id === selectedCategory)?.name;
      if (categoryName) {
        results = results.filter(attraction => attraction.category.toLowerCase() === categoryName.toLowerCase());
      }
    }

    if (searchTerm) {
      results = results.filter(attraction =>
        attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attraction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (attraction.tags && attraction.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }
    
    setFilteredAttractions(results);
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger useEffect by state change, already handled
  };

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Search Attractions</h1>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for attractions, food, events..."
              className="pl-10 py-3 text-base h-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px] py-3 text-base h-auto">
              <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit" className="py-3 text-base h-auto bg-accent hover:bg-accent/90 text-accent-foreground">
            Search
          </Button>
        </form>
      </section>

      <section>
        {filteredAttractions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAttractions.map(attraction => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg py-10">
            No attractions found matching your criteria. Try a different search or category.
          </p>
        )}
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}

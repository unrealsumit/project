
import type { AITourSuggestion } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, MapPin } from 'lucide-react';

interface AIGuideResultCardProps {
  suggestion: AITourSuggestion;
}

export function AIGuideResultCard({ suggestion }: AIGuideResultCardProps) {
  return (
    <Card className="shadow-lg bg-card h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl text-primary">{suggestion.name}</CardTitle>
        <Badge variant="secondary" className="w-fit mt-1">{suggestion.category}</Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-3">{suggestion.description}</p>
        <div className="mt-2 p-3 bg-primary/10 rounded-md border border-primary/30">
          <p className="text-sm font-semibold text-primary flex items-center">
            <Lightbulb className="h-4 w-4 mr-2 shrink-0" />
            Why this is for you:
          </p>
          <p className="text-sm text-foreground/80">{suggestion.why}</p>
        </div>
      </CardContent>
      <CardFooter>
         <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
            <MapPin className="mr-2 h-4 w-4" />
            Find on Map (Coming Soon)
        </Button>
      </CardFooter>
    </Card>
  );
}

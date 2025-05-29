
'use client';

import { useState } from 'react';
import { AIGuideForm } from '@/components/ai-guide/AIGuideForm';
import { AIGuideResultCard } from '@/components/ai-guide/AIGuideResultCard';
import { personalizedTourSuggestions, type PersonalizedTourSuggestionsInput, type PersonalizedTourSuggestionsOutput } from '@/ai/flows/personalized-tour-suggestions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Wand2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function AIGuidePage() {
  const [suggestions, setSuggestions] = useState<PersonalizedTourSuggestionsOutput['suggestions'] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (data: PersonalizedTourSuggestionsInput) => {
    setIsLoading(true);
    setError(null);
    setSuggestions(null);
    try {
      const result = await personalizedTourSuggestions(data);
      setSuggestions(result.suggestions);
    } catch (e) {
      console.error("AI Guide Error:", e);
      setError('Failed to generate tour suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <section className="text-center">
        <Wand2 className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary">Personalized AI Tour Guide</h1>
        <p className="text-lg text-muted-foreground">
          Let our AI craft a unique Lucknow experience just for you! Tell us your interests and preferences, and we'll suggest the perfect spots.
        </p>
      </section>

      <section className="bg-card p-6 md:p-8 rounded-lg shadow-xl">
        <AIGuideForm onSubmit={handleFormSubmit} isLoading={isLoading} />
      </section>

      {isLoading && (
        <div className="text-center py-10">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-accent" />
          <p className="mt-4 text-lg text-muted-foreground">Generating your personalized suggestions...</p>
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="shadow-md">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {suggestions && suggestions.length > 0 && (
        <section>
          <Separator className="my-8" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-primary">Your Personalized Suggestions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.map((suggestion, index) => (
              <AIGuideResultCard key={index} suggestion={suggestion} />
            ))}
          </div>
        </section>
      )}

      {suggestions && suggestions.length === 0 && !isLoading && (
         <Alert className="shadow-md">
          <AlertTitle>No Suggestions Found</AlertTitle>
          <AlertDescription>We couldn't find any specific suggestions based on your input. Please try adjusting your interests or preferences.</AlertDescription>
        </Alert>
      )}
    </div>
  );
}

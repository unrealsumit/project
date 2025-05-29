
'use client';

import type React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Sparkles } from 'lucide-react';
import type { PersonalizedTourSuggestionsInput } from '@/ai/flows/personalized-tour-suggestions';

const formSchema = z.object({
  interests: z.string().min(3, { message: 'Please tell us at least one interest.' }).max(200),
  preferences: z.string().min(3, { message: 'Describe your preferences briefly.' }).max(500),
  numSuggestions: z.coerce.number().min(1).max(5).default(3),
});

type AIGuideFormValues = z.infer<typeof formSchema>;

interface AIGuideFormProps {
  onSubmit: (data: PersonalizedTourSuggestionsInput) => void;
  isLoading: boolean;
}

export function AIGuideForm({ onSubmit, isLoading }: AIGuideFormProps) {
  const form = useForm<AIGuideFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
      preferences: '',
      numSuggestions: 3,
    },
  });

  const handleSubmit: SubmitHandler<AIGuideFormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="interests" className="text-lg font-medium">Your Interests</FormLabel>
              <FormControl>
                <Input
                  id="interests"
                  placeholder="e.g., history, food, architecture, shopping"
                  {...field}
                  className="py-3 text-base h-auto"
                />
              </FormControl>
              <FormDescription>
                Comma-separated list of your interests.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferences"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="preferences" className="text-lg font-medium">Your Preferences</FormLabel>
              <FormControl>
                <Textarea
                  id="preferences"
                  placeholder="e.g., budget-friendly, relaxed pace, family activities, interested in local crafts"
                  rows={4}
                  {...field}
                  className="py-3 text-base h-auto"
                />
              </FormControl>
              <FormDescription>
                Describe your travel style, budget, pace, etc.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numSuggestions"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="numSuggestions" className="text-lg font-medium">Number of Suggestions</FormLabel>
              <FormControl>
                 <Input 
                    id="numSuggestions"
                    type="number" 
                    min="1" 
                    max="5" 
                    {...field} 
                    className="w-24 py-3 text-base h-auto"
                  />
              </FormControl>
              <FormDescription>
                How many suggestions (1-5) would you like?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          {isLoading ? (
            <>
              <Sparkles className="mr-2 h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Get Personalized Suggestions
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}


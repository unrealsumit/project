// src/ai/flows/personalized-tour-suggestions.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized tour suggestions in Lucknow.
 *
 * The flow takes user interests and preferences as input and returns a list of suggested attractions.
 * It exports:
 *   - personalizedTourSuggestions: The main function to call the flow.
 *   - PersonalizedTourSuggestionsInput: The input type for the function.
 *   - PersonalizedTourSuggestionsOutput: The output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTourSuggestionsInputSchema = z.object({
  interests: z
    .string()
    .describe(
      'A comma-separated list of the user\u0027s interests, such as history, food, architecture, or shopping.'
    ),
  preferences: z
    .string()
    .describe(
      'A description of the user\u0027s preferences, such as budget, pace of travel, and type of activities.'
    ),
  numSuggestions: z
    .number()
    .default(3)
    .describe('The maximum number of tour suggestions to return.'),
});
export type PersonalizedTourSuggestionsInput = z.infer<
  typeof PersonalizedTourSuggestionsInputSchema
>;

const PersonalizedTourSuggestionsOutputSchema = z.object({
  suggestions: z.array(
    z.object({
      name: z.string().describe('The name of the attraction.'),
      description: z.string().describe('A brief description of the attraction.'),
      category: z.string().describe('The category of the attraction (e.g., Monument, Food, Event).'),
      why: z
        .string()
        .describe('Why this attraction is suggested based on user interests and preferences.'),
    })
  ).describe('A list of personalized tour suggestions.'),
});
export type PersonalizedTourSuggestionsOutput = z.infer<
  typeof PersonalizedTourSuggestionsOutputSchema
>;

export async function personalizedTourSuggestions(
  input: PersonalizedTourSuggestionsInput
): Promise<PersonalizedTourSuggestionsOutput> {
  return personalizedTourSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTourSuggestionsPrompt',
  input: {schema: PersonalizedTourSuggestionsInputSchema},
  output: {schema: PersonalizedTourSuggestionsOutputSchema},
  prompt: `You are a tour guide expert in Lucknow, India. A tourist is visiting Lucknow and wants personalized tour suggestions based on their interests and preferences.

  Interests: {{{interests}}}
  Preferences: {{{preferences}}}

  Suggest a maximum of {{{numSuggestions}}} attractions in Lucknow that align with the tourist's interests and preferences. For each attraction, provide its name, a brief description, its category (e.g., Monument, Food, Event), and a short explanation of why it is a good suggestion based on the provided interests and preferences. Return in JSON format.

  {{#json examples=true}}
  {{/json}}`,
});

const personalizedTourSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedTourSuggestionsFlow',
    inputSchema: PersonalizedTourSuggestionsInputSchema,
    outputSchema: PersonalizedTourSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

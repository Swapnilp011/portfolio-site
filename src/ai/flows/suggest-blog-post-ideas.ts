// src/ai/flows/suggest-blog-post-ideas.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting blog post ideas related to a project or skill.
 *
 * It exports:
 * - `suggestBlogPostIdeas`: An async function that takes a topic and returns suggested blog post ideas.
 * - `SuggestBlogPostIdeasInput`: The input type for the `suggestBlogPostIdeas` function.
 * - `SuggestBlogPostIdeasOutput`: The output type for the `suggestBlogPostIdeas` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBlogPostIdeasInputSchema = z.object({
  topic: z
    .string()
    .describe('The topic (project or skill) for which to suggest blog post ideas.'),
});
export type SuggestBlogPostIdeasInput = z.infer<typeof SuggestBlogPostIdeasInputSchema>;

const SuggestBlogPostIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('An array of suggested blog post ideas.'),
});
export type SuggestBlogPostIdeasOutput = z.infer<typeof SuggestBlogPostIdeasOutputSchema>;

export async function suggestBlogPostIdeas(input: SuggestBlogPostIdeasInput): Promise<SuggestBlogPostIdeasOutput> {
  return suggestBlogPostIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBlogPostIdeasPrompt',
  input: {schema: SuggestBlogPostIdeasInputSchema},
  output: {schema: SuggestBlogPostIdeasOutputSchema},
  prompt: `You are a blog idea generator. Generate 5 blog post ideas related to the following topic:

Topic: {{{topic}}}

Blog Post Ideas:
`,
});

const suggestBlogPostIdeasFlow = ai.defineFlow(
  {
    name: 'suggestBlogPostIdeasFlow',
    inputSchema: SuggestBlogPostIdeasInputSchema,
    outputSchema: SuggestBlogPostIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

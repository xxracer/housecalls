'use server';

/**
 * @fileOverview Flow to enhance FAQ section by embedding JSON-LD structured data.
 *
 * - faqEnhancement - A function that enhances the FAQ section with JSON-LD.
 * - FaqEnhancementInput - The input type for the faqEnhancement function.
 * - FaqEnhancementOutput - The return type for the faqEnhancement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqEnhancementInputSchema = z.object({
  faqContent: z.string().describe('The FAQ content to be enhanced with JSON-LD structured data.'),
});
export type FaqEnhancementInput = z.infer<typeof FaqEnhancementInputSchema>;

const FaqEnhancementOutputSchema = z.object({
  enhancedFaqContent: z
    .string()
    .describe('The FAQ content enhanced with JSON-LD structured data.'),
});
export type FaqEnhancementOutput = z.infer<typeof FaqEnhancementOutputSchema>;

export async function faqEnhancement(input: FaqEnhancementInput): Promise<FaqEnhancementOutput> {
  return faqEnhancementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqEnhancementPrompt',
  input: {schema: FaqEnhancementInputSchema},
  output: {schema: FaqEnhancementOutputSchema},
  prompt: `You are an expert in creating JSON-LD structured data for FAQ sections of websites.

  You will receive the raw FAQ content and must return the same content wrapped in valid JSON-LD markup, optimized for Google and Gemini extraction. Ensure that the JSON-LD includes all relevant properties for FAQ schema.

  FAQ Content: {{{faqContent}}}

  Ensure the output is a valid JSON-LD structure.`,
});

const faqEnhancementFlow = ai.defineFlow(
  {
    name: 'faqEnhancementFlow',
    inputSchema: FaqEnhancementInputSchema,
    outputSchema: FaqEnhancementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

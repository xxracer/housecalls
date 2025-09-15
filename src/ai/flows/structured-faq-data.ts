'use server';

/**
 * @fileOverview Flow to embed FAQ JSON-LD structured data for enhanced search visibility.
 *
 * - structuredFaqData - A function that embeds FAQ JSON-LD data.
 * - StructuredFaqDataInput - The input type for the structuredFaqData function.
 * - StructuredFaqDataOutput - The return type for the structuredFaqData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StructuredFaqDataInputSchema = z.object({
  faqContent: z.string().describe('The FAQ content to be embedded in JSON-LD structured data.'),
});
export type StructuredFaqDataInput = z.infer<typeof StructuredFaqDataInputSchema>;

const StructuredFaqDataOutputSchema = z.object({
  structuredData: z
    .string()
    .describe('The FAQ content embedded in JSON-LD structured data format.'),
});
export type StructuredFaqDataOutput = z.infer<typeof StructuredFaqDataOutputSchema>;

export async function structuredFaqData(input: StructuredFaqDataInput): Promise<StructuredFaqDataOutput> {
  return structuredFaqDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'structuredFaqDataPrompt',
  input: {schema: StructuredFaqDataInputSchema},
  output: {schema: StructuredFaqDataOutputSchema},
  prompt: `You are an expert in creating JSON-LD structured data for FAQ sections of websites.

  You will receive the raw FAQ content and must return the same content wrapped in valid JSON-LD markup, optimized for Google and Gemini extraction. Ensure that the JSON-LD includes all relevant properties for FAQ schema.

  FAQ Content: {{{faqContent}}}

  Ensure the output is a valid JSON-LD structure.`,
});

const structuredFaqDataFlow = ai.defineFlow(
  {
    name: 'structuredFaqDataFlow',
    inputSchema: StructuredFaqDataInputSchema,
    outputSchema: StructuredFaqDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

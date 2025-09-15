'use server';

/**
 * @fileOverview Flow to generate concise answers for FAQ sections using an LLM.
 *
 * - faqAnswerGeneration - A function that generates an answer for a given FAQ question.
 * - FaqAnswerGenerationInput - The input type for the faqAnswerGeneration function.
 * - FaqAnswerGenerationOutput - The return type for the faqAnswerGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqAnswerGenerationInputSchema = z.object({
  question: z.string().describe('The FAQ question to generate an answer for.'),
});
export type FaqAnswerGenerationInput = z.infer<typeof FaqAnswerGenerationInputSchema>;

const FaqAnswerGenerationOutputSchema = z.object({
  answer: z
    .string()
    .describe('The generated answer for the FAQ question.'),
});
export type FaqAnswerGenerationOutput = z.infer<typeof FaqAnswerGenerationOutputSchema>;

export async function faqAnswerGeneration(input: FaqAnswerGenerationInput): Promise<FaqAnswerGenerationOutput> {
  return faqAnswerGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqAnswerGenerationPrompt',
  input: {schema: FaqAnswerGenerationInputSchema},
  output: {schema: FaqAnswerGenerationOutputSchema},
  prompt: `You are an expert in providing concise and informative answers to frequently asked questions.

  Given the following question, generate a brief and helpful answer.

  Question: {{{question}}}

  Answer:`,
});

const faqAnswerGenerationFlow = ai.defineFlow(
  {
    name: 'faqAnswerGenerationFlow',
    inputSchema: FaqAnswerGenerationInputSchema,
    outputSchema: FaqAnswerGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

'use server';

/**
 * @fileOverview A component customizer AI agent.
 *
 * - customizeComponent - A function that handles the component customization process.
 * - CustomizeComponentInput - The input type for the customizeComponent function.
 * - CustomizeComponentOutput - The return type for the customizeComponent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomizeComponentInputSchema = z.object({
  componentName: z.string().describe('The name of the component to customize.'),
  criteria: z.string().describe('The customization criteria, such as color, size, or animation style.'),
});
export type CustomizeComponentInput = z.infer<typeof CustomizeComponentInputSchema>;

const CustomizeComponentOutputSchema = z.object({
  codeSnippet: z.string().describe('The customized code snippet for the component.'),
  explanation: z.string().describe('An explanation of the changes made to the component.'),
});
export type CustomizeComponentOutput = z.infer<typeof CustomizeComponentOutputSchema>;

export async function customizeComponent(input: CustomizeComponentInput): Promise<CustomizeComponentOutput> {
  return customizeComponentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customizeComponentPrompt',
  input: {schema: CustomizeComponentInputSchema},
  output: {schema: CustomizeComponentOutputSchema},
  prompt: `You are an expert web developer specializing in customizing MagicUI components.

You will use the component name and customization criteria to generate a customized code snippet for the component.

Component Name: {{{componentName}}}
Customization Criteria: {{{criteria}}}

Provide the customized code snippet and an explanation of the changes made.
`,
});

const customizeComponentFlow = ai.defineFlow(
  {
    name: 'customizeComponentFlow',
    inputSchema: CustomizeComponentInputSchema,
    outputSchema: CustomizeComponentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

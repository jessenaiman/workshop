
'use server';
/**
 * @fileOverview An AI agent for creating web design images.
 *
 * - createWebImage - Generates an image based on a prompt, style, aspect ratio, and use case.
 * - CreateWebImageInput - The input type for the createWebImage function.
 * - CreateWebImageOutput - The return type for the createWebImage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CreateWebImageInputSchema = z.object({
  prompt: z.string().describe('The main description of the image to generate.'),
  style: z.string().describe('The illustration or artistic style of the image (e.g., Flat, 3D, Photorealistic).'),
  aspectRatio: z.string().describe('The desired aspect ratio for the image (e.g., "16:9", "1:1").'),
  useCase: z.string().describe('The intended use case for the image in web design (e.g., Hero Image, Logo, Background).'),
});
export type CreateWebImageInput = z.infer<typeof CreateWebImageInputSchema>;

const CreateWebImageOutputSchema = z.object({
  imageUrl: z.string().describe("The data URI of the generated image. Expected format: 'data:image/png;base64,<encoded_data>'."),
});
export type CreateWebImageOutput = z.infer<typeof CreateWebImageOutputSchema>;

export async function createWebImage(input: CreateWebImageInput): Promise<CreateWebImageOutput> {
  return createWebImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createWebImagePrompt',
  input: { schema: CreateWebImageInputSchema },
  prompt: `
    You are an expert image generation AI specializing in creating assets for professional web design.
    Generate a high-quality, production-ready image based on the following specifications.

    **Primary Subject:** {{{prompt}}}
    **Artistic Style:** {{{style}}}
    **Intended Use Case:** {{{useCase}}}
    **Aspect Ratio:** {{{aspectRatio}}}

    The final image should be clean, modern, and suitable for direct use on a website.
  `,
});

const createWebImageFlow = ai.defineFlow(
  {
    name: 'createWebImageFlow',
    inputSchema: CreateWebImageInputSchema,
    outputSchema: CreateWebImageOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: (await prompt.render({ input })).prompt,
      config: {
        responseModalities: ['IMAGE', 'TEXT'],
        // Note: The image generation model does not currently support explicit aspect ratio control via API.
        // The aspect ratio from the prompt serves as a strong hint to the model.
      },
    });

    if (!media || !media.url) {
      throw new Error('Image generation failed to produce an output.');
    }

    return { imageUrl: media.url };
  }
);

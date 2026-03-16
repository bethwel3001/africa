'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating various types of promotional content
 * for the INTERNATIONAL PAN-AFRICAN YOUTH CONFERENCE. It allows conference organizers to generate
 * snippets, social media posts, and event descriptions tailored to specific audiences and languages.
 *
 * - generateConferenceContent - A function that triggers the content generation process.
 * - GenerateConferenceContentInput - The input type for the generateConferenceContent function.
 * - GenerateConferenceContentOutput - The return type for the generateConferenceContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the content generator flow
const GenerateConferenceContentInputSchema = z.object({
  conferenceName: z
    .string()
    .default('INTERNATIONAL PAN-AFRICAN YOUTH CONFERENCE')
    .describe('The full name of the conference.'),
  conferenceDates: z
    .string()
    .default('21st – 23rd October 2026')
    .describe('The dates of the conference.'),
  conferenceTheme: z
    .string()
    .default('Pan-African Youth for a Just, Inclusive & Sustainable Africa')
    .describe('The overarching theme of the conference.'),
  targetAudience: z
    .enum([
      'Students',
      'Entrepreneurs',
      'Policymakers',
      'Youth Groups',
      'General Public',
      'Partners',
      'Media',
      'Sponsors',
    ])
    .describe('The target audience for the generated content.'),
  contentType: z
    .enum([
      'Social Media Post',
      'Event Description',
      'Promotional Snippet',
      'Newsletter Excerpt',
      'Website Headline',
    ])
    .describe('The type of content to generate.'),
  language: z
    .enum(['English', 'Arabic', 'French', 'Portuguese', 'Spanish', 'Swahili'])
    .describe('The language for the generated content.'),
  additionalContext: z
    .string()
    .optional()
    .describe('Any additional specific details or instructions for the content generation.'),
});

export type GenerateConferenceContentInput = z.infer<
  typeof GenerateConferenceContentInputSchema
>;

// Define the output schema for the content generator flow
const GenerateConferenceContentOutputSchema = z.object({
  generatedContent: z.string().describe('The AI-generated content.'),
});

export type GenerateConferenceContentOutput = z.infer<
  typeof GenerateConferenceContentOutputSchema
>;

export async function generateConferenceContent(
  input: GenerateConferenceContentInput
): Promise<GenerateConferenceContentOutput> {
  return conferenceContentGeneratorFlow(input);
}

// Define the Genkit prompt for content generation
const contentGeneratorPrompt = ai.definePrompt({
  name: 'contentGeneratorPrompt',
  input: {schema: GenerateConferenceContentInputSchema},
  output: {schema: GenerateConferenceContentOutputSchema},
  prompt: `You are an expert content creator for the 'INTERNATIONAL PAN-AFRICAN YOUTH CONFERENCE' hosted by the African Union Students' Platform (AUSP). Your goal is to generate engaging and relevant content based on the provided conference details, target audience, content type, and language.

--- CONFERENCE DETAILS ---
Conference Name: {{{conferenceName}}}
Dates: {{{conferenceDates}}}
Theme: {{{conferenceTheme}}}
Mission: Uniting African youth to drive sustainable development, innovation, and Pan-Africanism.

**About the Conference (Background & Rationale):**
The African Union Students' Platform (AUSP) is a continental community with membership spanning over 46 African countries and the diaspora. With over 70% of sub-Saharan Africa under 30, this conference is AUSP’s flagship intervention to translate potential into power.
Conference Objectives: Analyze & Align, Ideate & Innovate, Connect & Empower, Amplify & Act.

**About AUSP:**
Mission: Education, Connection, Empowerment. Role: Initiator of the conference.

**Thematic Pillars:**
1. Pan-Africanism Reawakened – Actionable modern Pan-Africanism, digital Pan-Africanism, cultural narratives, diaspora engagement, Blue Economy.
2. Ethical Leadership & Active Citizenship – Transparency, anti-corruption, tech for civic engagement, electoral integrity.
3. Peace, Security & Social Cohesion – Youth as peacemakers, conflict prevention, addressing extremism.
4. Inclusive Growth & Social Impact – Structural inequalities, youth unemployment, GBV, empowerment of women, youth, PWDs.
5. Industry, Trade, Innovation & Digitalization – AfCFTA, Fourth Industrial Revolution, AgriTech, FinTech, BlueTech, HealthTech.

**Key Initiatives:**
- AUSP Youth Solutions Challenge: Categories (Environment, Education, Health, etc.), seed funding ($2,500 per winner), incubation.
- Implementation & Accountability Mechanisms: Digital Progress Dashboard, annual virtual impact forum, mentorship calendar.

--- INSTRUCTIONS ---

Generate content for the '{{{targetAudience}}}' audience. The content type should be '{{{contentType}}}'. The language should be '{{{language}}}'.

Focus on highlighting the core mission and the call to action: "Be Part of the Reimagining".

If the content type is 'Social Media Post', include relevant hashtags like #AUSPReimagines2063 and #TheAfricaWeWant, and keep it concise.
If the content type is 'Website Headline', make it short, impactful, and attention-grabbing.

Additional context or specific instructions: {{{additionalContext}}}

--- GENERATED CONTENT ---`,
});

// Define the Genkit flow
const conferenceContentGeneratorFlow = ai.defineFlow(
  {
    name: 'conferenceContentGeneratorFlow',
    inputSchema: GenerateConferenceContentInputSchema,
    outputSchema: GenerateConferenceContentOutputSchema,
  },
  async input => {
    const {output} = await contentGeneratorPrompt(input);
    return output!;
  }
);

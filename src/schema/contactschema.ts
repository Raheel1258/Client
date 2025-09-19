import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.email({
    pattern:
      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i,
    message: 'Invalid email address',
  }),
  linkedInUrl: z
    .string()
    .url('Must be a valid URL')
    .regex(
      /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_%]+\/?$/,
      'Invalid LinkedIn URL',
    ),
  message: z
    .string()
    .min(5, { message: 'Message must be at least 5 characters' }),
});

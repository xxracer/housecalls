'use server';
import 'dotenv/config';
import { z } from 'zod';

// More robust schema, matching client-side validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().optional(),
});


const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const validation = contactFormSchema.safeParse(data);

  if (!validation.success) {
    console.error('Form validation failed:', validation.error.flatten().fieldErrors);
    return { success: false, message: 'Invalid form data.' };
  }

  if (!MAKE_WEBHOOK_URL) {
    console.error('Make.com webhook URL is not configured.');
    return { success: false, message: 'Server configuration error.' };
  }

  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validation.data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to submit to Make.com webhook', errorText);
      return { success: false, message: 'Could not submit form.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}

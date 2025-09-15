'use server';

import { z } from 'zod';

// Define a schema for the expected review structure from Google API
const reviewSchema = z.object({
  author_name: z.string(),
  rating: z.number(),
  text: z.string(),
  profile_photo_url: z.string().url(),
  relative_time_description: z.string(),
});

// Define a schema for the overall API response
const apiResponseSchema = z.object({
  result: z.object({
    reviews: z.array(reviewSchema).optional(),
  }),
  status: z.string(),
});

export type Review = z.infer<typeof reviewSchema>;

export async function getGoogleReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error("Google Maps API Key or Place ID is not configured.");
    return [];
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate once per hour
    const data = await response.json();

    const parsedData = apiResponseSchema.safeParse(data);

    if (!parsedData.success || parsedData.data.status !== 'OK') {
      console.error("Failed to fetch or parse Google reviews:", parsedData.success ? parsedData.data : parsedData.error);
      return [];
    }

    return parsedData.data.result.reviews || [];
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return [];
  }
}

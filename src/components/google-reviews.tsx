import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { getGoogleReviews, type Review } from '@/app/actions/google-reviews';
import Image from 'next/image';

// A simple component to render a single review
function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="h-full bg-background/70">
      <CardContent className="p-6 text-center flex flex-col items-center justify-center">
        <Image 
          src={review.profile_photo_url} 
          alt={review.author_name} 
          width={48} 
          height={48} 
          className="rounded-full mb-4"
        />
        <div className="flex mb-2">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
          ))}
          {[...Array(5 - review.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-gray-300 fill-gray-300" />
          ))}
        </div>
        <p className="text-muted-foreground italic text-sm line-clamp-4">"{review.text}"</p>
        <p className="mt-4 font-bold text-foreground">- {review.author_name}</p>
        <p className="text-sm text-muted-foreground">{review.relative_time_description}</p>
      </CardContent>
    </Card>
  );
}

// The main async component that fetches and displays reviews
export async function GoogleReviews() {
  const reviews = await getGoogleReviews();

  if (!reviews || reviews.length === 0) {
    return <p className="text-center text-muted-foreground">Could not load reviews at this time.</p>;
  }

  // Sort reviews by most recent and take the top 4-5
  const sortedReviews = reviews
    .sort((a, b) => {
      // This is a simple sort, a more robust one would parse the time description
      if (a.relative_time_description.includes('week')) return -1;
      if (b.relative_time_description.includes('week')) return 1;
      return 0;
    })
    .slice(0, 4); // Show the top 4 reviews

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sortedReviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
}

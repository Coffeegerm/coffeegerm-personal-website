import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ReviewCard from "../../../components/ReviewCard";
import { BookReview } from "../../../types/BookReview";

const BookReviews = () => {
  const router = useRouter();

  const [bookReviews, setBookReviews] = useState<Array<BookReview>>([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/book-reviews")
      .then((res) => res.json())
      .then((data) => setBookReviews(data.reviews))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ margin: "4rem 2rem" }}>
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {!loading &&
        bookReviews?.map((review, i) => (
          <ReviewCard
            key={i}
            review={review}
            onClick={() => {
              router.push(`book-reviews/${review.id}`);
            }}
          />
        ))}
    </div>
  );
};

export default BookReviews;

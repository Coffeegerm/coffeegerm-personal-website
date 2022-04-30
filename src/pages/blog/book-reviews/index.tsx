import { useRouter } from "next/router";
import { ReviewCard } from "../../../components";
import { BookReview } from "../../../types/BookReview";
import { useFetch } from "../../../hooks";
import styled from "styled-components";

const ReviewGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
`;

const BookReviews = () => {
  const { push } = useRouter();

  const { data: bookReviews, loading } =
    useFetch<Array<BookReview>>("/api/book-reviews");

  return (
    <div style={{ margin: "6rem 2rem 2rem 2rem" }}>
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {!loading && (
        <ReviewGrid>
          {bookReviews?.map((review, i) => (
            <ReviewCard
              key={i}
              review={review}
              onClick={() => {
                push(`book-reviews/${review.id}`);
              }}
            />
          ))}
        </ReviewGrid>
      )}
    </div>
  );
};

export default BookReviews;

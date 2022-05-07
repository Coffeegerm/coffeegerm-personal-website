import { useRouter } from "next/router";
import { ReviewCard } from "../../../components";
import { BookReview } from "../../../types/BookReview";
import { useFetch } from "../../../hooks";
import styled from "styled-components";

const ReviewGrid = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const BookReviews = () => {
  const { push } = useRouter();

  const { data: bookReviews, loading } =
    useFetch<Array<BookReview>>("/api/book-reviews");

  return (
    <div style={{ margin: "1rem 0" }}>
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

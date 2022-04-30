import { useRouter } from "next/router";
import { BookReview } from "../../../types/BookReview";
import { useFetch } from "../../../hooks";

export default function BookReviewDetails() {
  const { query } = useRouter();
  const { id } = query;

  const { data: bookReviews, loading } = useFetch<{
    info: BookReview;
    content: Array<string>;
  }>(`/api/book-reviews/${id}`);

  return (
    <div style={{ margin: "4rem 2rem" }}>
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {!loading && bookReviews && (
        <div style={{ margin: "2rem" }}>
          <h1>{bookReviews.info.title.value}</h1>
          <p>{bookReviews.info.author.value}</p>
          <p>{bookReviews.info.dateFinished.value.start}</p>
          {bookReviews.info.genres.value?.map((val) => (
            <div style={{ backgroundColor: val.color }} key={val.value}>
              <p>{val.value}</p>
            </div>
          ))}
          <p>{bookReviews.info.rating.value}/5</p>

          {bookReviews.content.map((val) => (
            <p key={val}>{val}</p>
          ))}
        </div>
      )}
    </div>
  );
}

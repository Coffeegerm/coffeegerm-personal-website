import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BookReviewDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [bookReviews, setBookReviews] = useState<
    undefined | { info: BookReview; content: Array<string> }
  >(undefined);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/book-reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setBookReviews(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div style={{margin: '4rem 2rem'}}>
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
};

export default BookReviewDetails;

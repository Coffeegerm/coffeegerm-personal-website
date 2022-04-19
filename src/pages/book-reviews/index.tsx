import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
        bookReviews?.map((val, i) => (
          <div
            key={i}
            style={{ border: "1px solid gray", margin: "2rem" }}
            onClick={() => {
              router.push(`book-reviews/${val.id}`);
            }}
          >
            <h1>{val.title.value}</h1>
            <p>{val.author.value}</p>
            <p>{val.dateFinished.value.start}</p>
            {val.genres.value?.map((val) => (
              <div style={{ backgroundColor: val.color }} key={val.value}>
                <p>{val.value}</p>
              </div>
            ))}
            <p>{val.rating.value}/5</p>
          </div>
        ))}
    </div>
  );
};

export default BookReviews;

import { useRouter } from "next/router";
import { BookReview } from "../../../types/BookReview";
import { useFetch } from "../../../hooks";
import { Chip, Card } from "../../../components";

export default function BookReviewDetails() {
  const { query } = useRouter();
  const { id } = query;

  const { data: bookReviews, loading } = useFetch<{
    info: BookReview;
    content: Array<string>;
  }>(`/api/book-reviews/${id}`);

  return (
    <div style={{ margin: "1rem", flex: 1 }}>
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {!loading && bookReviews && (
        <Card style={{ margin: "2rem", height: "auto" }}>
          <Card.Header>{bookReviews.info.title.value}</Card.Header>
          <Card.Content>
            <Card.Label>Author:</Card.Label>
            <p>{bookReviews.info.author.value}</p>
          </Card.Content>
          <Card.Content>
            <Card.Label>Date Finished:</Card.Label>
            <p>{bookReviews.info.dateFinished.value.start}</p>
          </Card.Content>
          <Card.Content>
            <Card.Label>Genres:</Card.Label>
            {bookReviews.info.genres.value?.map((val) => (
              <Chip bgColor={val.color} key={val.value}>
                {val.value}
              </Chip>
            ))}
          </Card.Content>
          <Card.Content>
            <Card.Label>Rating:</Card.Label>
            <p>{bookReviews.info.rating.value}/5</p>
          </Card.Content>

          {bookReviews.content.map((val) => (
            <Card.Content key={val}>
              <p >{val}</p>
            </Card.Content>
          ))}
        </Card>
      )}
    </div>
  );
}

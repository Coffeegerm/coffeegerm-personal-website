import React, { MouseEventHandler } from "react";
import { BookReview } from "../../types/BookReview";
import Card from "../Card";
import Chip from "../Chip";

type ReviewCardProps = {
  review: BookReview;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};

export default function ReviewCard({ onClick, review }: ReviewCardProps) {
  return (
    <Card onClick={onClick}>
      <Card.Header>{review.title.value}</Card.Header>
      <Card.Content>
        <Card.Label>Author:</Card.Label>
        <p>{review.author.value}</p>
      </Card.Content>
      <Card.Content>
        <Card.Label>Date finished:</Card.Label>
        <p>{review.dateFinished.value.start}</p>
      </Card.Content>
      <Card.Content>
        <Card.Label>Genres:</Card.Label>
        {review.genres.value?.map((val) => (
          <Chip bgColor={val.color} key={val.value}>
            {val.value}
          </Chip>
        ))}
      </Card.Content>
      <Card.Content>
        <Card.Label>Rating:</Card.Label>
        <p>{review.rating.value}/5</p>
      </Card.Content>
    </Card>
  );
}

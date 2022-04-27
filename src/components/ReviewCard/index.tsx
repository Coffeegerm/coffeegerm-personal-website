import React, { MouseEventHandler } from "react";
import { BookReview } from "../../types/BookReview";
import styles from "./ReviewCard.module.css";

export default function ReviewCard({
  onClick,
  review,
}: {
  review: BookReview;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}) {
  return (
    <div className={styles.container} onClick={onClick}>
      <h1>{review.title.value}</h1>
      <div>
        <h4>Author:</h4>
        <p>{review.author.value}</p>
      </div>
      <div>
        <h4>Date finished:</h4>
        <p>{review.dateFinished.value.start}</p>
      </div>
      {review.genres.value?.map((val) => (
        <p style={{ backgroundColor: val.color }} key={val.value}>
          {val.value}
        </p>
      ))}
      <div>
        <h4>Rating</h4>
        <p>{review.rating.value}/5</p>
      </div>
    </div>
  );
}

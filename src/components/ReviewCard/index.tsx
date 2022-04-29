import React, { MouseEventHandler } from "react";
import { BookReview } from "../../types/BookReview";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid gray;
  margin: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: beige;
  color: black;
  box-shadow: 5px 5px white;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
  }

  div p {
    margin-left: 1rem;
  }
`;

type ReviewCardProps = {
  review: BookReview;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};

export default function ReviewCard({ onClick, review }: ReviewCardProps) {
  return (
    <Container onClick={onClick}>
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
    </Container>
  );
}

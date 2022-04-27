import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "4rem",
      }}
    >
      <div>
        <h1>Thoughts and other things</h1>
        <div style={{ justifySelf: "start" }}>
          <p>
            I have a lot of hobbies and interests and like to write about my
            thoughts.
          </p>
          <p>
            Feel free to let me know what you think about some of my writings
            and opinions
          </p>
        </div>
        <Link href="/blog/book-reviews">
          <a style={{ fontSize: "24px" }}>Book Reviews</a>
        </Link>
      </div>
    </div>
  );
}

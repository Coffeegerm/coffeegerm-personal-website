import { useState, useEffect } from "react";

const BookReviews = () => {
  const [blocks, setBlocks] = useState({});

  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then((res) => res.json())
  //     .then((data) => setBlocks(data));
  // }, []);


  return (
    <div>
      {/* <>{
        blocks.pages?.map((page) => {
          return <div>
            <h1>{page.}</h1>
          </div>
        })
      }</> */}
    </div>
  );
};

export default BookReviews;

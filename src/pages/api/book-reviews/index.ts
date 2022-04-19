// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { convertBookReviewResponseToBookReview } from "../../../utils/data";
import { BookReviewResponse } from "../../../types/responses/BookReviewResponse";
import { BookReview } from "../../../types/BookReview";

const { NOTION_CLIENT_AUTH_SECRET, BOOK_REVIEWS_DATABASE_ID } = process.env;

const notion = new Client({
  auth: NOTION_CLIENT_AUTH_SECRET,
});

type Data = {
  reviews?: any;
  error?: any;
};

export const getBookReviews = async () => {
  const response = await notion.databases.query({
    database_id: BOOK_REVIEWS_DATABASE_ID as string,
  });

  // despite what the type says these values match this type
  const rows = response.results as unknown as BookReviewResponse[];

  // morph the structure into something more easily used by the frontend
  return rows.map(
    (val: BookReviewResponse): BookReview =>
      convertBookReviewResponseToBookReview(val)
  );
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (!BOOK_REVIEWS_DATABASE_ID) {
    return res.status(500).json({ error: "Key missing" });
  }

  try {
    // get book review data
    const reviews = await getBookReviews();
    res.status(200).json({ reviews });
    return;
  } catch (error) {
    res.status(500).json({ error: JSON.stringify(error) });
  }
  res.status(200).json({ reviews: [] });
};

export default handler;

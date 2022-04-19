import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { convertBookReviewResponseToBookReview } from "../../../utils/data";
import { BookReviewResponse } from "../../../types/responses/BookReviewResponse";

const { NOTION_CLIENT_AUTH_SECRET } = process.env;

const notion = new Client({
  auth: NOTION_CLIENT_AUTH_SECRET,
});

export const getPage = async (reviewId: string) => {
  const page = await notion.pages.retrieve({ page_id: reviewId });

  const pageBlocks = await notion.blocks.children.list({
    block_id: reviewId,
    page_size: 100,
  });

  const bookResponse = page as unknown as BookReviewResponse;

  const info = convertBookReviewResponseToBookReview(bookResponse);

  const pageBlocksToTransform = pageBlocks.results as unknown as {
    type: string;
    paragraph: {
      rich_text: { plain_text: string }[];
    };
  }[];

  const content = pageBlocksToTransform
    .map((val) => {
      if (val.type === "paragraph") {
        return val.paragraph.rich_text[0]?.plain_text;
      }
    })
    .filter((val) => val !== undefined);

  return {
    info,
    content,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const blog = await getPage(id as string);

  res.status(200).json(blog);
}

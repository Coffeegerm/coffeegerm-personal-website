// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: "secret_hyaqLsVD8E6ha89FhKaYg8oAFvejGj5RBVyEZVn8Y2q",
});

const bookReviewsNotionDatabaseId = "9547880985b948589b5d9d988de5e851";

const pageId = "93a2d0523467400fa2608e374b11c850";

type Data = {
  pages: any;
  response?: any;
  bookReviewPageMaybeFromTitle?: any;
  specificPage?: any;
};
const key =
  "https://www.notion.so/9547880985b948589b5d9d988de5e851?v=f8b1000abef94ef3a60c5fee18791d0b";

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    // get book review data
    const response = await notion.databases.query({
      database_id: bookReviewsNotionDatabaseId,
    });
    // get page ids from book database results
    const pageIds = response.results.map((page) => page.id);

    const pagesPromises = pageIds.map(async (element) => {
      const page = await notion.pages.retrieve({
        page_id: element,
      });
      return page;
    });

    const specificPage = await notion.pages.retrieve({
      page_id: "6f72799f46a14ba084dc99a4d272c91d",
    });

    const specificPageProps = await notion.;

    const pagesResolved = await Promise.all(pagesPromises);
    console.log(pagesResolved);
    res
      .status(200)
      .json({ pages: pagesResolved, response: response, specificPage });
    return;
  } catch (error) {
    console.error(error.body);
  }
  res.status(200).json({ pages: JSON.stringify("{}") });
};

export default handler;

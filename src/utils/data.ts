export const convertBookReviewResponseToBookReview = (
  val: BookReviewResponse
): BookReview => {
  const { Author, Genres, Title } = val.properties;
  const titleItem = Title.title[0];
  return {
    id: val.id,
    author: {
      id: Author.id,
      value: Author.rich_text.map((val) => val.plain_text).join(" "),
    },
    dateFinished: {
      id: val.properties["Date Finished"].id,
      value: {
        start: val.properties["Date Finished"].date.start,
        end: val.properties["Date Finished"].date.end,
      },
    },
    genres: {
      id: Genres.id,
      value: Genres.multi_select?.map((val) => ({
        color: val.color,
        value: val.name,
      })),
    },
    rating: {
      id: val.properties["/5"].id,
      color: val.properties["/5"].select?.color,
      value: val.properties["/5"].select?.name,
    },
    title: {
      id: Title.id,
      value: titleItem.plain_text,
      annotation: titleItem.annotations,
    },
  };
};

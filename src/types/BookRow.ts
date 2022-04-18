type MultiSelectItem = {
  id: string;
  name: string;
  color: string;
};

type TextItem = {};

type RichTextItem = {
  type: string;
  text: {
    content: string;
  };
  plain_text: string;
};

export type BookRow = {
  id: string;
  properties: {
    Genres: {
      id: string;
      type: string;
      multi_select: Array<{ id: string; name: string; color: string }>;
    };
    "/5": {
      id: string;
      type: string;
      select: {
        id: string;
        name: string;
        color: string;
      }
    };
    "Author": {

    }
  };
};

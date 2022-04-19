import { DateValue, MultiSelectValue, RichTextValue, SelectItemValue } from "./notion";

export type BookReviewResponse = {
  cover: string | null;
  created_by: {
    id: string;
    object: string;
  };
  created_time: string;
  id: string;
  properties: {
    "/5": {
      id: string;
      type: "select";
      select: SelectItemValue;
    };
    Author: {
      id: string;
      type: "rich_text";
      rich_text: RichTextValue;
    };
    "Date Finished": {
      date: DateValue;
      id: string;
      type: "date";
    };
    Genres: {
      id: string;
      multi_select: MultiSelectValue;
      type: "multi_select";
    };
    Status: {
      id: string;
      select: MultiSelectValue;
      type: 'multi_select'
    };
    Title: {
      id: string
      title: RichTextValue
    }
  };
};

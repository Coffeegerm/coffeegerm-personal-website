// structure of items received from notion api endpoints

type NotionPropertyTypes = "select" | "rich_text" | "date" | "multi_select";

type Annotations = {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
};

type SelectItemValue = {
  color: string;
  id: string;
  name: string;
} | null;

type RichTextValue = Array<{
  annotations: Annotations;
  href: null | string;
  plain_text: string;
  text: {
    content: string;
    link: null | string;
  };
  type: string;
}>;

type DateValue = {
  start: string | null;
  end: string | null;
  time_zone: string | null;
};

type MultiSelectValue = Array<{
  color: string;
  id: string;
  name: string;
}> | null;

type ParagraphValue = {
  rich_text: Array<RichTextValue>
}

// structure of items received from notion api endpoints

export type NotionPropertyTypes = "select" | "rich_text" | "date" | "multi_select";

export type Annotations = {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
};

export type SelectItemValue = {
  color: string;
  id: string;
  name: string;
} | null;

export type RichTextValue = Array<{
  annotations: Annotations;
  href: null | string;
  plain_text: string;
  text: {
    content: string;
    link: null | string;
  };
  type: string;
}>;

export type DateValue = {
  start: string | null;
  end: string | null;
  time_zone: string | null;
};

export type MultiSelectValue = Array<{
  color: string;
  id: string;
  name: string;
}> | null;

export type ParagraphValue = {
  rich_text: Array<RichTextValue>
}

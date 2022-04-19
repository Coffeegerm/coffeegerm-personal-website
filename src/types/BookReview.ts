type BookReview = {
  id: string;
  rating: {
    id: string;
    color?: string;
    value?: string;
  };
  author: {
    id: string;
    value: string;
  };
  dateFinished: {
    id: string;
    value: {
      start: string | null;
      end: string | null;
    };
  };
  genres: {
    id: string;
    value?: Array<{ value: string; color: string }>;
  };
  title: {
    id: string;
    value: string;
    annotation: Annotations;
  }
};

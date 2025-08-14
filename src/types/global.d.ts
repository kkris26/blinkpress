interface Multimedia {
  url: string;
}
export interface Article {
  section: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  published_date: string;
  multimedia: Multimedia[];
}

export interface Children {
  children: ReactNode;
}


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


export interface NewsSearch {
  abstract: string;
  byline: { original: string };
  headline: { main: string };
  multimedia: { default: { url: string } };
  section_name: string;
  pub_date: string;
  web_url: string;
}

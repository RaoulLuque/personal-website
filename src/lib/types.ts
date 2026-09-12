export interface Project {
  title: string;
  blurb?: string;
  image?: string;
  href?: string;
  wide?: boolean;
  split?: boolean;
  year?: number;
}

export interface Paper {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  note?: string;
  figure?: string;
  links?: {
    pdf?: string;
    arxiv?: string;
    code?: string;
    bibtex?: string;
    project?: string;
  };
}

export interface Course {
  title: string;
  role: string;
  term: string;
  institution?: string;
  blurb?: string;
  href?: string;
  image?: string;
  wide?: boolean;
}

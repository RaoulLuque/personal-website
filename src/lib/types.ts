export interface Project {
  title: string;
  blurb?: string;
  image?: string;
  href?: string;
  githubHref?: string;
  imageHref?: string;
  imageBorder?: string;
  imageBorderWidth?: number;
  imageBorderRadius?: number;
  wide?: boolean;
  split?: boolean;
  reveal?: boolean;
  revealOffset?: number;
  imageFit?: 'contain' | 'cover';
  imageAnchor?: 'top' | 'center' | 'bottom';
  imageBleed?: number;
  imageBleedTop?: number;
  imageBleedBottom?: number;
  imageBleedLeft?: number;
  imageBleedCenter?: boolean;
  credit?: string;
  creditHref?: string;
  year?: number;
}

export interface Paper {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  note?: string;
  figure?: string;
  figureHref?: string;
  imageBleed?: number;
  imageBleedTop?: number;
  imageBleedBottom?: number;
  imageBleedLeft?: number;
  imageBleedCenter?: boolean;
  imageBleedMinHeight?: number;
  imageBorder?: string;
  imageBorderWidth?: number;
  imageBorderRadius?: number;
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
  githubHref?: string;
  imageHref?: string;
  imageBorder?: string;
  imageBorderWidth?: number;
  imageBorderRadius?: number;
  image?: string;
  wide?: boolean;
  reveal?: boolean;
  revealOffset?: number;
  imageFit?: 'contain' | 'cover';
  imageAnchor?: 'top' | 'center' | 'bottom';
  imageBleed?: number;
  imageBleedTop?: number;
  imageBleedBottom?: number;
  imageBleedLeft?: number;
  imageBleedCenter?: boolean;
  credit?: string;
  creditHref?: string;
}

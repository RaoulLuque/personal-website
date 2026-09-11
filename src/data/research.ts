import type { Paper } from '../lib/types';

export const papers: Paper[] = [
  {
    title: 'A Placeholder Title for Your First Paper',
    authors: ['Raoul Luque', 'A. Coauthor', 'B. Advisor'],
    venue: 'Conference on Something 2026',
    year: 2026,
    note: 'Oral',
    figure: 'images/placeholder-wide.svg',
    links: {
      pdf: 'https://example.com/paper.pdf',
      arxiv: 'https://arxiv.org/',
      code: 'https://github.com/raoulluque',
    },
  },
  {
    title: 'A Second Placeholder Paper, This One Without a Teaser Figure',
    authors: ['C. Collaborator', 'Raoul Luque'],
    venue: 'arXiv preprint',
    year: 2025,
    note: 'Under review',
    links: {
      arxiv: 'https://arxiv.org/',
    },
  },
];

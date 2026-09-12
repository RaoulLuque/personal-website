import type { Paper } from '../lib/types';

export const papers: Paper[] = [
  {
    title: '',
    authors: ['Raoul Luqué'],
    venue: 'Supervised by Prof. Arie Koster',
    year: 2026,
    note: 'Bachelor Thesis',
    figure: 'images/bachelor-thesis.png',
    links: {
      pdf: 'https://github.com/RaoulLuque/treewidth-heuristic-using-clique-graphs/blob/main/Bachelor_Thesis.pdf',
      code: 'https://github.com/RaoulLuque/treewidth-heuristic-using-clique-graphs',
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

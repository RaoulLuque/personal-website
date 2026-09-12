import type { Paper } from '../lib/types';

export const papers: Paper[] = [
  {
    title: 'Approximation Algorithms for Graphic Variants of TSP',
    authors: ['Raoul Luqué'],
    venue: 'Supervised by Prof. Laura Vargas Koch, Niklas Dahlmeier and Philipp Pabst',
    year: 2026,
    note: 'Master Thesis',
    figure: 'images/master-thesis.png',
    imageBleed: 40,
    imageBleedTop: 60,
    imageBleedLeft: 50,
    imageBleedMinHeight: 300,
    imageBorder: '#ffffff',
    imageBleedCenter: true,
  },
  {
    title: 'New Upper Bounds for Treewidth using the Clique Operator and Spanning Trees',
    authors: ['Raoul Luqué'],
    venue: 'Supervised by Prof. Arie Koster',
    year: 2024,
    note: 'Bachelor Thesis',
    figure: 'images/bachelor-thesis.png',
    figureHref: 'https://github.com/RaoulLuque/treewidth-heuristic-using-clique-graphs/blob/main/Bachelor_Thesis.pdf',
    imageBleed: 40,
    imageBleedTop: 60,
    imageBleedLeft: 50,
    imageBleedMinHeight: 300,
    imageBorder: '#ffffff',
    imageBleedCenter: true,
    links: {
      pdf: 'https://github.com/RaoulLuque/treewidth-heuristic-using-clique-graphs/blob/main/Bachelor_Thesis.pdf',
      code: 'https://github.com/RaoulLuque/treewidth-heuristic-using-clique-graphs',
    },
  },
  // {
  //   title: 'A Second Placeholder Paper, This One Without a Teaser Figure',
  //   authors: ['C. Collaborator', 'Raoul Luque'],
  //   venue: 'arXiv preprint',
  //   year: 2025,
  //   note: 'Under review',
  //   links: {
  //     arxiv: 'https://arxiv.org/',
  //   },
  // },
];

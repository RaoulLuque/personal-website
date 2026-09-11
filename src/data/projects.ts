import type { Project } from '../lib/types';

export const projects: Project[] = [
  {
    title: 'Placeholder Project One',
    blurb: 'A short line about what it is and why you built it.',
    href: 'https://github.com/raoulluque',
    image: 'images/placeholder-wide.svg',
    wide: true,
    year: 2026,
  },
  {
    title: 'Placeholder Project Two',
    blurb: 'Another short line.',
    href: 'https://github.com/raoulluque',
    image: 'images/placeholder-square.svg',
    year: 2025,
  },
  {
    title: 'Placeholder Project Three',
    blurb: 'This one has no image, so it renders as a text card instead.',
    href: 'https://github.com/raoulluque',
    year: 2025,
  },
];

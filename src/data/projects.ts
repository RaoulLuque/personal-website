import type { Project } from '../lib/types';

export const projects: Project[] = [
  {
    title: 'petgraph',
    blurb: 'Graph data structures and algorithms for Rust that I lead maintain.',
    href: 'https://github.com/petgraph/petgraph',
    image: 'images/petgraph-logo.png',
    credit: 'Logo © petgraph, CC BY-SA 4.0',
    creditHref: 'https://github.com/petgraph/petgraph/blob/master/assets/images/LICENSE.md',
    wide: true,
    split: true,
  },
  {
    title: 'Rust Boy',
    blurb: 'A functioning Game Boy emulator written in Rust running the browser and desktop.',
    href: 'https://github.com/raoulluque/RustBoy',
    image: 'images/gameboy.png',
    imageBleed: 30,
    imageBleedTop: 70,
    imageBleedLeft: 50,
    imageBleedCenter: true,
    credit: 'Game Boy illustration by vorre, CC0',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Gameboy.svg',
    wide: true,
    split: true,
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

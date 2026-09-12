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
    year: 2025,
  },
  {
    title: 'Typing Defense',
    blurb: 'A tyipng defense game written in Rust using the Bevy engine.',
    href: 'https://github.com/raoulluque/typing-defense',
    image: 'images/typing-defense.png',
    imageBleed: 90,
    imageBleedTop: 50,
    wide: true,
    year: 2024,
  },
  {
    title: 'Connect-Rust',
    blurb: 'Webserver for playing connect-four against optimal players in Rust.',
    href: 'https://github.com/raoulluque/connect-rust',
    image: 'images/connect-rust.png',
    imageBleed: 80,
    imageBleedTop: 100,
    year: 2023,
  },
  
];

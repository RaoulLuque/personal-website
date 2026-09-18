const email = 'raoul.luque@gmail.com';

export const site = {
  author: 'Raoul Luque',
  email,
  shortName: 'Raoul',
  title: "Raoul Luque",
  description:
    'Personal site of Raoul Luque, PhD student at RWTH Aachen University.',
  links: [
    { label: 'GitHub', href: 'https://github.com/raoulluque' },
    { label: 'Scholar', href: 'https://scholar.google.com/' },
    { label: 'Email', href: `mailto:${email}` },
  ],
} as const;

export const nav = [
  { label: 'Raoul', path: '/' },
  { label: 'Projects', path: 'projects' },
  { label: 'Research', path: 'research' },
  { label: 'Talks', path: 'talks' },
  { label: 'Teaching', path: 'teaching' },
] as const;

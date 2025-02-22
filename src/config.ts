const { PUBLIC_CANONICAL_ORIGIN, PUBLIC_EMAIL_ADDRESS } = process.env;

export const social = {
  email: {
    label: 'Email',
    username: PUBLIC_EMAIL_ADDRESS,
    url: PUBLIC_EMAIL_ADDRESS,
  },
  github: {
    label: 'GitHub',
    username: 'faiq-naufal',
    url: 'https://github.com/faiq-naufal',
  },
  linkedin: {
    label: 'LinkedIn',
    username: 'faiqnaufal',
    url: 'https://www.linkedin.com/in/faiqnaufal',
  },
  producthunt: {
    label: 'Product Hunt',
    username: 'faiqnaufal',
    url: 'https://www.producthunt.com/@faiqnaufal',
  },
};

export const site = {
  canonical: PUBLIC_CANONICAL_ORIGIN,
  repository: `${social.github.url}/www`,
};

export const metadata = {
  author: 'Faiq Naufal',
  description:
    'This website is the online space of Faiq Naufal, a software engineer frontend, and digital product development enthusiast.',
  lang: 'en',
  dir: 'ltr',
  ogLocale: 'en_US',
};

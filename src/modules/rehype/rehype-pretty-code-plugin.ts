import rehypePrettyCode from 'rehype-pretty-code';

export const rehypePrettyCodePlugin = () => {
  return rehypePrettyCode({
    theme: {
      dark: 'github-dark',
      light: 'github-light',
    },
    keepBackground: false,
  });
};

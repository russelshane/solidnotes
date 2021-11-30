import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  'html, body': {
    margin: 0,
    padding: 0,
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Inter, sans-serif',
  },

  a: {
    textDecoration: 'none',
  },
});

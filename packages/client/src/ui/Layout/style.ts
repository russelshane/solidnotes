import { styled } from '@stitches/react';

export const LayoutElement = styled('div', {
  margin: 0,
  padding: 0,
  background: '#fff',
  color: 'rgb(44,44,46)',

  '&.dark': {
    color: '#fff',
    background: 'rgb(28,28,30)',
  },
});

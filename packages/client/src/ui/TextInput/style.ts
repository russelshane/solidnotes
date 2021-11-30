import { styled } from '@stitches/react';

export const TextInputElement = styled('input', {
  margin: 0,
  padding: 8,
  borderRadius: 4,
  fontSize: 13,
  fontFamily: 'Inter, sans-serif',
  border: `1.5px solid #dbdbdb`,
  color: `rgb(44,44,46)`,
  background: '#fff',
  cursor: 'pointer',
  outline: 'none',
  transition: '0.1s ease-in-out',

  '&:focus': {
    border: `1.5px solid #52BD95`,
  },
});

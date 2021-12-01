import { styled } from '@stitches/react';

export const HeaderElement = styled('header', {
  margin: 0,
  padding: '10px 20px',
  width: '100%',
  borderBottom: `1px solid rgb(219,219,219)`,
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
});

export const MenuButton = styled('div', {
  padding: 10,
  margin: 0,
  borderRadius: 2,
  width: 40,
  height: 40,
  background: '#fff',
  color: 'rgb(44,44,46)',
  cursor: 'pointer',

  '&:hover': {
    background: '#f5f5f5',
  },
});

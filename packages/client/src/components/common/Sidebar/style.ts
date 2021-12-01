import { styled } from '@stitches/react';

export const SidebarContainer = styled('div', {
  margin: 0,
  padding: '20px 10px',
  width: 250,
  left: -250,
  top: 61,
  bottom: 0,
  height: '93%',
  position: 'fixed',
  borderRight: '1px solid #dbdbdb',
  background: '#fff',
  transition: '0.3s ease-in-out',
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'column',

  '&.show': {
    left: 0,
  },
});

export const SidebarItem = styled('div', {
  borderRadius: 20,
  padding: '12px 18px',
  gridGap: '10px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  '&:hover': {
    background: '#f1f1f1',
  },

  '.text': {
    fontSize: 13,
    fontWeight: 600,
    fontFamily: 'Inter, sans-serif',
    color: 'rgb(44,44,46)',
  },

  '.icon': {
    width: 15,
    height: 15,
    color: 'rgb(44,44,46)',
  },
});

export const SidebarEnd = styled('span', {
  fontSize: 12,
  padding: '0 10px',
  display: 'block',
  color: 'rgb(100,100,100)',
  fontFamily: 'Inter, sans-serif',
  cursor: 'default',
  userSelect: 'none',
});

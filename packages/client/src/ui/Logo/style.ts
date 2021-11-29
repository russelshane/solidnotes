import { styled } from '@stitches/react';

export const LogoElement = styled('div', {
  width: 25,
  height: 25,
  backgroundSize: 'contain',
  backgroundImage:
    'url(https://ik.imagekit.io/drs/SolidNotes/solidnotes_JS3oRboQwlo.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.85,
  },
});

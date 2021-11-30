import { ChangeEventHandler, CSSProperties } from 'react';

export type TextInputProps = {
  onChange?: () => any;
  value?: string | number;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  style?: CSSProperties;
};

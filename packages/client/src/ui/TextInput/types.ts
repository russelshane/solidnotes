import { ChangeEvent, CSSProperties } from 'react';

export type TextInputProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
  value?: string | number;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  style?: CSSProperties;
};

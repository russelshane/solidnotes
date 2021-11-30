import React from 'react';
import { TextInputElement } from './style';
import { TextInputProps } from './types';

const TextInput: React.FC<TextInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  style,
}) => {
  return (
    <TextInputElement
      type={type ? type : 'text'}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      style={style}
    />
  );
};
export default TextInput;

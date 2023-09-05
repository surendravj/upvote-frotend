// CustomInput.js
import React from 'react';
import { Input, FormControl, FormLabel, Text } from '@chakra-ui/react';

const CustomInput = ({ label, placeholder, value, onChange,type }) => {
  return (
    <FormControl>
      <FormLabel><Text>{label}</Text></FormLabel>
      <Input
      type={type?type:'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default CustomInput;

// CustomButton.js
import React from 'react';
import { Button } from '@chakra-ui/react';

const CustomButton = ({ label, onClick, variant,color,bgColor }) => {
  return (
    <Button color={color} bg={bgColor} onClick={onClick} variant={variant}>
      {label}
    </Button>
  );
};

export default CustomButton;

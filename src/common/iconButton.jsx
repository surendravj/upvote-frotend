import React from 'react';
import { IconButton,Text} from '@chakra-ui/react'


export default function IconBbtn({icon,label,bg,color,onClick,btnSize}) {
    return (
        <IconButton
        bg={bg}
          icon={icon}
          color={color}
          aria-label='Search'
          onClick={onClick}
          size={btnSize?'md':btnSize}
        >
          <Text>{label}</Text>
        </IconButton>
      )
}

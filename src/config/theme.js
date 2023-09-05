// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark', // Change to 'dark' if you want to start with dark mode
    useSystemColorMode: false, // Set to true if you want to use user's system color mode preference
  },
  colors: {
    brand: {
      500: '#445069', // Replace with your brand color
    },
    secondary:{
        500:'#252B48'
    }
  },
});

export default theme;

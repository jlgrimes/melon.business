'use client';

import { HomePage } from '@/components/HomePage';
import { font } from '@/styles/fonts';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: font.style.fontFamily,
    heading: font.style.fontFamily,
  },
});

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
}

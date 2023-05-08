'use client';

import { HomePage } from '@/components/HomePage'
import { ChakraProvider} from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  )
}

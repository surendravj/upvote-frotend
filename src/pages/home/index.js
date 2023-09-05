import React from 'react'
import Navbar from '../../common/navbar'
import { Box, Flex } from '@chakra-ui/react'
import PostSection from './posts'
import ChatSection from './chat'

export default function Home ({socket}) {
  return (
    <Box overflow={'hidden'}>
      <Navbar />
      <Flex  mx={5} overflow={'auto'}>
        <PostSection />
        <ChatSection socket={socket} />
      </Flex>
    </Box>
  )
}

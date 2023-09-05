import React from 'react'
import { Box, Flex, Avatar, Text, Badge } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import IconBbtn from '../../common/iconButton'
import moment from 'moment'
import api from '../../helper/api'
import authHelper from '../../helper/auth.helper'

const PostCard = ({
  id,
  title,
  username,
  timestamp,
  content,
  upVotes,
  downVotes,
  tags
}) => {

  console.log(id)
  const upVote = async () => {
    try {
      if (authHelper.isAuthenticated()) {
        const response = await api.put(`/post/${id}/up`, {
          userId: authHelper.decodeJwtToken().userId
        })
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const downVote = async () => {
    try {
      if (authHelper.isAuthenticated) {
        const response = await api.put(`/post/${id}/down`, {
          userId: authHelper.decodeJwtToken().userId
        })
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      key={id}
      mb={3}
      cursor={'pointer'}
      p='4'
      border='1px solid #ccc'
      borderRadius='md'
      boxShadow='md'
    >
      <Flex align='center' mb='3'>
        <Avatar src={'https://placekitten.com/50/50'} size='sm' mr='2' />
        <Text fontWeight='bold'>{username}</Text>
        <Text ml='2' color='gray.500'>
          {moment(timestamp).fromNow()}
        </Text>
      </Flex>
      <Text fontSize={'xl'} as={'b'} mb='6'>
        {title}
      </Text>
      <Text mb='4' mt={2}>
        {content}
      </Text>
      <Flex>
        {tags.map((tag, index) => (
          <Badge key={index} colorScheme='teal' mr='2'>
            {'#' + tag}
          </Badge>
        ))}
      </Flex>
      <Flex align='center' justify='flex-end'>
        <Flex gap={4} align={'center'} justifyContent={'space-between'}>
          <IconBbtn
            icon={<ArrowUpIcon />}
            count={10}
            onClick={upVote}
            bg={'green.700'}
          />
          <IconBbtn
            icon={<ArrowDownIcon />}
            count={10}
            onClick={downVote}
            bg={'red.700'}
          />
        </Flex>
      </Flex>
      <Text color='gray.500'>
        {upVotes.length} <ArrowUpIcon color={'green.500'} /> |{' '}
        {downVotes.length} <ArrowDownIcon color={'red.500'} />
      </Text>
    </Box>
  )
}

export default PostCard

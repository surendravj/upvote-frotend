/* eslint-disable react-hooks/exhaustive-deps */
import { Box,useToast } from '@chakra-ui/react'
import React from 'react'
import PostCard from '../home/postCard'

import CustomButton from '../../common/customButton'
import CreatePostForm from './postsInputForm'
import api from '../../helper/api'
import authHelper from '../../helper/auth.helper'
import { showToast } from '../../common/toast'

export default function PostSection () {

  const [isOpen, setisOpen] = React.useState(false)
  const [posts, setposts] = React.useState([])
  const toast=useToast();

  const openModal = () => setisOpen(true)
  const closeModal = () => setisOpen(false)

  const fetchPosts = async () => {
    try {
      const response = await api.get('/post/search')
      setposts(response)
    } catch (error) {
      return showToast(toast,error.response.statusText,error.response.data.error,'warning');
    }
  }



  React.useEffect(() => {
    fetchPosts()
  }, [])

  console.log(authHelper.isAuthenticated())

  return (
    <Box overflow={'auto'} maxH='90vh' borderRadius={'lg'} flex='3'>
      <Box m='8' display={'flex'} justifyContent={'flex-end'}>
        {authHelper.isAuthenticated() && (
          <CustomButton
            onClick={openModal}
            variant={'outline'}
            label='Create Post +'
          />
        )}
        {authHelper.isAuthenticated() ? (
          <CreatePostForm isOpen={isOpen} onClose={closeModal} />
        ) : null}
      </Box>
      <Box display={'flex'} flexDirection={'column-reverse'} m='8'>
        {posts.map((post, index) => {
          return (
            <PostCard
              id={post._id}
              title={post.title}
              username={post.author.username}
              content={post.content}
              upVotes={post.upVotes}
              downVotes={post.downVotes}
              timestamp={post.createdAt}
              tags={post.tags}
            />
          )
        })}
      </Box>
    </Box>
  )
}

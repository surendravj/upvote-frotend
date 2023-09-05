import React from 'react'
import ModalBox from '../../common/modalBox'
import CustomInput from '../../common/customInput'
import {
  Box,
  FormControl,
  Textarea,
  FormLabel,
  Text,
  Flex,
  Input,
  Tag,
  TagLabel,
  TagCloseButton,
  useToast
} from '@chakra-ui/react'
import CustomButton from '../../common/customButton'
import api from '../../helper/api'
import authHelper from '../../helper/auth.helper'
import { showToast } from '../../common/toast'

const CreatePostForm = ({ isOpen, onClose }) => {
  const toast = useToast()

  const [values, setvalues] = React.useState({
    title: '',
    content: '',
    tags: []
  })

  const [currentTag, setCurrentTag] = React.useState('')

  const addTag = () => {
    if (currentTag && !values.tags.includes(currentTag)) {
      setvalues({ ...values, tags: [...values.tags, currentTag] })
      setCurrentTag('')
    }
  }

  const removeTag = tagToRemove => {
    const updatedTags = values.tags.filter(tag => tag !== tagToRemove)
    setvalues({ ...values, tags: updatedTags })
  }

  const onValuesChange = value => e => {
    e.preventDefault()
    setvalues({ ...values, [value]: e.target.value })
  }

  const handlePublishPost = async () => {
    try {
      const id = authHelper.decodeJwtToken().userId
      await api.post(`/post/${id}`, values)
      onClose()
      return showToast(toast,'Published','Your post published succesfully !', 'success');
    } catch (error) {
      return showToast(toast,error.response.statusText,error.response.data.error,'warning');
    }
  }

  
  return (
    <ModalBox isOpen={isOpen} onClose={onClose} title={'Create new post'}>
      <Box p={'2'} flexDirection={'column'} display={'flex'} gap={5}>
        <CustomInput
          placeholder={'Enter your Title'}
          value={values.title}
          onChange={onValuesChange('title')}
          label={'Title'}
        />
        <FormControl>
          <FormLabel>
            <Text>Content</Text>
          </FormLabel>
          <Textarea
            value={values.content}
            onChange={onValuesChange('content')}
            placeholder='Here is a sample placeholder'
          ></Textarea>
        </FormControl>
        <FormControl>
          <FormLabel>Tags</FormLabel>
          <Flex flexDirection={'column'} gap={5}>
            <Input
              type='text'
              placeholder='Enter a tag'
              value={currentTag}
              onChange={e => setCurrentTag(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && addTag()}
            />
            <Box display={'flex'} flexDirection={'row'} gap={2}>
              {values.tags.map(tag => (
                <Tag key={tag} variant='solid' ml={2} mt={2} size='md'>
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => removeTag(tag)} />
                </Tag>
              ))}
            </Box>
          </Flex>
        </FormControl>
        <CustomButton onClick={handlePublishPost} label={'Publish Post'} />
      </Box>
    </ModalBox>
  )
}

export default CreatePostForm

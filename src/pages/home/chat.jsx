import { ChatIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Input,
  Stack,
  VStack,
  Tooltip,
} from '@chakra-ui/react'
import React from 'react'
import { Badge } from '@chakra-ui/react'
import IconBbtn from '../../common/iconButton'

export default function ChatSection ({ socket }) {
  const [messages, setMessages] = React.useState([])
  const [newMessage, setNewMessage] = React.useState('')
  const [onlineCount, setonlineCount] = React.useState(0)

  const messagesEndRef = React.useRef()

  const onChange = e => {
    e.preventDefault()
    setNewMessage(e.target.value)
  }

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      var id = socket.id
      socket.emit('chat', { newMessage, id, date: Date.now() })
      setNewMessage('')
    }
  }

  React.useEffect(() => {
    socket.emit('get user count')

    socket.on('user count', count => {
      setonlineCount(count - 1)
    })

    socket.on('chat', message => {
      setMessages([...messages, message])
    })

    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages, socket])

  return (
    <Box
      border={'1px'}
      borderColor={'chakra-body-bg._light'}
      borderRadius={'lg'}
      minH='90vh'
      maxW='25vw'
      position={'relative'}
      flex='1'
    >
      <Box m='8'>
        <Flex >
          <Tooltip cursor={'pointer'} label='Online'>
            <Badge p={'2'}>
              Public Global Chat{' '}
                <ChatIcon ml={2}  color={'green.50'} /> {onlineCount}{' '}
            </Badge>
          </Tooltip>
        </Flex>
      </Box>
      <Box m='8'>
        <VStack spacing={3} align='stretch' overflowY='auto' maxH='65vh'>
          {messages.map((item, index) => {
            return (
              <Box p={2}>
                <Badge bgColor={socket.id !== item.id ? 'teal.500' : null}>
                  {item.id.substring(0, 6)}
                </Badge>
                {'   '}
                {item.newMessage}
              </Box>
            )
          })}
          <div ref={messagesEndRef} />
        </VStack>
      </Box>
      <Box position='absolute' bottom='0' left='0' right='0' p={4}>
        <Stack direction={'row'}>
          <Input
            value={newMessage}
            onChange={onChange}
            placeholder='Type your message...'
          />
          <IconBbtn
            onClick={() => handleSendMessage(newMessage)}
            aria-label='Search database'
            icon={<ChevronRightIcon />}
          />
        </Stack>
      </Box>
    </Box>
  )
}

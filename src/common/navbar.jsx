/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  Box,
  Flex,
  Spacer,
  IconButton,
  useDisclosure,
  useColorMode,
  Stack,
  Input,
  Icon
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons'
import { LoginForm, RegisterForm } from '../pages/authentication'
import ModalBox from './modalBox'
import authHelper from '../helper/auth.helper'
import sessionStorageHelper from '../helper/sessionStorage'
import IconBbtn from './iconButton'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  const [isOpened, setIsOpened] = React.useState(false)
  const [formType, setformType] = React.useState('login')

  const openModal = () => setIsOpened(true)
  const closeModal = () => setIsOpened(false)

  

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      p={4}
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      color={colorMode === 'light' ? 'black' : 'white'}
    >
      <ModalBox
        isOpen={isOpened}
        onClose={closeModal}
        title={formType === 'login' ? 'Login' : 'Register'}
      >
        {formType === 'login' ? (
          <LoginForm onClose={closeModal} />
        ) : (
          <RegisterForm />
        )}
      </ModalBox>
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant='ghost'
          onClick={isOpen ? onClose : onOpen}
          aria-label='Toggle navigation'
        />
      </Box>
      <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
        <Flex align='center' justify='space-between'>
          <Box>UpVote</Box>
        </Flex>
      </Box>
      <Spacer />
      <Box display={'flex'} gap={5}>
      <Input
        placeholder="Search posts..."
        onChange={null}
        width="40vw"
      />
      <IconBbtn
        icon={<SearchIcon />}
        aria-label="Search"
        onClick={null}
      />
      </Box>
      <Spacer/>
      <Box ml={4}>
        {authHelper.isAuthenticated()?(
          <Stack direction={'row'} spacing={'20px'}>
            <p className='pointer'  onClick={()=>sessionStorageHelper.clearData()}>Logout</p>
          </Stack>
        ):
        (
          <Stack direction={'row'} spacing={'20px'}>
            <a
            className='pointer'
              onClick={() => {
                openModal()
                setformType('login')
              }}
            >
              Login
            </a>
            <a
            className='pointer'
              onClick={() => {
                openModal()
                setformType('register')
              }}
            >
              Register
            </a>
          </Stack>
        )}
      </Box>
    </Flex>
  )
}

export default Navbar

import React from 'react'
import { Flex, useToast } from '@chakra-ui/react'
import api from '../../helper/api'
import sessionStorageHelper from '../../helper/sessionStorage'
import CustomButton from '../../common/customButton';
import CustomInput from '../../common/customInput';
import { showToast } from '../../common/toast';

const LoginForm= ({onClose})=> {

  const [values, setvalues] = React.useState({ email: '', password: '' })
  const toast = useToast()

  const onValueChange = value => e => {
    e.preventDefault()
    setvalues({ ...values, [value]: e.target.value })
  }

  const submitLogin = async () => {
    try {
      const response = await api.post('/auth/login', values)
      sessionStorageHelper.setData(response)
      onClose();
   
    } catch (error) {
      return showToast(toast, error.response.statusText,error.response.data.error,'warning')
    }
  }

  return (
    <Flex direction={'column'} gap={5}>
      <CustomInput
        type={'email'}
        label={'Email'}
        onChange={onValueChange('email')}
        placeholder={'Enter your email.'}
        value={values.email}
      />
      <CustomInput
        type={'password'}
        label={'Password'}
        onChange={onValueChange('password')}
        placeholder={'Enter your password.'}
        value={values.password}
      />
      <CustomButton label='Login' onClick={submitLogin} variant='solid' />
    </Flex>
  )
}

export default LoginForm;

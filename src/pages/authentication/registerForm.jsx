import React from 'react'

import { Flex } from '@chakra-ui/react'
import CustomButton from '../../common/customButton';
import CustomInput from '../../common/customInput';



const RegisterForm=()=>{

    const [values, setvalues] = React.useState({email:'',password:''});

    const onValueChange=(value)=>(e)=>{
        e.preventDefault();
        setvalues({...values, [value]:e.target.value})
    }

  return (
    <Flex direction={'column'} gap={5}>
        <CustomInput type={'email'} label={'Email'} onChange={onValueChange('email')} placeholder={'Enter your email.'} value={values.email} />
        <CustomInput type={'password'}  label={'Password'} onChange={onValueChange('password')} placeholder={'Enter your password.'} value={values.password}/>
        <CustomButton  label="Register" onClick={null} variant="solid" />
    </Flex>
  )
}

export default RegisterForm
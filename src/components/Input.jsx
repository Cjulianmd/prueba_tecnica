import {
    FormControl,
    FormLabel,
    Input,
    
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { useForm } from "../Hooks/useForm";
  export const Inputlogin = () => {
    
    const [formValues, handleInputChange] = useForm({
      email: '',
  })
  
 /* const handleGoogle = () => {
     dispatch(loginGogle())
     const handleSubmit = (e) => {
      e.preventDefault();
      reset()
  }
  }*/

    return (
    <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input onChange={handleInputChange} value={formValues.email} id="email" name="email" type="email" />
      </FormControl>
    )
  }
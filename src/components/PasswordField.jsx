import {
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
    Box,
    Stack,
 
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { HiEye, HiEyeOff } from 'react-icons/hi'
  import { useForm } from './../Hooks/useForm';
import { OAuthButtonGroup } from './OAuthButtonGroup';

  export const PasswordField = React.forwardRef((props, ref) => {
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)
    const [formValues, handleInputChange, reset] = useForm({
      email: '',
      password: '',
  })
  console.log(formValues)
 /* const handleGoogle = () => {
     dispatch(loginGogle())
     const handleSubmit = (e) => {
      e.preventDefault();
      
  }
  }*/
  
    const onClickReveal = () => {
      reset()
      onToggle()
  
      if (inputRef.current) {
        inputRef.current.focus({
          preventScroll: true,
          
        })
      }
    }

  
    return (
      < >
      <form >
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input onChange={handleInputChange} value={formValues.email} id="email" name="email" type="email" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="link"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            onChange={handleInputChange} 
            value={formValues.password}
            id="password"
            ref={mergeRef}
            name="password"
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
      </form>
      <Stack spacing="8">
      <Box>
        <Stack spacing="6">
          <Stack spacing="5">
            <OAuthButtonGroup />
          </Stack>
        </Stack>
      </Box>
    </Stack>
      </>
    )
  })
  PasswordField.displayName = 'PasswordField'
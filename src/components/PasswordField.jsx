import {
  Button,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    useDisclosure,
    useMergeRefs
 
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { HiEye, HiEyeOff } from 'react-icons/hi'
  import { useForm } from './../Hooks/useForm';
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  export const PasswordField = React.forwardRef((props, ref) => {
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)
    const [formValues, handleInputChange, reset] = useForm({
      email: '',
      password: '',
  })
  const onClicksumit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, formValues.email, formValues.password)
    
    
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    reset()
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
    alert('email o contraseña incorrectos')
  });

  }
    const onClickReveal = () => {
      
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
        <Stack spacing="6">
            <Button onClick={onClicksumit} variant="primary">Sign in</Button>
          </Stack>
      </FormControl>
      </form>
      </>
    )
  })
  PasswordField.displayName = 'PasswordField'
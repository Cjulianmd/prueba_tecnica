import {
  Box,
  Button,

  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo'
import { PasswordField } from '../PasswordField'
import { OAuthButtonGroup } from './../OAuthButtonGroup';


export const LogIn = () => (
  
  <Container
    maxW="lg"
    py={{
      base: '12',
      md: '24',
    }}
    px={{
      base: '0',
      sm: '8',
    }}
  >
    <Stack spacing="8">
      <Stack spacing="6">
        <Logo />
        <Stack
          spacing={{
            base: '2',
            md: '3',
          }}
          textAlign="center"
        >
          <Heading
            size={useBreakpointValue({
              base: 'xs',
              md: 'sm',
            })}
            color='white'
          >
            Log in to your account
          </Heading>
          <NavLink to="/register">
          <HStack spacing="1" justify="center">
            <Text color='white'>Don't have an account?</Text>
            
            <Button variant="link" colorScheme="blue">
              Sign up
            </Button>
           
          </HStack> </NavLink>
        </Stack>
      </Stack>
      <Box
        py={{
          base: '0',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '10',
        }}
        bg={useBreakpointValue({
          base: 'transparent',
          sm: 'bg-surface',
        })}
        boxShadow={{
          base: 'none',
          sm: useColorModeValue('md', 'md-dark'),
        }}
        borderRadius={{
          base: 'none',
          sm: 'xl',
        }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <PasswordField />
          </Stack>
          <Stack spacing="6">
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color='white'>
                or continue with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
)

export default LogIn;

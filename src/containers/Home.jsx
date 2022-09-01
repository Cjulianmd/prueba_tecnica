import React from 'react';
import Mentores from '../components/Home/Mentores'
import Monitoria from '../components/Home/Monitoria'
import Btncerrarseccion from '../components/Home/Cerrarseccion'
import CreateMentor from '../components/Home/CreateMentor'
import CreateMonitoria from '../components/Home/CreateMonitoria'
import {
    Box,
    Flex,
    Menu,
    MenuButton,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';
function Home() {
    document.body.style = 'background: #1F233E; '
    return (
        <div>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <CreateMentor/>
                <CreateMonitoria/>
            <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                    <Btncerrarseccion/>
                </Stack>
            </Flex>
            </Flex>
            </Box>
            <Mentores/><Monitoria/>
        </div>
    );
}

export default Home;
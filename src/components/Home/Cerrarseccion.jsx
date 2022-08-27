import { Box } from '@chakra-ui/react';
import React from 'react';
import { getAuth, signOut } from "firebase/auth";
function Cerrarsc() {
    const cerrarseccion = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
        <div>
           <center>
            <Box 
            left='80px'
            onClick={cerrarseccion}
            as='button'
            p={4}
            color='white'
            fontWeight='bold'
            borderRadius='md'
            bgGradient='linear(to-r, teal.500, green.500)'
            _hover={{
                bgGradient: 'linear(to-r, red.500, yellow.500)',
            }}
            >
            Cerrar seccion
            </Box>
            </center>
        </div>
    );
}
export default Cerrarsc;
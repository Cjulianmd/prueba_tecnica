import { useEffect, useState } from "react";
import { LinkBox } from '@chakra-ui/react';
import React from 'react';
import { db } from '../../FireBase/Firebaseconfig';
import { collection, getDocs } from "firebase/firestore";
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
function Mentores() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const mentor = async() =>{
         try{
             const querySnapshot = await getDocs(collection(db, "monitores"))
             const docs = []
             querySnapshot.forEach((doc)=>{
             docs.push({...doc.data(), id: doc.id})
             } )
             setProducts(docs)
         }catch(error){
             console.log(error)
         }

        }
        mentor()
     }, [])
    
    return (
        
        <div>
            {products.map(({name,apellido,cedula,información_de_contacto,semestre,programa_académico}) => (
            <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Monitor</TableCaption>
                    <Tbody>
                    <Tr>
                        <Td>Nombres</Td>
                        <Td>{name}</Td>
                    </Tr>
                    <Tr>
                        <Td>Apellidos</Td>
                        <Td>{apellido}</Td>
                    </Tr>
                    <Tr>
                        <Td>Cedula</Td>
                        <Td>{cedula}</Td>
                    </Tr>
                    <Tr>
                        <Td>Información de contacto</Td>
                        <Td>{información_de_contacto}</Td>
                    </Tr>
                    <Tr>
                        <Td>Programa académico</Td>
                        <Td>{programa_académico}</Td>
                    </Tr>
                    <Tr>
                        <Td>Semestre</Td>
                        <Td>{semestre}</Td>
                    </Tr>
                    </Tbody>
                </Table>
                </TableContainer>
            </LinkBox>
            )
            )}
            
        </div>
    );
}

export default Mentores;
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
function Monitoria() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const mentor = async() =>{
         try{
             const querySnapshot = await getDocs(collection(db, "monitorias"))
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
            {products.map(({Materia,fecha,monitor,salon}) => (
            <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Monitoria</TableCaption>
                    <Tbody>
                    <Tr>
                        <Td>Materia</Td>
                        <Td>{Materia}</Td>
                    </Tr>
                    <Tr>
                        <Td>fecha</Td>
                        <Td>{fecha}</Td>
                    </Tr>
                    <Tr>
                        <Td>monitor</Td>
                        <Td>{monitor}</Td>
                    </Tr>
                    <Tr>
                        <Td>salon</Td>
                        <Td>{salon}</Td>
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

export default Monitoria;
import { useEffect, useState } from 'react'
import { LinkBox, Button, WrapItem, Stack } from '@chakra-ui/react';
import React from 'react';
import { db } from '../../FireBase/Firebaseconfig';
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { collection, query, onSnapshot, limit, startAt, doc, deleteDoc, getDoc, setDoc, addDoc } from "firebase/firestore";
  import { orderBy } from "firebase/firestore";
  import {
      Drawer,
      DrawerBody,
      DrawerFooter,
      DrawerHeader,
      DrawerOverlay,
      DrawerContent,
      DrawerCloseButton,
    } from '@chakra-ui/react'
import {
  Input,
  useDisclosure,
  } from '@chakra-ui/react'
function Mentores() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
        const valorInicial = {
        name: '',
        apellido: '',
        información_de_contacto:'',
        programa_académico: '',
        semestre: '',
        cedula: '',
    }
    const [products, setProducts] = useState([])
    const [subId, setSubId] = useState('')
    const [user, setUser] = useState(valorInicial)
    const citiesRef = query(collection(db, "monitores"))
    const q = query(citiesRef, orderBy("name"), limit(2), startAt(""));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const docs = []
    const cities = []

    querySnapshot.forEach((doc) => {
        cities.push(doc.data().name);
        docs.push({...doc.data(), id: doc.id})
    });
    setProducts(docs)
    });
    const deleteMonitor = async(id) => {
        await deleteDoc(doc(db, "monitores", id));
        console.log(id)
    }

    const capturarInputs = (e)=>{
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }
    const ActualizarMentor = async(id) => {
        try {
            const docRef = doc(db, 'monitores', id)
            const docSnap = await getDoc(docRef)
            setUser(docSnap.data())
        } catch (error) {
           
        }
    }
    useEffect(()=>{
        if(subId !== ''){
            ActualizarMentor(subId)
        }
    },[subId])

    const guardarInfo = async(e)=>{
        e.preventDefault()
        if(subId === ''){
            try {
                await addDoc(collection(db,'monitores'),{
                    ...user
                })
            } catch (error) {
                console.log(error);
            }
        }
        else{
            await setDoc(doc(db, 'monitores', subId),{
                ...user
            })
        }
        

        setUser({...valorInicial})
        setSubId('')
    }

    return (
        
        <>
            {products.map(({name,apellido,cedula,información_de_contacto,semestre,programa_académico,id}) => (
            <LinkBox key={id} valueas='article' maxW='sm' p='3' borderWidth='1px' rounded='md'>
                <TableContainer >
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
                <Stack direction='row' spacing={4}>
                <WrapItem >
                <Button onClick={()=>deleteMonitor(id)} colorScheme='red' >Delete</Button>
                </WrapItem>
                <WrapItem onClick={onOpen}>
                <Button ref={btnRef} onClick={()=>setSubId(id)} colorScheme='green' variant='solid'>
                    actualizar
                </Button>
                </WrapItem>
                </Stack>
                <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>actualizar</DrawerHeader>
        
                    <DrawerBody>
                    <Input placeholder='nombre' onChange={capturarInputs} value={user.name} id="name" name="name" type="text" />
                    <Input placeholder='apellido' onChange={capturarInputs} value={user.apellido} id="apellido" name="apellido" type="text" />
                    <Input placeholder='información_de_contacto' onChange={capturarInputs} value={user.información_de_contacto} id="información_de_contacto" name="información_de_contacto" type="text" />
                    <Input placeholder='programa_académico' onChange={capturarInputs} value={user.programa_académico} id="programa_académico" name="programa_académico" type="text" />
                    <Input placeholder='semestre' onChange={capturarInputs} value={user.semestre} id="semestre" name="semestre" type="number" />
                    <Input placeholder='cedula' onChange={capturarInputs} value={user.cedula} id="cedula" name="cedula" type="number" /> 
                    </DrawerBody>
        
                    <DrawerFooter onClick={onClose}>
                    <Button variant='outline' mr={3} >
                        Cancel
                    </Button>
                    <Button onClick={guardarInfo} colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
                </Drawer>
            </LinkBox>
            )
            )}
            
        </>
    );
    
}

export default Mentores;
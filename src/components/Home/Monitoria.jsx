import { useEffect,useState } from "react";
import { Button, LinkBox, Stack, WrapItem } from '@chakra-ui/react';
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
  import { collection, query, onSnapshot, doc, deleteDoc, getDoc, setDoc, addDoc } from "firebase/firestore";
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
function Monitoria() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
        const valorInicial = {
            Materia: '',
            fecha: '',
            monitor:'',
            salon: '',
    }
    const [subId, setSubId] = useState('')
    const [user, setUser] = useState(valorInicial)
    const [products, setProducts] = useState([])
    const q = query(collection(db, "monitorias"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const docs = []
    const cities = []
    querySnapshot.forEach((doc) => {
        cities.push(doc.data().name);
        docs.push({...doc.data(), id: doc.id})
            
    });
    setProducts(docs)
    });
    
    const deleteMonitoria = async(id) => {
        await deleteDoc(doc(db, "monitorias", id));
        console.log(id)
    }
    const capturarInputs = (e)=>{
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }
    const ActualizarMentor = async(id) => {
        try {
            const docRef = doc(db, 'monitorias', id)
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
                await addDoc(collection(db,'monitorias'),{
                    ...user
                })
            } catch (error) {
                console.log(error);
            }
        }
        else{
            await setDoc(doc(db, 'monitorias', subId),{
                ...user
            })
        }
        

        setUser({...valorInicial})
        setSubId('')
    }
    
    return (
        
        <div>
            {products.map(({Materia,fecha,monitor,salon,id}) => (
            <LinkBox key={id} as='article' maxW='sm' p='6' borderWidth='1px' rounded='md'  >
                <TableContainer >
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
                <Stack direction='row' spacing={4}>
                <WrapItem>
                <Button onClick={()=>deleteMonitoria(id)} colorScheme='red' >Delete</Button>
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
                    <Input placeholder='Materia' onChange={capturarInputs} value={user.Materia} id="Materia" name="Materia" type="text" />
                    <Input placeholder='fecha' onChange={capturarInputs} value={user.fecha} id="fecha" name="fecha" type="date" />
                    <Input placeholder='monitor' onChange={capturarInputs} value={user.monitor} id="monitor" name="monitor" type="text" />
                    <Input placeholder='salon' onChange={capturarInputs} value={user.salon} id="salon" name="salon" type="text" />
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
            
        </div>
    );
}

export default Monitoria;
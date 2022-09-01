import { useEffect,useState } from "react";
import { Button, LinkBox, Stack, WrapItem, Center } from '@chakra-ui/react';
import React from 'react';
import { db } from '../../FireBase/Firebaseconfig';
import { useForm } from './../../Hooks/useForm';
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { collection, query, onSnapshot, doc, deleteDoc, getDoc, setDoc, addDoc, where } from "firebase/firestore";
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
  import {TcontainerM } from './../../style/style';
  import { 
  Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
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
    const [formValue, handleInputChange] = useForm({
        Materia: '',
        fecha: '',
        monitor:'',
        salon: '',
    })
    
    const [subId, setSubId] = useState('')
    const [user, setUser] = useState(valorInicial)
    const [products, setProducts] = useState([])
    const citiesRef = query(collection(db, "monitorias"))
        //q
        let q;
        q = query(citiesRef, );
        //filtro  
        //const filters = () => {
            if (formValue.Materia == "" && formValue.monitor == "") {
                q = query(citiesRef,)
            }else if (formValue.Materia !== "" && formValue.monitor == '') {
                q = query(citiesRef, where("Materia", "==", formValue.Materia))
            }
            if (formValue.Materia == "" && formValue.monitor !== ''){
                q = query(citiesRef, where("monitor", "==", formValue.monitor))
            }
            if (formValue.Materia !== "" && formValue.monitor !== ''){
                q = query(citiesRef, where("Materia", "==", formValue.Materia),where("monitor", "==", formValue.monitor))
            }
               
            
        //unsubscribe()}
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
        
        <>
        <TcontainerM>
        <Accordion  width='500px' >
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box color='white' flex='1' textAlign='left'>
                     Fliltro Monitoria (presione aqui)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Input color='white' width='400px' htmlSize={50} placeholder='Materia' onChange={handleInputChange} value={formValue.Materia} id="Materia" name="Materia" type="text" />
                    <Input color='white' width='400px' htmlSize={50} placeholder='monitor' onChange={handleInputChange} value={formValue.monitor} id="monitor" name="monitor" type="text" />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        <br/>
            {products.map(({Materia,fecha,monitor,salon,id}) => (
            <LinkBox key={id} as='article' maxW='sm' p='6' borderWidth='1px' rounded='md'  >
                <TableContainer >
                <Table variant='simple'>
                    <TableCaption color='white' >Monitoria</TableCaption>
                    <Tbody color='white' >
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
            </TcontainerM>
        </>
    );
}

export default Monitoria;
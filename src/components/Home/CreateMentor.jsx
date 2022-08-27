import * as React from 'react'
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
    Button,
    Input,
    useDisclosure,

} from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../FireBase/Firebaseconfig'
import { useForm } from './../../Hooks/useForm';

export default function Creatementor() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [formValues, handleInputChange, reset] = useForm({
      name: '',
      apellido: '',
      información_de_contacto:'',
      programa_académico: '',
      semestre: '',
      cedula: '',
  })

    const createMentor = () => {
      return () => {
         
          addDoc(collection(db, "monitores"),formValues) 
          console.log(formValues)

          reset()
      }
  }
  
    return (
        <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Crear Monitores
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>añadir Monitores</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='nombre' onChange={handleInputChange} value={formValues.name} id="name" name="name" type="text" />
              <Input placeholder='apellido' onChange={handleInputChange} value={formValues.apellido} id="apellido" name="apellido" type="text" />
              <Input placeholder='información_de_contacto' onChange={handleInputChange} value={formValues.información_de_contacto} id="información_de_contacto" name="información_de_contacto" type="text" />
              <Input placeholder='programa_académico' onChange={handleInputChange} value={formValues.programa_académico} id="programa_académico" name="programa_académico" type="text" />
              <Input placeholder='semestre' onChange={handleInputChange} value={formValues.semestre} id="semestre" name="semestre" type="number" />
              <Input placeholder='cedula' onChange={handleInputChange} value={formValues.cedula} id="cedula" name="cedula" type="number" /> 
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={createMentor()} colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
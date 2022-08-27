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

export default function Createmonitoria() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [formValues, handleInputChange, reset] = useForm({
      Materia: '',
      fecha: '',
      monitor:'',
      salon: '',
  })

    const createMentor = () => {
      return () => {
         
          addDoc(collection(db, "monitorias"),formValues) 
          console.log(formValues)

          reset()
      }
  }
  
    return (
        <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Crear monitorias
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
            <DrawerHeader>añadir monitorias</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Materia' onChange={handleInputChange} value={formValues.Materia} id="Materia" name="Materia" type="text" />
              <Input placeholder='fecha' onChange={handleInputChange} value={formValues.fecha} id="fecha" name="fecha" type="date" />
              <Input placeholder='monitor' onChange={handleInputChange} value={formValues.monitor} id="monitor" name="monitor" type="text" />
              <Input placeholder='salon' onChange={handleInputChange} value={formValues.salon} id="salon" name="salon" type="text" />
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
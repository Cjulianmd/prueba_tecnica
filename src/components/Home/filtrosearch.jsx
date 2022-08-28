import * as React from 'react'
  import {
    Input, Text,
} from '@chakra-ui/react'

import { useForm } from './../../Hooks/useForm';

export default function Createmonitoria() {
    const [formValues, handleInputChange] = useForm({
      busqueda: '',
  })
  
    return (
        <>
        <Text mb='8px'>fliltro buscar monitores o monitorias por datos:</Text>
         <Input  htmlSize={50} width='auto' placeholder='busqueda' onChange={handleInputChange} value={formValues.busqueda} id="busqueda" name="busqueda" type="text" />
      </>
    )
  }
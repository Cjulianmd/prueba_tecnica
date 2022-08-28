import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import { getDocs } from 'firebase/firestore';
import CreateMonitoria from './CreateMonitoria'
import Mentores from './Cerrarseccion'

describe('fHome', () => {
    const component = render(<CreateMonitoria/>)
    const component2 = render(<Mentores/>)

    console.log(prettyDOM(component.container))
    console.log(prettyDOM(component2.container))
    component.getByText('Crear monitorias')
    component2.getByText('Cerrar seccion')

    test('CreateMonitoria', () => {
        expect(component.container).toHaveTextContent('Crear monitorias')
    }) 
    test('CreateMonitoria2', () => {
        expect(component2.container).toHaveTextContent('Crear monitorias')
    }) 
    test('CreateMonitoria2', () => {
        const button = component.getByText('Crear monitorias')
        fireEvent.click(button)
    }) 

});
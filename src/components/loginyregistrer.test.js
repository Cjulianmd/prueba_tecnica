import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import Mentores, { GoogleIcon } from './ProviderIcons'
import Monitorias from './OAuthButtonGroup'
import { Logo } from './Logo';
describe('fHome3', () => {
    console.log(GoogleIcon)
    test('CreateMonitoria', () => {
        expect(Logo).toBe(Logo)
    }) 
    test('CreateMonitoria2', () => {
        expect(GoogleIcon).toBe(GoogleIcon)
    }) 

});
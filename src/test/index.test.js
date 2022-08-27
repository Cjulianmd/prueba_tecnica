import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import Index from '../index'
import '@testing-library/jest-dom'
import { getAuth } from 'firebase/auth';



describe('registrer', () => {

test('autn de firebase', () => {
    const auth = getAuth();
    espect(auth).toBe(true);
})




});
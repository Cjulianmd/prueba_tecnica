import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { app, db, google } from './Firebaseconfig';
import { getFirestore } from 'firebase/firestore';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

describe('firebase', () => {

    test('firebase db', () => {
        expect(db).toBe(getFirestore(app));
    })
    test('firebase GoogleAuthProvider', () => {
        expect(GoogleAuthProvider).toBe(GoogleAuthProvider);
    })
    test('firebase  google', () => {
        expect( google).toBe( google);
    })
    test('firebase  FacebookAuthProvider', () => {
        expect(FacebookAuthProvider).toBe(FacebookAuthProvider);
    })
    test('firebase  app', () => {
        expect(app).toBe(app);
    })


});
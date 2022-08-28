import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { app, db, google } from './Firebaseconfig';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

describe('firebase', () => {

    test('firebase db', () => {
        expect(db).toBe( getFirestore(app));
    })

});
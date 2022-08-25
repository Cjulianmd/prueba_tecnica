import { google } from "../../firebase/Firebaseconfig";
import { GoogleAuthProvider } from 'firebase/auth';
//aqui se pueden hacer las condicionales




export const loginGogle = () => {
    return (dispatch) => {
        const autn = getAuth();
        signInWithPopup(autn, google )
        .then( ({user}) => loginProvider(user.displayName, user.email, user.photoURL)
        ).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
}
const loginProvider = (displayName,email,photoURL ) => {
    return{
        payload:{
            displayName,
            email,
            photoURL
        }
    }
}
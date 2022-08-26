import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { GoogleIcon } from './ProviderIcons'
import { getAuth, signInWithPopup , GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
import { face, google } from '../FireBase/Firebaseconfig';
const providers = [
  {
    name: 'Google',
    icon: <GoogleIcon boxSize="5" />,
  },
  {
    name: 'facebook',
    icon: 'f',
  },
]
const auth = getAuth();
    const onClickGogle = () => {
      signInWithPopup(auth, google)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token)
        // The signed-in user info.
        const user = result.user;
        console.log(user.displayName);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email)
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential)
        // ...
      });
    }
    const onClickFace = () => {
      signInWithPopup(auth, face)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken)
        console.log(user);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email)
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(credential)
        const user = error.customData;
        console.log(user);

    // ...
  });

    }
    

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    <Button onClick={onClickGogle} key={providers[0].name} width="full">
        <VisuallyHidden>Sign in with {providers[0].name}</VisuallyHidden>
        {providers[0].icon}
      </Button>
    <Button onClick={onClickFace} key={providers[1].name} width="full">
        <VisuallyHidden>Sign in with {providers[1].name}</VisuallyHidden>
        {providers[1].icon}
    </Button>
  </ButtonGroup>
)
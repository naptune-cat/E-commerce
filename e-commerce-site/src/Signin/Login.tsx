import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const auth = getAuth();

export const Login=()=>{

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSignin=()=>{const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
    return <div>
        <form>
            <label>Craete a Form</label>
        </form>
    </div>
}
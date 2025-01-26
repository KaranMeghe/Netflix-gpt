import { useState } from 'react';
import { formValidation } from '../Form Validation/formValidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const useForm = (email, password, name) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [validationAlert, setValidationAlert] = useState(false);

    const handleToggleSignIn = () => {
        setIsSignIn(!isSignIn);
        setValidationAlert(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationAlert(false);
        // if (!email.current.value || !password.current.value || (!isSignIn && !name.current)) {
        //     return setValidationAlert("Please fill in all required fields.");
        // }

        const nameValue = name?.current?.value || ""; // Handle null/undefined name

        const message = formValidation(
            email.current.value,
            password.current.value,
            nameValue,
            isSignIn
        );

        setValidationAlert(message);
        if (message) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    console.log(userCredential.user);
                })
                .catch((error) => {
                    setValidationAlert(`${error.code} - ${error.message}`);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    console.log(userCredential.user);
                })
                .catch((error) => {
                    setValidationAlert(`${error.code} - ${error.message}`);
                });
        }
    };

    return { isSignIn, handleToggleSignIn, handleSubmit, validationAlert };
};
export default useForm;

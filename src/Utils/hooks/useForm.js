import { useState } from 'react';
import { formValidation } from '../Form Validation/formValidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/store';

const useForm = (email, password, name) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [validationAlert, setValidationAlert] = useState(false);
    const dispatch = useDispatch();

    const handleToggleSignIn = () => {
        setIsSignIn(!isSignIn);
        setValidationAlert(false);
        email.current.value = "";
        password.current.value = "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationAlert(false);
        let nameValue = name?.current?.value || ""; // Handle null/undefined name

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
                    const user = userCredential.user;


                    updateProfile(user, {
                        displayName: nameValue,
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        // Profile updated!

                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                    }).catch((error) => {
                        // An error occurred
                        setValidationAlert(error.message);
                    });


                })
                .catch((error) => {
                    setValidationAlert(`${error.code} - ${error.message}`);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // eslint-disable-next-line no-unused-vars
                    const user = userCredential.user;


                })
                .catch((error) => {
                    setValidationAlert(`${error.code} - ${error.message}`);
                });
        }

        email.current.value = "";
        password.current.value = "";
        !isSignIn ? name.current.value = "" : null;
    };

    return { isSignIn, handleToggleSignIn, handleSubmit, validationAlert };
};
export default useForm;

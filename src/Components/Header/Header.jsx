import { Button } from '../../Ui/index';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from '../../Redux/store';
import { auth } from '../../Utils/firebase';
import { useEffect } from 'react';
import { LOGO, USER_ICON } from '../../Utils/constatnt';


const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.users);
    const navigate = useNavigate();

    const handleSubmit = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser());
            navigate('/');
        }).catch((error) => {
            // An error happened.
            console.log(error);
            navigate('/error');
        });

    };

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browse');
                // ...
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/');
            }
        });

        // unsubscribe when component is unmount
        return () => unsubscribe();

    }, []);

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full h-full flex justify-between'>
            <img src={LOGO} alt="brand-logo" className='w-32 h-16' />

            {!user ? null : <div className='px-8 py-2 flex gap-2 items-center h-16'>
                <img src={USER_ICON} alt="usericon" className='w-8' />
                <Button onClick={handleSubmit} className="text-white">Sign out</Button>
            </div>}
        </div>



    );
};

export default Header;
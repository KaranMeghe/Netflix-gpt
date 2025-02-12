import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser, toggleGptSearch } from '../../../Redux/store';
import { auth } from '../../firebase';
import { useEffect, useState } from 'react';

const useHeaderLogic = () => {
    const [gptSearch, setGptSearch] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.users);
    const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate('/');
        }).catch((error) => {
            navigate('/error');
        });
    };

    const handleToggleGpt = () => {
        dispatch(toggleGptSearch());
        setGptSearch(!gptSearch);
    };

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, [dispatch, navigate]);

    return { user, handleSignOut, handleToggleGpt, showGptSearch, gptSearch, setGptSearch };
};

export default useHeaderLogic;
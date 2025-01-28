import { Button } from '../../Ui/index';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from '../../Redux/store';
import { auth } from '../../Utils/firebase';
import { useState } from 'react';


const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.users);
    const navigate = useNavigate();

    const handleSubmit = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser());
            navigate('/');
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });

    };
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full h-full flex justify-between'>
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="brand-logo" className='w-32 h-16' />

            {!user ? null : <div className='px-8 py-2 flex gap-2 items-center h-16'>
                <img src='https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229' alt="usericon" className='w-8' />
                <Button onClick={handleSubmit} className="text-white">Sign out</Button>
            </div>}
        </div>



    );
};

export default Header;
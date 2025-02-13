import { Button } from '../../Ui/index';
import { LOGO, USER_ICON } from '../../Utils/constatnt';
import useHeaderLogic from '../../Utils/hooks/header/useHeaderLogic';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, handleSignOut, handleToggleGpt, gptSearch } = useHeaderLogic();

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full h-18 flex justify-between z-10'>
            <Link to="/browse"> <img src={LOGO} alt="brand-logo" className='w-32 h-16' /></Link>
            {!user ? null : <div className='px-8 py-2 flex gap-2 items-center h-16'>
                <Button onClick={handleToggleGpt} className="text-white border rounded-sm border-green-600 bg-green-600 p-1 mx-4">{gptSearch ? "Gpt Search" : "Home page"}</Button>
                <img src={USER_ICON} alt="usericon" className='w-8' />
                <Button onClick={handleSignOut} className="text-white">Sign out</Button>
            </div>}
        </div>
    );
};

export default Header;
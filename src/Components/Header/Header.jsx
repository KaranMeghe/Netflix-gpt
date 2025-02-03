import { Button } from '../../Ui/index';
import { LOGO, USER_ICON } from '../../Utils/constatnt';
import useHeaderLogic from '../../Utils/hooks/header/useHeaderLogic';

const Header = () => {
    const { user, handleSignOut } = useHeaderLogic();

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full h-18 flex justify-between z-10'>
            <img src={LOGO} alt="brand-logo" className='w-32 h-16' />

            {!user ? null : <div className='px-8 py-2 flex gap-2 items-center h-16'>
                <img src={USER_ICON} alt="usericon" className='w-8' />
                <Button onClick={handleSignOut} className="text-white">Sign out</Button>
            </div>}
        </div>
    );
};

export default Header;
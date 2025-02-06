import { Button, Input } from '../../Ui/index';

const GptSearchBar = () => {
    return (
        <div className='flex gap-4 mt-40  bg-black opacity-80 p-5'>
            <Input type="text" placeholder="Search with ai" className="border border-gray-300 placeholder:text-gray-400 w-96 p-2 rounded-sm text-gray-400" />
            <Button className="border border-red-500 bg-red-500 text-white px-4 rounded-sm">Search</Button>
        </div>
    );
};

export default GptSearchBar;
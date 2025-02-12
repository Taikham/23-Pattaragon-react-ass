import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <>
            <div className='flex flex-col items-center mt-14'>
            <h2 className='text-[4rem] font-bold'>Generation Thailand</h2>
            <h2 className='text-[4rem] font-bold'>React - Assessment</h2>
            </div>

            <div className='flex justify-center'>
            <button className='w-[16rem] rounded-md  bg-white mt-[3rem] px-3 py-3 mr-[10rem] text-[1.5rem]  leading-6 text-black hover:bg-gray-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
                <Link to = {'/user'}>User Home Sector</Link>
            </button>
            <button className='w-[16rem] rounded-md  bg-white mt-[3rem] px-3 py-3 text-[1.5rem]  leading-6 text-black hover:bg-gray-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
                <Link to = {'/admin'}>Admin Home Sector</Link>
            </button>
            </div>
        </>
    );
}
import { FaFacebook, FaInstagram } from 'react-icons/fa'
export function Header() {
    return (
        <header className="bg-yellow-400 px-5 w-full h-12 flex flex-row items-center justify-between absolute top-0 z-50">
            <p className='text-white text-sm font-medium'>@super_oficial</p>
            <span className='flex flex-row items-center gap-x-2'>
                <FaFacebook className='text-white' size={20}/>
                <FaInstagram className='text-white' size={20}/>
            </span>
        </header>
    )
}
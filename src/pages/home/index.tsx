import { Header } from "../../components/header";
import Logo from '../../assets/Logo.png'
import { IoExitOutline, IoPersonCircleOutline, IoSearch } from 'react-icons/io5'
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <main className='h-screen'>
            <Header />
            <header className="flex bg-blue-900 pb-4 flex-col mt-12 w-full">
                <div className="flex flex-row justify-between px-6 py-3 items-center w-full">
                    <img src={Logo} className="w-[10%]" alt="" />
                    <label htmlFor="" className="self-end flex flex-row items-center pr-3 rounded-xl bg-white">
                        <input type="text" className="w-[305px] h-9 rounded-xl outline-none px-2" placeholder="Search a book" name="" id="" />
                        <IoSearch className="text-gray-600" />
                    </label>
                    <div className="flex flex-row items-center gap-x-2">
                        <IoPersonCircleOutline size={40} className="text-white" />
                        <div className="flex flex-col">
                            <h1 className="text-xl font-semibold text-white">Roberto</h1>
                            <p className="text-xs text-white">My profile</p>
                        </div>
                        <IoExitOutline size={30} className="text-yellow-400" />
                    </div>
                </div>
                <div className="h-[2px] w-full bg-white" />
                <nav className="flex flex-row w-full items-center mt-4 justify-center">
                    <ul className="flex flex-row justify-between w-full px-32">
                        <li className="text-white text-lg font-medium cursor-not-allowed">
                            Historic Grades
                        </li>
                        <li className="text-white text-lg font-medium cursor-not-allowed">
                            Schedule
                        </li>
                        <li className="text-white text-lg font-medium cursor-not-allowed">
                            Partial Grades
                        </li>
                        <li className="text-white text-lg font-medium cursor-not-allowed">
                            Partial Abscence
                        </li>
                        <Link to={'/books'} className="text-white text-lg font-medium">
                            Library
                        </Link>
                    </ul>
                </nav>
            </header>
            <section className="px-6 mt-8">
                <h1 className="text-3xl font-medium text-blue-900 mb-5">News</h1>
                <div className="flex flex-row gap-x-12 items-center">
                    <div className="flex flex-col items-center gap-y-2 px-8">
                        <img
                            className="w-52 h-52 object-cover rounded-3xl"
                            src="https://www1.udesc.br/agencia/arquivos/18311/images/Coaching_universitario_1.jpg" alt="" />
                        <h1 className="text-sm font-medium text-blue-600">Exchange Programs</h1>
                        <p className="text-xs text-slate-800 text-center">
                            Registration for the exchange program has been opened to several cities in the
                            Europe and North America.
                        </p>
                    </div>
                    <div className="flex flex-col items-center  gap-y-2 px-8">
                        <img
                            className="w-52 h-52 object-cover rounded-3xl"
                            src="https://www.univates.br/eventos//media/alugue/laboratorios_informatica/labinfo_01.jpg" alt="" />
                        <h1 className="text-sm font-medium text-blue-600">Tech lab</h1>
                        <p className="text-xs text-slate-800 text-center">
                            University receives new equipment for students programming and development of systems.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-y-2 px-8">
                        <img
                            className="w-52 h-52 object-cover rounded-3xl"
                            src="https://www.unifor.br/documents/20143/573164/techday-800.jpg/8ac5edd3-0281-92f6-f71e-ff0efdbe8b29?t=1679083664939" alt="" />
                        <h1 className="text-sm font-medium text-blue-600">
                            Artificial Intelligence Courses
                        </h1>
                        <p className="text-xs text-slate-800 text-center">
                            New technology will be implemented in the next semester for integrative projects
                        </p>
                    </div>
                </div>
            </section>
        </main >
    );
}
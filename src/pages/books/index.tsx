import { IoChevronForward } from "react-icons/io5";
import { Header } from "../../components/header";
import { useState } from "react";

const data = [
    {
        id: '1',
        title: 'Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation',
        description: `Delivering a new version of software to users is often a tiring, risky and
                                Late. But by automating the build, deployment and testing processes, and
                                optimized collaboration between developers, testers and the operations team, delivery teams
                                they can roll out changes in a matter of hours – sometimes in minutes. In this book, Jez Humble and David Farley present the principles, practices, and cutting-edge techniques that make fast, high-quality delivery possible, regardless of the size of the project or the complexity of its code.`,
        pages: '254/496',
        author: 'Jez Humble, David Farley',
        img: 'https://m.media-amazon.com/images/I/81sWqReEqDL._SL1500_.jpg'
    },
    {
        id: '2',
        title: 'Understanding algorithms',
        description: `An illustrated guide for programmers and other curious.
An algorithm is nothing more than a step-by-step procedure for solving a problem. The algorithms you'll use the most as a programmer have already been discovered, tested, and proven. If you want to understand them but refuse to study pages and pages of proofs, this is the book for you. This captivating, fully illustrated guide makes it simple to learn how to use the main algorithms in your programs.The book Understanding Algorithms presents an enjoyable approach to this essential topic of computer science. In it, you will learn how to apply common algorithms to the programming problems faced on a daily basis. You'll start with basic tasks like sorting and searching. With practice, you'll tackle more complex problems such as data compression and artificial intelligence. Each example is presented in detail and includes complete diagrams and code in Python.`,
        pages: '0/264',
        author: 'Aditya Bhargava',
        img: 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._SL1296_.jpg'
    },
];

export default function Books() {
    const [state, setState] = useState('1');
    const currentBook = data.find(item => item.id === state);
    return (
        <main className='bg-white h-screen'>
            <Header />
            <section className="mt-12 px-5">
                <div className="flex flex-row w-full">
                    <div className="flex bg-blue-800 px-6 py-3 flex-col gap-y-2 rounded-xl mt-3 w-[1200px]">
                        <p className="text-white text-lg font-medium">Your current reading:</p>
                        <img src={currentBook?.img} className="" alt="" />
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-white text-md font-medium flex flex-row items-center gap-x-1">Continue <IoChevronForward size={12} className="mt-1" /></p>
                            <span className="text-gray-300 text-sm">{currentBook?.pages}</span>
                        </div>
                    </div>
                    <div className="ml-6 mt-3">
                        <div className="p-6 rounded-xl text-lg font-medium bg-blue-300">
                            <h1 className="text-slate-900">
                                {currentBook?.title}
                            </h1>
                            <p className="text-sm text-slate-900">by: {currentBook?.author}</p>
                            <div className="mt-4">
                                <h4>Description: </h4>
                                <p className="text-sm mt-1 text-slate-800 break-words">
                                    {
                                        currentBook?.description
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-10">
                            <h1 className="text-xl font-medium text-slate-800">Available Books</h1>
                            <div className="flex flex-row mt-6 gap-x-6">
                                <img onClick={() => setState('2')} src="https://m.media-amazon.com/images/I/71Vkg7GfPFL._SL1296_.jpg" className="h-28 w-28 p-[3px] bg-gray-300 object-cover rounded-full" />
                                <img src="https://m.media-amazon.com/images/I/71X7hMhMEUL._SL1500_.jpg" className="h-28 w-28 p-[3px] bg-gray-300 object-cover rounded-full" />
                                <img src="https://m.media-amazon.com/images/I/61OKqJ+8AzL._SL1000_.jpg" className="h-28 w-28 p-[3px] bg-gray-300 object-cover rounded-full" />
                                <img src="https://m.media-amazon.com/images/I/61Y0IuO7XTL._SL1001_.jpg" className="h-28 w-28 p-[3px] bg-gray-300 object-cover rounded-full" />
                                <img src="https://m.media-amazon.com/images/I/711siL1zU1L._SL1297_.jpg" className="h-28 w-28 p-[3px] bg-gray-300 object-cover rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
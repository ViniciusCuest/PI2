import { Header } from "../../components/header";
import Layer from '../../assets/layer.png'
import LoginImg from '../../assets/login.png'
import School from '../../assets/school.jpg'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);
    const [hasError, setHasError] = useState(false);

    return (
        <main className='bg-blue-900 h-screen flex flex-col items-center justify-center'>
            <Header />
            <img
                src={School}
                style={{ mixBlendMode: 'overlay', opacity: .8 }}
                className='object-fill absolute w-full mt-32'
            />
            <img style={{ mixBlendMode: 'hard-light' }} src={Layer} className='object-fill w-full' />
            <section className='w-[35%] bg-white mt-[-20%] gap-y-4 flex flex-col items-center p-5 justify-center z-50 rounded-xl'>
                <img src={LoginImg} alt="" className='w-[50%]' />
                <h1 className='text-yellow-400 font-semibold text-2xl'>Login</h1>
                <form action="" className='w-full flex flex-col gap-y-2'>
                    <input
                        ref={emailRef}
                        type="text"
                        className='h-10 w-full bg-blue-300 rounded-lg px-3 placeholder:text-blue-600 placeholder:opacity-60'
                        placeholder='Email'
                    />
                    <input
                        ref={passRef}
                        type="text"
                        className='h-10 w-full bg-blue-300 rounded-lg px-3 placeholder:text-blue-600 placeholder:opacity-60'
                        placeholder='Password'
                    />
                </form>
                <p className="text-sm text-red-600 font-medium">{hasError && 'E-mail ou senha inválido!'}</p>
                <a href="" className='text-sm text-gray-400 underline'>Forgot your password ?</a>
                <button onClick={async () => {
                    try {
                        const request = await axios.post('http://localhost:5000/login', {
                            email: emailRef.current?.value,
                            senha: passRef.current?.value
                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });
                        if (request.status === 200)
                            return navigate('/home');
                    }
                    catch (e: any) {
                        if (e?.response.data.error === 'E-mail ou senha inválido!')
                            setHasError(true);
                    }
                }}
                    className='bg-blue-900 px-5 py-2 text-yellow-300 w-full rounded-lg font-semibold flex items-center justify-center'>
                    Login
                </button>
            </section>
        </main>
    );
}
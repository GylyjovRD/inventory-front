import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

import { Login } from '../redux/actions/userActions';


import LoginImageDark from '../assets/images/login-office-dark.jpeg';
import LoginImage from '../assets/images/login-office-dark.jpeg';

const LoginIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white rotate-[90deg]" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>

const LoginPage = () => {

    const loginRef = useRef(null)
    const passwordRef = useRef(null)

    const dispatch = useDispatch();
    const history = useHistory();
    const userLogin = useSelector((state) => state.userLogin);
    const {error, loading, userInfo} = userLogin;
    useEffect(() => {
        if(userInfo){
            history.push("/");
        }
    }, [userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(Login(loginRef.current.value, passwordRef.current.value))
    }
    return (

        <div className='flex items-center min-h-screen bg-gray-900'>
            <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
                <div className='flex flex-col overflow-y-auto md:flex-row'>
                    <div className='h-32 md:h-auto md:w-1/2'>
                        <img src={LoginImage} className='object-cover w-full h-full hidden' alt='login_image' />
                        <img src={LoginImageDark} className='object-cover w-full h-full block' alt='login_image' />
                    </div>
                    <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
                        <form
                            onSubmit={submitHandler} 
                            className='w-full'>
                            {error && (
                                <h2  className='text-2xl mb-4 font-bold text-center text-indigo-400'>
                                    {error}
                                </h2>
                            )}
                            <h1 className='mb-4 text-3xl text-center font-semibold text-purple-50'>
                                Войти
                            </h1>
                            <label className='block text-sm'>
                                <span className='text-gray-400 text-lg'>Email</span>
                                <input 
                                    ref = {loginRef}
                                    type="email" 
                                    placeholder="Электронная почта" 
                                    className='px-2 block h-8 rounded-md w-full mt-1 placeholder:text-lg text-lg border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input'
                                />
                            </label>
                            <label className='block mt-4 text-sm'>
                                <span className='text-gray-400 text-lg'>Пароль</span>
                                <input 
                                    ref={passwordRef}
                                    className='px-2 block h-8 rounded-md w-full mt-1 placeholder:text-lg text-lg border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input'
                                    type="password" 
                                    placeholder='***************' />
                            </label>
                            <hr className='my-8' />
                            <button
                                type="submit"
                                className='flex justify-center items-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'
                            >
                                <span className='mr-2 text-lg'>Войти</span>
                                
                                {LoginIcon}
                            </button>
                            <p className='mt-4'>
                            <a className="underline text-sm text-gray-300 hover:text-gray-900 flex flex-col" href="tel:+99365346683">
                                Забыли Пароль? <span>или Запросить регистрациию.</span>
                            </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
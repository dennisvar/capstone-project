import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
            <div class="bg-purple-500 p-6 flex items-center">
                <Logo class="h-8 w-8 mr-2"/>
                <span class="text-white font-semibold text-xl mr-6">GBC - Park & Recreation</span>
                <div class="flex justify-between flex-grow">
                    <Navbar/>
                    <a href="#" class="inline-block items-center text-white text-sm underline px-4 py-2 border rounded border-white hover:border-transparent hover:text-purple-500 hover:bg-white">Log In</a>
                </div>
            </div>
        </>
    )
}

export default Header;
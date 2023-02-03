import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav class="flex text-sm items-center">
            <a class="text-purple-300 hover:text-white inline-block underline mr-4" href="/Main">Home</a>
            <a class="text-purple-300 hover:text-white inline-block underline mr-4" href="/Facilities">Facilities</a>
            <a class="text-purple-300 hover:text-white inline-block underline mr-4" href="/Bookings">Bookings</a>
            <a class="text-purple-300 hover:text-white inline-block underline mr-4" href="/Events">Events</a>
            <a class="text-purple-300 hover:text-white inline-block underline mr-4" href="/Maps">Map</a>
            <a class="text-purple-300 hover:text-white inline-block underline" href="/Chat">Chat</a>
        </nav>
    )
}

export default Navbar;
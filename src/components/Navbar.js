import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // const activeStyle = ({ isActive }) => ({
    //     color: isActive ? '#ecf0f1' : '#34495e',
    //     backgroundColor: isActive ? '#34495e' : '#ecf0f1'
    // });
    return (
        // // <p>test</p>
        <nav>
            <ul>
                <li><a href="/Main">Home</a></li>
                <li><a href="/Facilities">Facilities</a></li>
                <li><a href="/Bookings">Bookings</a></li>
                <li><a href="/Events">Events</a></li>
                <li><a href="/Maps">Map</a></li>
                <li><a href="/Chat">Chat</a></li>
            </ul>
        </nav>

        // <>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <NavLink
        //                     to="/Main"
        //                     style={({ isActive }) =>
        //                         isActive ? activeStyle : undefined
        //                     }
        //                 >
        //                     Main
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink
        //                     to="/Facilities"
        //                     style={({ isActive }) =>
        //                         isActive ? activeStyle : undefined
        //                     }
        //                 >
        //                     Facilities
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink
        //                     to="/Bookings"
        //                     style={({ isActive }) =>
        //                         isActive ? activeStyle : undefined
        //                     }
        //                 >
        //                     Bookings
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink
        //                     to="/Events"
        //                     style={({ isActive }) =>
        //                         isActive ? activeStyle : undefined
        //                     }
        //                 >
        //                     Events
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink
        //                     to="/Maps"
        //                     style={({ isActive }) =>
        //                         isActive ? activeStyle : undefined
        //                     }
        //                 >
        //                     Maps
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink
        //                     to="/Chat"
        //                     style={({ isActive }) =>
        //                         isActive ? activeStyle : undefined
        //                     }
        //                 >
        //                     Chat
        //                 </NavLink>
        //             </li>
        //         </ul>
        //     </nav>
        // </>
    )

}

export default Navbar;
import React from 'react';
import './Main.css';
import centreIslandPier from "../assets/centre-island-pier.png";

const Main = () => {
    // document.addEventListener("click", linkClicked)
    // function linkClicked(e) {
    //     const li = e.target.closest("li");
    //     if (li) {
    //         document.querySelector(".active").classList.remove("active")
    //         li.classList.add("active");
    //         const section = li.textContent.toLowerCase();
    //         document.getElementById(section).classList.add("active")
    //     }

    //     const active = window.location.pathname;
    //     const link = document.querySelectorAll("nav li a")
    //         .forEach(link => {
    //             if (link.href.incledes(`${active}`)) {
    //                 link.classList.add('active')
    //             }
    //         })

    //     document.addEventListener("click",listClicked)
    //     function listClicked(ev){
    //     const li = ev.target.closest("li");
    //     if(li){
    //         document.querySelector(".active").classList.remove("active");
    //         li.classList.add("active");
    //         const section = li.textContent.toLowerCase();
    //         document.getElementById(section).classList.add("active")
    //     }
    //     }
    // }
    return (
        <>
            <div class="main-container">
                <div class="column left">
                    <h1>Toronto Island Park</h1>
                    <hr></hr>
                    <div class="image-container">
                        <img src={centreIslandPier} alt="Centre Island Pier"/>
                    </div>
                    <div class="about-container">
                        <h2>About us Page</h2>
                        <p>The Toronto Islands provide a great, refreshing escape from downtown with a beautiful view of Lake Ontario on one side, and the city skyline on the other.</p>
                    </div>
                </div>
                <div class="column right">
                    <div class="contact-container">
                        <h2>Contact Information</h2>
                        <hr></hr>
                        <p>First/Lost Children/Lost Parent<br/>
                        Station Lost and Found<br/>
                        Centre Island<br/>
                        Near the ferry dock<br/>
                        May to September<br/>
                        10:30 am to 5:30 pm<br/>
                        </p>
                        <p>Some wheelchairs are available to use for free on the fist come first served basis Government-issued ID is required</p>
                    </div>
                    <div class="schedule-container">
                        <h2>Park Schedule</h2>
                        <p>Mon: 11:00 am - 6:00 pm<br/>
                        Tue: 11:00 am - 6:00 pm<br/>
                        Wed: 11:00 am - 5:00 pm<br/>
                        Thurs: 12:00 am - 7:00 pm<br/>
                        Fri: 10:00 am - 9:00 pm<br/>
                        Sat: 11:00 am - 9:00 pm<br/>
                        Sun: 11:00 am - 9:00 pm</p>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <div class="main-container">
    <div>
        <div class="column1">
            <h1>High Park</h1> 
            <div id="image-container">
                <img src={parkImage} id="parkImage" alt="park"/>
            </div>
            <div class="about-container">
                <h2>About us</h2>
                <p>High Park's 399 acres in the middle of Toronto is an excellent getaway for children and adults of all ages.</p>
            </div>
        </div>
        <div class="column2">
            <div class="contact-container">
                <h2>Contact Information</h2>
                <p>First/Lost Children/Lost Parent
                Centre Island
                Near the ferry dock
                May to September
                10:30 am to 5:30 pm
                </p>
                <p>Some wheelchairs are available to use for free on the fist come first served basis Government-issued ID is required</p>
            </div>
            <div class="schedule-container">
                <h2>Park Schedule</h2>
                <p>Mon: 11:00 am - 6:00 pm
                Tue: 11:00 am - 6:00 pm
                Wed: 11:00 am - 5:00 pm
                Thurs: 12:00 am - 7:00 pm
                Fri: 10:00 am - 9:00 pm
                Sat: 11:00 am - 9:00 pm
                Sun: 11:00 am - 9:00 pm</p>
            </div>
        </div>
    </div>
</div> */}

export default Main;
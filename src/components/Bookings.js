import React from 'react';



const Bookings = () => {

    return (
        <>
            <div>
                <div class="flex py-16 justify-center">
                    <div class="mx-auto w-full max-w-[450px] shadow-md px-12 py-12 bg-white rounded-2xl">
                        <div>
                            <h1 class="text-[#35074d] text-3xl font-bold text-center mb-4">Book a Facility</h1>
                        </div>
                        <form>
                            <div class="mb-5">
                                <label class="mb-3 block text-base font-medium text-[#35074d]" for="name ">Name: </label>
                                <input class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#9f64f1] focus:shadow-md" id="name" type="text" placeholder="Name"/>
                            </div>
                            <div class="mb-5">
                                <label class="mb-3 block text-base font-medium text-[#35074d]" for="facility">Facility: </label>
                                <select class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#9f64f1] focus:shadow-md" id="facility">
                                    <option selected hidden >-- Select Facility --</option>
                                    <option>Picnic Pavilion</option>
                                    <option value="defaultOption">Beach Firepit</option>
                                    <option>Petting Zoo</option>
                                    <option>Splash Pad</option>
                                    <option>Hedge Maze</option>
                                </select>
                            </div>
                            <div class="mb-5">
                                <label class="mb-3 block text-base font-medium text-[#35074d]" for="date">Date: </label>
                                <input class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#9f64f1] focus:shadow-md" id="date" type="date"></input>
                            </div>
                            <div class="mb-5">
                                <label class="mb-3 block text-base font-medium text-[#35074d]" for="time" >Time: </label>
                                <input class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#9f64f1] focus:shadow-md" id="time" type="time"></input>
                            </div>
                            <div class="flex max-w-[200px] mx-auto justify-between">
                                <button class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600" type="reset" value="Reset">Clear</button>
                                <button class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600" type="submit" value="Submit">Book</button>
                            </div>
                    </form>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            <div class="container mx-auto px-4 py-2 md:py-24 ">
                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="flex items-center justify-between py-2 px-6">
                        <div>
                            <span>February</span>
                            <span>2023</span>
                        </div>
                    </div>
                    <div class="-mx-1 -mb-1">
                        <div class="flex flex-wrap text-center font-bold border-t border-l">
                            <div class="w-[14.28%] px-2 py-2 border-r">SUNDAY</div>
                            <div class="w-[14.28%] px-2 py-2 border-r">MONDAY</div>
                            <div class="w-[14.28%] px-2 py-2 border-r">TUESDAY</div>
                            <div class="w-[14.28%] px-2 py-2 border-r">WEDNESDAY</div>
                            <div class="w-[14.28%] px-2 py-2 border-r">THURSDAY</div>
                            <div class="w-[14.28%] px-2 py-2 border-r">FRIDAY</div>
                            <div class="w-[14.28%] px-2 py-2">SATURDAY</div>
                        </div>
                        <div class="flex flex-wrap border-t border-l">
                            <div class="text-cente border-r border-b px-4 pt-2 w-[14.28%] h-32"></div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32"></div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32"></div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">1</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">2</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">3</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">4</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">5</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">6</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32 ">7</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">8</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">9</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">10</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">11</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">12</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">13</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">14</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">15</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">16</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">17</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">18</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">19</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">20</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">21</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">22</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">23</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">24</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">25</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">26</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">27</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32">28</div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32"></div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32"></div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32"></div>
                            <div class="text-center border-r border-b px-4 pt-2 w-[14.28%] h-32"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookings;
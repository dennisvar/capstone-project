import React from 'react';
import './Bookings.css';

const Bookings = () => {
    return (
        <>
            <div class="booking-container">
                    <div class="form-container">
                        <form>
                            <div>
                                <label>Facility: </label>
                                <select>
                                    <option>Picnic Pavilion</option>
                                    <option>Beach Firepit</option>
                                    <option>Petting Zoo</option>
                                    <option>Splash Pad</option>
                                    <option>Hedge Maze</option>
                                </select>
                                <label>Date: </label>
                                <input type="date"></input>
                                <label>Time: </label>
                                <input type="time"></input>
                            </div>
                        </form>
                    </div>
                <div class="row">
                    <div class="column left">
                        <div class="calendar-container">
                            <div>
                                <ul>
                                    <li>June 2021</li>
                                </ul>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>SUN</th>
                                        <th>MON</th>
                                        <th>TUE</th>
                                        <th>WED</th>
                                        <th>THUR</th>
                                        <th>FRI</th>
                                        <th>SAT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>9</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>16</td>
                                        <td>17</td>
                                        <td>18</td>
                                        <td>19</td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>26</td>
                                    </tr>
                                    <tr>
                                        <td>27</td>
                                        <td>28</td>
                                        <td>29</td>
                                        <td>30</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="column right">
                        <div class="view-container">
                            <div>
                                <p><u><strong>Selected Day</strong></u></p>
                                <p>All Facilities are booked for today<br/>
                                Please Select another day for your booking<br/>
                                Selected Faciliies Basketball Court<br/>
                                Time: 2:00 pm - 4:00 pm<br/>
                                Booking Rejected</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button-container">
                    <button>Cancel</button>
                    <button>Book</button>
                </div>
            </div>
        </>
    )
}

export default Bookings;
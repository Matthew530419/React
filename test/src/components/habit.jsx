import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js'

class Habit extends Component {
    render() {
        return(
        <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">0</span>
        <button className="habit-button habit-increase">
        <i className="fa-solid fa-square-plus"></i>
        </button>
        <button className="habit-button habit-decrease">
        <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete">
        <i className="fa-solid fa-trash"></i>
        </button>
        </li>
        );
    }
}
export default Habit;
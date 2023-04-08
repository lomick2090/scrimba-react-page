import React from 'react';
import icon from '../reactIcon.png'

export default function Main(props) {
    return (
        <div className={`Main ${((props.darkMode) ? '' : 'light')}`}>
            <h1>Fun Facts about React</h1>
            <ul className='list'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img className='backgroundicon' src={icon}></img>
        </div>
    )
}
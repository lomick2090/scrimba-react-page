import React from 'react';
import ReactDOM from 'react-dom/client'
import icon from '../reactIcon.svg'

export default function Nav() {
    return (
        <div className='Nav'>
            <div>
                <img className='icon' src={icon}></img>
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </div>
    )
}
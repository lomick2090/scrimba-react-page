import React from 'react';
import icon from '../reactIcon.png'

export default function Nav(props) {
    return (
        <div className={`Nav ${((props.darkMode) ? '' : 'light')}`}>
            <div>
                <img className='icon' src={icon}></img>
                <h3>ReactFacts</h3>
            </div>
            <div className='modetoggle'>
                <p>light mode</p>
                    <div className='toggle' onClick={props.handleClick}>
                        <div className='toggleslider'></div>
                    </div>
                <p>dark mode</p>
            </div>
        </div>
    )
}
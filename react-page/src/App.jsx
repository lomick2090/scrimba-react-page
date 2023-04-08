import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav'
import Main from './components/Main'

export default function App() {
    const [isDarkMode, setIsDarkMode] = React.useState(true);

    function swapDarkMode() {
        setIsDarkMode(prevMode => !prevMode)
    }
    return (
        <div className='app'>
            <Nav darkMode={isDarkMode} handleClick={swapDarkMode}/>
            <Main darkMode={isDarkMode}/>
        </div>
    )

}
import React from 'react';
import NavBar from "./common/Navigation";
import './css/tufte.css';
import './common/Navigation.css';
import './fonts/fonts.css';
import './App.css';
import './common/toc.css'
import './components/FilterTag.css'
import './css/toggle.css'


function App() {

    return (
        <React.Fragment>
            <div className="header">
                <h1>Header</h1>
                <p>My supercool header</p>
            </div>
            <NavBar/>
        </React.Fragment>
    );
}




export default App;

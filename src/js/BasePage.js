import React from 'react';
import { Link } from 'react-router-dom';
import App from './App'
import Header from './Header'
import AfricaMap from './AfricaMap';
import '../css/BasePage.css'

function BasePage() {

    return (
        <div>
            <div className='header-section'>
                <Header/>
            </div>
            <div>
                <AfricaMap/>
                </div>

            <div className='journals-section'>

            </div>
            </div>

    );
}
export default BasePage;
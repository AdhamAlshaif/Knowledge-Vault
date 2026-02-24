import React from 'react';
import './HomePage.css';
function HomePage(){

    return (
        <div className='main-container'>
            <div className='project-name'>
            <h1>Welcome to Knowledge Vault</h1>
            </div>
            <div className='project-description'>
                <p>A platform designed to help students learn more effectively using the power of AI tools.</p>
                <button className='get-started-button'><span>Get Started</span></button>
            </div>
        </div>
    );
}
export default HomePage;
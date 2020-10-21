import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>TOYS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>BEDS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>COLLARS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>CLOTHES</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>FEEDERS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default HomePage;
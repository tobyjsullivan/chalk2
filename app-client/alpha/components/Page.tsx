import React from 'react';
import Sidebar from './Sidebar';
import SplashScreen from './SplashScreen';

import './Page.css';

class Page extends React.Component {
  render() {
    return(
      <div className="Page">
        <div className="Page__Sidebar">
          <Sidebar />
        </div>
        <div className="Page__Content">
          <SplashScreen />
        </div>
      </div>
    );
  }
}

export default Page;

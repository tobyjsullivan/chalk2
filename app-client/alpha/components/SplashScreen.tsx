import React from 'react';

import './SplashScreen.css';

class SplashScreen extends React.Component {
  render() {
    return (
      <div className="SplashScreen">
        <h2>About This Application</h2>
        <p><strong>Hello World!</strong> is an example app. It is intended as a placeholder app for evaluating this UI prototype.</p>
        <p>You will quickly notice that this app is not functional.</p>
      </div>
    );
  }
}

export default SplashScreen;

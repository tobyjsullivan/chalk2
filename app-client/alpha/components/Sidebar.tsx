import React from 'react';
import Menu from './Menu';
import Title from './Title';

import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="Sidebar">
        <Title />
        <Menu />
      </div>
    );
  }
}

export default Sidebar;

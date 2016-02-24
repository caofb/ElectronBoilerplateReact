require('styles/main.css');

import React from 'react';

class FooterComponent extends React.Component {
  render() {
    return (
     <div id="footer">
      <div className="container">
        <p className="text-muted">Cosplay主题包管理.</p>
      </div>
    </div>
    );
  }
}

FooterComponent.defaultProps = {
};

export default FooterComponent;

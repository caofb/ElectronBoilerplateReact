require('styles/main.css');

import React from 'react';

class ErrorInfoComponent extends React.Component {
  render() {
    return (
     <div id="errorInfo" className="alert alert-danger" role="alert" >      
      <p>{errorInfo}</p>
     </div>
    );
  }
}

ErrorInfoComponent.defaultProps = {
    errorInfo:React.PropTypes.string.isRequired
};

export default ErrorInfoComponent;

require('styles/main.css');

import React from 'react';

class SuccessInfoComponent extends React.Component {
  render() {
    return (
     <div id="successInfo" className="alert alert-success" role="alert">      
      <p>{this.props.successInfo}</p>
     </div> 
    );
  }
}

SuccessInfoComponent.defaultProps = {
    successInfo:React.PropTypes.string.isRequired
};

export default SuccessInfoComponent;

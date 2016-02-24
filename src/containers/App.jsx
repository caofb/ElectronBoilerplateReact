require('normalize.css');
require('styles/main.css');
import DevTools from './DevTools';
import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
     <div>
        {this.props.children}
        {
        (() => {
          if (process.env.NODE_ENV !== 'production') {
            return <DevTools />;
          }
        })()
      }
      </div>
    );
  }
}

export default AppComponent;

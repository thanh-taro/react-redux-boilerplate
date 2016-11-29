import React from 'react';

class SimpleLayout extends React.Component {

  render() {
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}

export default SimpleLayout;
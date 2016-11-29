import React from 'react';
import {connect} from 'react-redux';
import {SimpleLayout} from 'base/layouts';

class App extends React.Component {

  render() {
    return (
      <SimpleLayout>
        {this.props.children}
      </SimpleLayout>
    );
  }
}

export default connect()(App);

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Header} from './Header.js';
import {Body} from './Body.js';

export class App extends React.Component {
  render() {
    return (
      <div>
        {/*<Header />*/}
        <Body />
      </div>
    );
  }
}

export default App;
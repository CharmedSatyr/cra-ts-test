import React, { SFC } from 'react';

import Foo from './foo';

import logo from './logo.svg';

import './app.css';

const App: SFC<{}> = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Foo bar="Hello, " />
    </header>
  </div>
);

export default App;

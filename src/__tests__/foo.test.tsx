import React from 'react';
import ReactDOM from 'react-dom';

import Foo from '../foo';

it('renders without crashing', () => {
  const baz = 'Hello, ';
  // const baz = 'Yo';

  const div = document.createElement('div');
  ReactDOM.render(<Foo bar={baz} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

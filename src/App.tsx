import faker from 'faker';
import React, { Component, FC, ReactNode } from 'react';

import logo from './logo.svg';

import './App.css';

interface IProps {
  bar: string;
}

interface IState {
  name: string;
}

class Foo extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { name: 'John' };
  }
  public componentDidMount(): void {
    setInterval((): void => {
      this.update();
    }, 1000);
  }
  public render(): ReactNode {
    return (
      <h1>
        {this.props.bar} {this.state.name}
      </h1>
    );
  }
  private update(): void {
    const newName: string = faker.name.firstName();
    this.setState({ name: newName });
  }
}

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Foo bar="Hello to" />
      </header>
    </div>
  );
};

export default App;

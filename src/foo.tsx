import { name as fake } from 'faker';
import React, { Component, ReactNode } from 'react';

type Welcome = 'Hello to ' | 'Hello, ';

interface IProps {
  bar: Welcome;
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
      const newName: string = fake.firstName();
      this.updateName(newName);
    }, 1000);
  }
  public render(): ReactNode {
    return (
      <h1>
        {this.props.bar} {this.state.name}
      </h1>
    );
  }
  private updateName(newName: string): void {
    this.setState({ name: newName });
  }
}

export default Foo;

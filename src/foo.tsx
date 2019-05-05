import faker from 'faker';
import React, { Component, ReactNode } from 'react';

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
      const newName: string = faker.name.firstName();
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
  private updateName(name: string): void {
    this.setState({ name });
  }
}

export default Foo;

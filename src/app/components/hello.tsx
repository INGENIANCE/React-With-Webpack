import * as React from 'react';
import { IHelloProps } from '../interfaces/IHelloProps';

export class Hello extends React.Component< IHelloProps, {}> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
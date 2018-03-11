import React, { Component } from 'react';

export class CountView extends Component {
  render() {
    return (
      <div>
        The count is: {this.props.count}
      </div>
    );
  }
}
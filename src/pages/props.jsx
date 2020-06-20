// 组件传值事例
import React from 'react';

const Son = (props) => {
  const name = props.name;

  return <div>{name}</div>;
};

export default class Props extends React.Component {
  state = {
    name: 'Father',
  };

  handleClick = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        Props Pages
        <button onClick={() => this.handleClick('Father')}>Father</button>
        <button onClick={() => this.handleClick('Mother')}>Mother</button>
        <Son name={this.state.name} />
      </div>
    );
  }
}

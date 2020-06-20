// Class State 事例
import React from 'react';

class ClickPage extends React.Component {
  state = {
    count: 0,
  };

  handleClickCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log(this.state.count);

    return (
      <div>
        点击次数<span>{this.state.count}</span>
        <button onClick={this.handleClickCount}>点击</button>
      </div>
    );
  }
}

export default ClickPage;
export const Many = 1;

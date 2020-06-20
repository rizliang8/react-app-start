# React

## Component

组件声明方式

1.函数

```jsx
function App() {
  return <div className="App">123</div>;
}
```

2.Class

```jsx
class App extends React.Component {
  render() {
    return <div>987</div>;
  }
}
```

以前的历史，Class 才有状态

1. 什么是状态， 状态-我的解释是存储变量的状态，然后本轮的 Render，将这个状态的对应逻辑，渲染到 View（render 的 return 内容）上。
2. Class 通常情况下触发 this.setState， 就会重新执行 render，所以应该有每一轮状态的概念。

参考 `/src/pages/click.jsx`

```jsx
class App extends React.Component {
  state = {
    count: 0,
  };

  handleClickCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        点击次数<span>{this.state.count}</span>
        <button onClick={this.handleClickCount}>点击</button>
      </div>
    );
  }
}
```

## Props

参考 `/src/pages/props.jsx`

## React-Router

参考 `/src/App.jsx`

```shell
npm install react-router-dom -S
```

## Import and export

`Import`:  
引入组件的时候，会用 `import`, 比如 `import React, { Component } from 'react'`.  
为什么 React 不用加大括号，Component 要加.  
`Export`
包或者文件里面，export default 的话， 外面引入就直接 `import xxx from 'package'`，就可以拿到 default，名字不需要对应。  
export XXX 的话，需要加大括号，名字要跟 export 的对应， `import {XXX, YYY} from 'package'`. 改名可以用 as

## StrictMode

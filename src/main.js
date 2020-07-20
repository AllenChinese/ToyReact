import ToyReact, { Component } from '../ToyReact'

class MyComponent extends Component {
  render () {
    return (
      <div>
        <span>hello</span>
        <span>ToyReact</span>
        {this.children}
      </div>
    )
  }
}

let root = <MyComponent id="my_component">
  <p style="color: red;">winter is comming</p>
</MyComponent>

ToyReact.render(root, document.body)


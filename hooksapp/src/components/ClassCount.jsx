import React, { Component } from "react";

export class ClassCount extends Component {
  componentDidMount() {
    console.log("Je suis dans le CDU");
    document.title = `Vous avez cliqué ${this.state.count} fois`;
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Je suis dans le CDU");
    if(this.state.count !== prevState.count) {
      console.log('Mise à jour du titre')
      document.title = `Vous avez cliqué ${this.state.count} fois`;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="me-4" onClick={() => this.setState({ count: this.state.count + 1 })}>
          {" "}
          sans les Hooks{" "}
        </button>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {this.setState({ name: e.target.value }); }}
        />

      </div>
    );
  }
}

export default ClassCount;

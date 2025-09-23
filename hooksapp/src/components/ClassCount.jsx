import React, { Component } from "react";

export class ClassCount extends Component {
  componentDidMount() {
    console.log("Je suis dans CDM");
    document.title = `Vous avez cliqué ${this.state.count} fois`
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ''
    };
  }

  componentDidUpdate(prevProps, prevState){
    document.title = `Vous avez cliqué ${this.state.count} fois`
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count : this.state.count +1})}> Clique  </button>
      </div>
    );
  }
}

export default ClassCount;

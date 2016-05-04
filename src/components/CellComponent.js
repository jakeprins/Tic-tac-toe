import React from 'react'

class CellComponent extends React.Component {
  constructor(){
    super()
    this.state = {cell: ""};
  }

    cellStateX() {
      this.setState({cell: "X"});
        return (
          <button>{this.state.cell}</button>
      );
    }

    cellStateO() {
      this.setState({cell: "O"});
        return (
          <button>{this.state.cell}</button>
      );
    }

    render() {

    return (
      <div>
        <div>
          <button onClick={this.clickState}>{this.clickState.cell}</button>
          <button></button>
          <button></button>
        </div>
        <div>
          <button>X</button>
          <button>X</button>
          <button>X</button>
        </div>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    );


}

export default CellComponent;

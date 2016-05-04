import React from 'react';
import GameModel from './models/GameModel';
import NewPlayerComponent from './components/NewPlayerComponent';
import CellComponent from './components/CellComponent';

const styles = {
  row: {
    height: "30%",
    width: "100%"
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.games = new GameModel();

    this.state = {
      cells: [
        null, "cross", null,
        null, "circle", null,
        "circle", null, null
      ]
    };
  }

  getPlayerSymbol() {
    //TODO: determine which player we are (one or two?)
    return "cross"; // or "circle"
  }

  stealCell(index) {
    let newCells = this.state.cells;
    newCells[index] = this.getPlayerSymbol();

    this.setState({
      cells: newCells
    });
  }

  getBoardStyles() {
    let widthHeight = Math.min(window.innerWidth, window.innerHeight);

    return {
      width: widthHeight,
      height: widthHeight
    };
  }

  render() {
    return (
      <div style={this.getBoardStyles()}>
        <div style={styles.row}>
          <CellComponent content={this.state.cells[0]} index={0} onClick={this.stealCell.bind(this)}/>
          <CellComponent content={this.state.cells[1]} index={1} onClick={this.stealCell.bind(this)}/>
          <CellComponent content={this.state.cells[2]} index={2} onClick={this.stealCell.bind(this)}/>
        </div>
        <div style={styles.row}>
          <CellComponent content={this.state.cells[3]} index={3} onClick={this.stealCell.bind(this)}/>
          <CellComponent content={this.state.cells[4]} index={4} onClick={this.stealCell.bind(this)}/>
          <CellComponent content={this.state.cells[5]} index={5} onClick={this.stealCell.bind(this)}/>
        </div>
        <div style={styles.row}>
          <CellComponent content={this.state.cells[6]} index={6} onClick={this.stealCell.bind(this)}/>
          <CellComponent content={this.state.cells[7]} index={7} onClick={this.stealCell.bind(this)}/>
          <CellComponent content={this.state.cells[8]} index={8} onClick={this.stealCell.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;

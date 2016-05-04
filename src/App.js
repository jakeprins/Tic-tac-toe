import React from 'react';
import GameModel from './models/GameModel';
import NewPlayerComponent from './components/NewPlayerComponent';
import CellComponent from './components/CellComponent';
import GameComponent from './components/GameComponent';
import Utils from './lib/Utils';

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
    this.utils = new Utils();

    let playerStorage = this.utils.store("tictactoe.player");
    if (playerStorage.length === 0) {
      playerStorage = null;
    }

    this.state = {
      cells: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      games: [],
      currentGame: null,
      currentPlayer: playerStorage,
    };
  }

  getPlayerSymbol() {
    //TODO: determine which player we are (one or two?)
    return "circle"; // or "circle"
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

  setPlayer(player) {
    this.setState({
      currentPlayer: player
    });
    this.utils.store("tictactoe.player", player);
    
  }

  createGame() {
    this.games.addResource({
      playerOne: this.state.currentPlayer
    });
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

        { this.state.currentPlayer !== null &&
          <p>Hi, {this.state.currentPlayer}</p> }

        { this.state.currentPlayer === null &&
          <NewPlayerComponent onCreate={this.setPlayer.bind(this)}/> }
      </div>

    );
  }
}

export default App;

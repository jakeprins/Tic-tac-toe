import React from 'react';
import GameModel from './models/GameModel';
import NewPlayerComponent from './components/NewPlayerComponent';
import CellComponent from './components/CellComponent';
import NewGameComponent from './components/NewGameComponent';
import GameListComponent from './components/GameListComponent';
import Utils from './lib/Utils';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from './lib/Theme';

const styles = {
  row: {
    height: "30%",
    width: "100%"
  }
};

const myButton = {
  margin: 15,
};

const myHeader = {
  textAlign: "center"
}

class App extends React.Component {
  constructor() {
    super();
    this.games = new GameModel();
    this.games.subscribe(this.updateList.bind(this));
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


  getChildContext() {
     return {
       muiTheme: ThemeManager.getMuiTheme(Theme),
     };
   }

   updateList() {
    this.setState({
      games: this.games.resources
    });

    if (this.state.currentGame !== null) {
      let component = this;
      this.games.resources.map(function(game) {
        if (game._id === component.state.currentGame._id) {
          console.log(game);
          component.setState({
            currentGame: game
          });
        }
      });
    }
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

   joinGame(game) {
     console.log("Joining game...");
     if (game.playerOne === this.state.currentPlayer || game.playerTwo === this.state.currentPlayer || game.playerTwo === null) {
       if (game.playerOne !== this.state.currentPlayer && game.playerTwo !== this.state.currentPlayer) {
         console.log("Joining game as player two...");
         this.games.save(game, { playerTwo: this.state.currentPlayer });
       }

       this.setState({
         currentGame: game
       });
     } else {
       window.alert("Sorry bruh");
     }
   }

   getPlayerSymbol() {
         let currentPlayer = this.state.currentPlayer;
         let playerOne = this.state.currentGame.playerOne;
         let playerTwo = this.state.currentGame.playerTwo;

         if (playerOne === currentPlayer) {
           return "cross";
         }

         if (playerTwo === currentPlayer) {
           return "circle";
         }

     }

  stealCell(index) {
    let newCells = this.state.currentGame.cells;
    newCells[index] = this.getPlayerSymbol();

    this.games.save(this.state.currentGame, { cells: newCells});
  }

  getBoardStyles() {
    let widthHeight = Math.min(window.innerWidth, window.innerHeight);

    return {
      width: widthHeight,
      height: widthHeight
    };
  }

  containerStyles() {
    return {
      width: "500px",
      height: "500px",
      margin: "auto",
    };
  }

  headerStyle() {
    return {
      textAlign: "center"
    };
  }

  clearCurrentGame() {
    this.setState({
      currentGame: null
    });
  }


  render() {
    return (
      <div>
      <AppBar title="Tic Tac Toe"/>

      <div>
        { this.state.currentPlayer !== null &&
            <p>Hi, {this.state.currentPlayer}</p> }

          { this.state.currentPlayer === null &&
            <NewPlayerComponent onCreate={this.setPlayer.bind(this)}/> }

          { this.state.currentPlayer && this.state.currentGame === null &&
            <GameListComponent games={this.state.games} currentPlayer={this.state.currentPlayer} onSelect={this.joinGame.bind(this)}/> }

          { this.state.currentPlayer && this.state.currentGame === null &&
            <NewGameComponent onCreate={this.createGame.bind(this)}/> }

          { this.state.currentPlayer && this.state.currentGame !== null && <div className="game">
            <p>Player one: {this.state.currentGame.playerOne}</p>
            <p>Player two: {this.state.currentGame.playerTwo}</p>
            <div style={this.getBoardStyles()}>
              <div style={styles.row}>
                <CellComponent content={this.state.currentGame.cells[0]} index={0} onClick={this.stealCell.bind(this)}/>
                <CellComponent content={this.state.currentGame.cells[1]} index={1} onClick={this.stealCell.bind(this)}/>
                <CellComponent content={this.state.currentGame.cells[2]} index={2} onClick={this.stealCell.bind(this)}/>
              </div>
              <div style={styles.row}>
                <CellComponent content={this.state.currentGame.cells[3]} index={3} onClick={this.stealCell.bind(this)}/>
                <CellComponent content={this.state.currentGame.cells[4]} index={4} onClick={this.stealCell.bind(this)}/>
                <CellComponent content={this.state.currentGame.cells[5]} index={5} onClick={this.stealCell.bind(this)}/>
              </div>
              <div style={styles.row}>
                <CellComponent content={this.state.currentGame.cells[6]} index={6} onClick={this.stealCell.bind(this)}/>
                <CellComponent content={this.state.currentGame.cells[7]} index={7} onClick={this.stealCell.bind(this)}/>
                <CellComponent content={this.state.currentGame.cells[8]} index={8} onClick={this.stealCell.bind(this)}/>
              </div>
            </div>
          </div> }
      </div>

      <div style={myHeader}>
        <FlatButton onClick={this.clearCurrentGame.bind(this)}label="Back" secondary={true} style={myButton}/>
      </div>

    </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
 };

export default App;

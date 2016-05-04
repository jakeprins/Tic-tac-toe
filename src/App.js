import React from 'react';
import GameModel from './models/GameModel';
import NewPlayerComponent from './components/NewPlayerComponent';
import CellComponent from './components/CellComponent';
import PlayerMoveComponent from './components/PlayerMoveComponent';


class App extends React.Component {
  constructor() {
    super();
    this.games = new GameModel();
    this.state = ""
    };

  }

  clickState(){
    console.log('clicked!')
    return (
      this.setState({cell: "X"})
    )
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

}

export default App;

import React from 'react';

class GameComponent extends React.Component {
  createGame(event) {
    event.preventDefault();
    console.log("Create Game Called!");
    this.props.onCreate();
  }

  render() {
    return(
      <div>
        <button onClick={this.createGame.bind(this)} label="Create New Game" />
      </div>
    );
  }
}

export default GameComponent;

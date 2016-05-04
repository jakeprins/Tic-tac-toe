import BaseModel from './BaseModel';

class GameModel extends BaseModel {
  defaults() {
    return {
      playerOne: "cross",
      playerTwo: "circle",
      playerOneMove: null,
      playerTwoMove: null,
      winner: null
    };
  }

  constructor() {
    super('game');
  }
}

export default GameModel;

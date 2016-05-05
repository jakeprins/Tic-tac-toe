import BaseModel from './BaseModel';

class GameModel extends BaseModel {
  defaults() {
    return {
      playerOne: null,
      playerTwo: null,
      cells: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      winner: null
    };
  }

  constructor() {
    super('game');
  }
}

export default GameModel;

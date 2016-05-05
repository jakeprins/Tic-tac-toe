import React from 'react';
import GameListItemComponent from './GameListItemComponent';
import List from 'material-ui/lib/lists/list';

class GameListComponent extends React.Component {
  selectGame(game) {
    this.props.onSelect(game);
  }

  render() {
    let component = this;
    return (
      <List subheader="Recent games">
        {this.props.games.map(function(game) {
          return (<GameListItemComponent key={game._id} game={game} currentPlayer={component.props.currentPlayer} onClick={component.selectGame.bind(component)}/>);
        })}
      </List>
    );
  }
}

export default GameListComponent;

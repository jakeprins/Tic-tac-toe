import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


const myButton = {
  margin: 12,
  width: "250px",
  wight: "50px",
  float: "left"
};

class NewPlayerComponent extends React.Component {
  createPlayer(event) {
    event.preventDefault();
    let newPlayer = this.refs.playerName.getValue();
    this.props.onCreate(newPlayer);
  }

  render() {
    return(
      <div>
        <div>
          <label>Player Name:</label>
          <TextField ref="playerName" hintText="What's your name?"/>
        </div>

        <div>
          <RaisedButton onClick={this.createPlayer.bind(this)} label="Join" style={myButton} primary={true} />
        </div>
      </div>
    );
  }
}

export default NewPlayerComponent;

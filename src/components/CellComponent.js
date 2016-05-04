import React from 'react';

const cross = require('../images/cross.png');
const circle = require('../images/circle.png');

class CellComponent extends React.Component {
  constructor(){
    super();
  }

  getCellStyles() {
    return {
      width: "30%",
      height: "100%",
      border: "1px solid #eee",
      borderRadius: "3px",
      dropShadow: "1px 1px 3px rgba(0,0,0,0.3)",
      display: "inline-block",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundImage: this.getImage()
    };
  }

  getImage() {
    if (this.props.content === "cross") {
      return `url(${cross})`;
    }

    if (this.props.content === "circle") {
      return `url(${circle})`;
    }
  }

  clickCell() {
    if (this.props.content === null) {
      this.props.onClick(this.props.index);
    }
  }

  render() {
    let cellStyle = this.getCellStyles();

    return (
      <div style={cellStyle} onClick={this.clickCell.bind(this)}></div>
    );
  }
}

export default CellComponent;

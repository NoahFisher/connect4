import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameBoard extends Component {
  render() {
    return (
      <div > Game Board </div>
    );
  }
}

export default GameBoard;

GameBoard.propTypes = {
  id: PropTypes.string,
  board: PropTypes.array,
  playerOne: PropTypes.func,
  playerTwo: PropTypes.func,
  playerMove: PropTypes.func,
}


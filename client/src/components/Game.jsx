import React from 'react';
import Board from './Board.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[0,0,0],
              [0,0,0],
              [0,0,0]],
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
      <Board current={this.state.board} />
      </div>
    );
  }
}
export default App;

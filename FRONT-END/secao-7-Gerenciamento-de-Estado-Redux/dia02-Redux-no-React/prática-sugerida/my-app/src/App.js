import { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreatorCounter, actionCreatorClicks } from './redux/actions';
import './App.css';

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clicksState: state.counterReducer.clicks,
});

class App extends Component {
  render() {
    const { dispatch, countState, clicksState } = this.props;

    const dispatchAll = (add = 1) => {
      dispatch(actionCreatorCounter(add));
      dispatch(actionCreatorClicks());
    };

    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatchAll()}>Incrementar 1</button>
        <button onClick={() => dispatchAll(5)}>Incrementar 5</button>
        <h2>{ clicksState }</h2>
      </div>
    );
  }
}


export default connect(mapStateToProps)(App);

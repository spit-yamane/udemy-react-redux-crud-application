import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { increment, decrement} from '../actions';

class App extends Component {
  render(){
    const props = this.props;
    return (
      <>
        <div>counter: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
// const mapDispacthToProps = dispath => ({
//   increment: () => dispath(increment()),
//   decrement: () => dispath(decrement()),
// })

const mapDispacthToProps = ({ increment,decrement })

export default connect(mapStateToProps, mapDispacthToProps)(App)

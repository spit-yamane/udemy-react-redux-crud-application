import {Component} from 'react';

class App extends Component{
  render(){

    return(
      <>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={()=>{console.log("click!")}} />
      </>
    )
  }
}
// function App() {
//     return (
//       <h1>hello world</h1>
//     );
// }

export default App;

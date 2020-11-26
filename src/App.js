import React from 'react';



const App = () => {
    const profiles = [
      {name: 'Tomonori',age: 28},
      {name: 'Miu',age: 5},
      {name: 'Taro'},
    ]
    return (
      <div>
        {
          profiles.map((profile ,index)=>{
            return <User name={profile.name} age={profile.age} key={index}/>
          })
        }
      </div>
    );
}
const User = (props) => {
    return (
      <>
         <div>Hi! I am {props.name}! , and {props.age} years old.</div>
      </>
    );
}

User.defaultProps = {
  age:1,
}

export default App;

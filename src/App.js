import logo from './logo.svg';
import profilepng from './profilepng.png'
import './App.css';
import  Profile  from './profile/profileComponent';
import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
    FullName:"",
    bio:"",
    imgSrc:"",
    profession:"",
    Show:false
  };
 
  this.handleShow=this.handleShow.bind(this)
  }
  handleShow=()=>{
    const {Show}=this.state;
    
    this.setState({Show :!Show})
}
componentDidMount() {
  const interval = setInterval(()=>{
 
},40000);

}


  render(){
  const alertMyinput=FullName=>alert(FullName)
  console.log(profilepng)
  const styleBtn={backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: 15,
        textAlign: "center",
        textDecoration: "none",
        fontSize: 30,}
  return (
    <div className="App">
      <header className="App-header">
        <button  style={styleBtn} onClick={this.handleShow}> Show My Profile</button>
      
{this.state.Show && <Profile 
       img={profilepng}
       FullName="Yasmine Mejri"
       bio="I'm a junior full stack devloper Learning React"
       profession="Junior Full Stack"
       alertMyinput={alertMyinput}/>}
      </header>
      
    </div>
  );
}
}
export default App;

import logo from './logo.svg';
import profilepng from './profilepng.png'
import './App.css';
import  Profile  from './profile/profileComponent';
function App() {
  const alertMyinput=FullName=>alert(FullName)
  console.log(profilepng)
  
  return (
    <div className="App">
      <header className="App-header">
       <Profile 
       img={profilepng}
       FullName="Yasmine Mejri"
       bio="I'm a junior full stack devloper Learning React"
       profession="Junior Full Stack"
       alertMyinput={alertMyinput}/>

      </header>
    </div>
  );
}

export default App;

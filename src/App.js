import './App.css';
import Profile from './profile/Profile';

function App() {

  const handleName = name => alert(`My name is: ${name}`);

  return (
    <div className="App">
     <Profile fullName = "Jradi Mohamed" bio = "Engineer" profession = "Full Stack JS Student" handleName = {handleName}>
      <img src ="./cat.jpg" alt="pho" style ={{borderRadius: '50px', width: '250px',height: '250px', marginTop: '10px', marginBottom: '20px'}}/>
     </Profile>
    </div>
  );
}

export default App;

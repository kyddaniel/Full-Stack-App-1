import logo from './logo.svg';
import './App.css';
import ChallengeList from './componenets/ChallengeList';
import axios from 'axios';

import { useEffect, useState } from 'react';

function App() {

  {/*const [challenges, setChallenge] = useState([
    {id:"1", month:"January", description:"First Challenge description"},
    {id:"2", month:"February", description:"Second Challenge description"}
  ]);*/}

  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenges(response.data);
    };
    fetchChallenges();
  }, [])

  return (
    <div className="App">
      <h1>Monthly Challenge</h1>
      <ChallengeList challenges={challenges}/>
      {/*<Greeting name="John" message="Welcome"/>
      <Greeting name="Alice" message="Hello"/>
      <Greeting name="Bob" message="Welcome"/>*/}
    </div>
  );
}

export default App;

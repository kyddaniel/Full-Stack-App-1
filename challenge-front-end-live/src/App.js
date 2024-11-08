import logo from './logo.svg';
import './App.css';
import ChallengeList from './componenets/ChallengeList';
import axios from 'axios';

import { useEffect, useState } from 'react';
import AddChallenge from './componenets/AddChallenge';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  {/*const [challenges, setChallenge] = useState([
    {id:"1", month:"January", description:"First Challenge description"},
    {id:"2", month:"February", description:"Second Challenge description"}
  ]);*/}

  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetchChallenges();
  }, []);

  const handleChallengeAdded = () => {
    fetchChallenges();
  }

  const fetchChallenges = async () => {
    try {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenges(response.data);
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="container mt-5">
      <h1 className='text-center mb-4'>Monthly Challenge</h1>
      <AddChallenge onChallengeAdded={handleChallengeAdded}/>
      <ChallengeList challenges={challenges}/>
      {/*<Greeting name="John" message="Welcome"/>
      <Greeting name="Alice" message="Hello"/>
      <Greeting name="Bob" message="Welcome"/>*/}
    </div>
  );
}

export default App;

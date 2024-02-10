import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function HomeScreen() {
  const [btnSize, setBtnSize] = useState(50);
  const navigate = useNavigate();
  const [response, setResponse] = useState('No');

  const responses = [
    "Are you sure?",
    "Really sure?",
    "Think again",
    "Last chance",
    "Surely not",
    "You might regret this",
    "You're missing out",
    "Give it another thought",
    "Are you absolutely sure?",
    "You're making a mistake",
    "You'll regret this",
    "Have a heart",
    "You're breaking my heart",
    "You're making me cry",
    "Don't be so cold",
    "Change of heart?",
    "Would you reconsider?",
    "You're making me sad",
  ]

  return (
    <div className='container'>
            <img src="https://pa1.aminoapps.com/7103/86dfb5de11d4543aa5d88e75a4873a6569e42e85r1-370-300_hq.gif" alt="Bear GIF" />
            <h1>Will you be my valentine?</h1>
            <div>
                <Button 
                    style={{height: btnSize, width: btnSize, fontSize: btnSize*.3, backgroundColor: '#14d402', border: 'none'}} 
                    variant="success"
                    onClick={() => {
                        navigate('/yes');
                    }}
                    >
                        Yes
                    </Button>
                <Button style={{height: 50, width: 'fit-content'}} variant="danger" onClick={() => {
                    setBtnSize((prev) => prev + 30);
                    setResponse(responses[Math.floor(Math.random() * responses.length)]);
                }}>{response}</Button>
            </div>
    </div>
  );
}

export default HomeScreen;
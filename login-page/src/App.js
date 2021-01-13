import React, {useState, userEffect} from 'react';
import './App.css';
import { Auth, Hub } from 'aws-amplify';

const initialFormState = {
  
}

function App() {
  const [formState, updateFormState] = useState(initialFormState);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

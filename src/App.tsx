import { useEffect, useState } from 'react';
import './App.css';
import OperationManager from './classes/operation-manager';
import _ from "lodash";
import GitHubButton from './components/github-button';
import Checkbox from './components/checkbox';

function App() {
  const [start, setStart] = useState(false);
  const [operation, setOperation] = useState<OperationManager>();
  const [choice, setChoice] = useState<boolean|null>(null);
  const [response, setResponse] = useState({
    success: false,
    text: ''
  });
  const [hard, setHard] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setOperation(new OperationManager().makeRandom(1, hard ? 5 : 1));
  }, [start]);
  
  function nextOperation() {
    setOperation(new OperationManager().makeRandom(1, hard ? 5 : 1));
    setResponse({
      success: false,
      text: ''
    });
    setChoice(null);
  }

  function evaluate() {
    if (choice === null) {
      return setResponse({
        success: false,
        text: "Please choose an option first!"
      });
    }

    const res = operation?.evaluate(choice); 
    setResponse({
      success: !!res,
      text: res ? "You are correct!" : "You are wrong!"
    });
    
    setStreak(prev => res ? prev + 1: 0);
  }

  if (!start) {
    return (
      <div className="flex flex-col justify-center items-center h-[90vh] gap-5">
        <h1 className="text-xl md:text-5xl">Javasript Type Coercion Test</h1>
        <button onClick={() => setStart(true)}>Start</button>
        <GitHubButton />
      </div>
    );
  }

  return (
      <div className="flex flex-col justify-center items-center h-[90vh] gap-5">
        <p>Is this correct?</p>
        <h1 className="text-xl md:text-5xl">{operation?.toString()}</h1>

        <div className="flex flex-row gap-1">
          <button 
            onClick={() => setChoice(true)}
            className={`${choice === true ? 'bg-green-500' : ''} px-3 py-2 rounded-md border-2 border-white`}
            >TRUE</button>

          <button
            onClick={() => setChoice(false)}
            className={`${choice === false ? 'bg-red-500' : ''} px-3 py-2 rounded-md border-2 border-white`}
          >FALSE</button>
        </div>

        {response.text.length ? (
          <p className={`${!response.success ? "text-red-500" : "text-green-500"}`}>{response.text}</p>
        ) : <></>}

        <div className="flex flex-row gap-1">

          <button className="px-3 py-2 rounded-md border-2 border-white" onClick={evaluate}>Submit</button>
          {response.text.length ? (
            <button className="px-3 py-2 rounded-md border-2 border-white" onClick={nextOperation}>Next</button>
          ) : <></>}
        </div>
        <GitHubButton />

        <div className="fixed p-2 top-5 right-5 dark:bg-white rounded-md border-2 border-black">
          <div className="flex flex-col gap-2 text-blue-500 items-start">
            <p>Streak: {streak}</p>
            <div className="flex flex-row gap-1">
              <p>Hard difficulty: </p>
              <Checkbox value={hard} onChange={(v) => setHard(v)} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

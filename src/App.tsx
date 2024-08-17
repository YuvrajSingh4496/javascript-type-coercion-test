import React, { useEffect, useState } from 'react';
import './App.css';
import { Operation } from './types/global';
import OperationFactory from './classes/factories/operation-factory';

function App() {
  const [start, setStart] = useState(false);
  const [operation, setOperation] = useState<Operation>();
  const [choice, setChoice] = useState<boolean|null>(null);
  const [response, setResponse] = useState({
    error: false,
    text: ''
  });

  useEffect(() => {
    setOperation(new OperationFactory().makeRandom());
  }, [start]);
  
  function nextOperation() {
    setOperation(new OperationFactory().makeRandom());
    setResponse({
      error: false,
      text: ''
    });
    setChoice(false);
  }

  function evaluate() {
    const res = operation?.evaluate(!!choice); 
    setResponse({
      error: !!res,
      text: res ? "You are correct!" : "You are wrong!"
    });
  }

  if (!start) {
    return (
      <div className="flex flex-col justify-center items-center h-[100vh] gap-5">
        <h1>Javasript Type Coercion Test</h1>
        <button onClick={() => setStart(true)}>Start</button>
      </div>
    );
  }

  return (

      <div className="flex flex-col justify-center items-center h-[100vh] gap-5">
        <p>Is this correct?</p>
        <h1 className="text-2xl md:text-5xl">{operation?.toString()}</h1>

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
          <p className={`${!response.error ? "text-red-500" : "text-green-500"}`}>{response.text}</p>
        ) : <></>}

        <div className="flex flex-row gap-1">

          <button className="px-3 py-2 rounded-md border-2 border-white" onClick={evaluate}>Submit</button>
          {response.text.length ? (
            <button className="px-3 py-2 rounded-md border-2 border-white" onClick={nextOperation}>Next</button>
          ) : <></>}
        </div>
      </div>
  );
}

export default App;

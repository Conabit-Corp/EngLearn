import React from 'react';
import { signIn } from './api';

function App() {
  console.log(signIn);

  return (
    <div className="App">
      APP
      <button onClick={signIn} >sign-in</button >
    </div>
  );
}

export default App;

import React from 'react';
import { Buffer } from 'buffer';

const App = () => {
  const value = 'código';

  const useBuffer = (data) => Buffer.from(data).toString('base64');
  const useBtoA = (data) => btoa(data);

  return (
    <div>
      <p>Base64 Test</p>
      <p>{'useBuffer = ' + useBuffer(value)}</p>
      <p>{'useBtoA = ' + useBtoA(value)}</p>
    </div>
  );
}

export default App;
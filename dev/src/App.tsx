import React from 'react';

import './App.css';

import { KakaoLogin } from 'react-social-login';

function App() {
  return (
    <div className="App">
        <KakaoLogin apiKey={''} success={()=> console.log('SUCCESS')} fail={() => console.log('FAIL')} />
    </div>
  );
}

export default App;

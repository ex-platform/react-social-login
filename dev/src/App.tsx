import React from 'react';

import './App.css';

import { GoogleLogin, KakaoLogin } from 'react-social-login';

function App() {
  return (
    <div className="App">
        <KakaoLogin apiKey={''} success={()=> console.log('SUCCESS')} fail={() => console.log('FAIL')} />
        <GoogleLogin clientId={''} success={()=> console.log('SUCCESS')} fail={() => console.log('FAIL')} />
    </div>
  );
}

export default App;

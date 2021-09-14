import React from 'react';

import './App.css';

import {
  GoogleLogin,
  NaverLogin,
  KakaoLogin,
} from '@ex-platform/react-social-login';

function App() {
  return (
    <div className="App">
      <KakaoLogin
        apiKey={'eeb3b1befc26f63a5bb54526fec61a8e'}
        success={() => console.log('SUCCESS')}
        fail={() => console.log('FAIL')}
      />
      <GoogleLogin
        clientId={'499740165980-8mhvjr9lbb5ee7rjipdjk22huoreuk7n.apps.googleusercontent.com'}
        success={() => console.log('SUCCESS')}
        fail={() => console.log('FAIL')}
      />
      <NaverLogin
        clientId={'gDSlwK4LOr_cjDAs4tLb'}
        success={() => console.log('SUCCESS')}
        fail={() => console.log('FAIL')}
        callbackUrl={'http://localhost:3000/login'}
      />
    </div>
  );
}

export default App;

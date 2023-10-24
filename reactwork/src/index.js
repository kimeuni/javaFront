import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';  //App.js 혹은 App.jsx인데 생락되어있다.
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <App />  //App에서 들어온 것만 렌더링한다... // 렌더링한 것을 'root'에 적용이 된다 (7번줄 확인)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

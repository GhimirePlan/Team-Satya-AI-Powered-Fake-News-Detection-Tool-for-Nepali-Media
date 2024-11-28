import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//assuring to not load extension for the domain website, other page then text/* and the chrome popup
if (window.location.protocol !== 'chrome-extension:' && document.contentType.startsWith("text/") && window.location.host !== 'localhost:8000') {
  const FakeNewsDetectorMainMenuButton=document.createElement('div')
  FakeNewsDetectorMainMenuButton.id='FakeNewsDetectorMainMenuButton'
  document.body.append(FakeNewsDetectorMainMenuButton)
  const root = ReactDOM.createRoot(FakeNewsDetectorMainMenuButton);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
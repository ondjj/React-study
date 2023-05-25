import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Libray';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';

const root = ReactDOM.createRoot(document.getElementById("root"));

// chapter 07
root.render(
  <React.StrictMode>
    <Accommodate/>
  </React.StrictMode>,
  document.getElementById('root')
);

// chapter 06
// root.render(<NotificationList />);

// chapter 05
// root.render(
//   <React.StrictMode>
//     <CommentList/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter 04
// setInterval(() => {
// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
//   );
// }, 1000);

// chap03
// root.render(
//   <React.StrictMode>
//     <Library/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

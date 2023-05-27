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
import ConfirmButton from './chapter_08/ComfirmButton';
import FunctionButton from './chapter_08/FunctionButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendenceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Blocks';

const root = ReactDOM.createRoot(document.getElementById("root"));

// chapter 15
root.render(
  <React.StrictMode>
   <Blocks/>
  </React.StrictMode>,

  document.getElementById('root')
)

// chapter 14
// root.render(
//   <React.StrictMode>
//    <DarkOrLight/>
//   </React.StrictMode>,

//   document.getElementById('root')
// )

// chapter 13
// root.render(
//   <React.StrictMode>
//    <ProfileCard/>
//   </React.StrictMode>,

//   document.getElementById('root')
// )

// chapter 12
// root.render(
//   <React.StrictMode>
//     <Calculator/>
//   </React.StrictMode>,

//   document.getElementById('root')
// )


// chapter 11
// root.render(
//   <React.StrictMode>
//     <SignUp/>
//   </React.StrictMode>,

//   document.getElementById('root')
// )

// chapter 10
// root.render(
//   <React.StrictMode>
//     <AttendanceBook/>
//   </React.StrictMode>,

//   document.getElementById('root')
// )

// chapter 09
// root.render(
//   <React.StrictMode>
//     <LandingPage/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// chapter 08
// root.render(
//   <React.StrictMode>
//     <ConfirmButton/>
//     <FunctionButton/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )


// chapter 07
// root.render(
//   <React.StrictMode>
//     <Accommodate/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

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

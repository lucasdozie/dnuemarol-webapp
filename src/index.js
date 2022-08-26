import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import Top from './components/landingPage/top/top';
import Coaching from './components/landingPage/coaching/coaching';
import Companies from './components/landingPage/companies/companies';
import Middle from './components/landingPage/middle/middle';
import Advice from './components/landingPage/advice/advice';
import Jobspage from './components/jobsPage/jobspage';
import Jobpage from './components/jobPage/jobpage';
import Header from './components/landingPage/header/header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="Top" element={<Top />} />
      <Route path="Middle" element={<Middle />} />
      <Route path="Companies" element={<Companies />} />
      <Route path="Advice" element={<Advice />} />
      <Route path="Coaching" element={<Coaching />} />
      <Route path="Jobspage" element={<Jobspage/>}/>
      <Route path="Jobpage" element={<Jobpage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
import AllJobs from './components/job/jobsPage/alljobs';
import Header from './components/landingPage/header/header';
import Footer from './components/landingPage/footer/footer';
import JobList from './components/job/jobsPage/jobLists/jobList';
import SignUp from './components/form/signup';
import SignIn from './components/form/signin';
import ApplyForm from './components/job/jobPage/apply/apply';
import JobPage from './components/job/jobPage/jobpage';
import ResForm from './components/job/jobPage/apply/applyform/resume';
import BioForm from './components/job/jobPage/apply/applyform/bioForm';
import Employer from './components/others/employer';
import LastSignup from './components/others/lastSignup';




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
      <Route path="AllJobs" element={<AllJobs/>}/>
      <Route path="JobPage" element={<JobPage/>}/>
      <Route path="JobList" element={<JobList/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="SignIn" element={<SignIn/>}/>
      <Route path="Apply" element={<ApplyForm/>}/>
      <Route path="ResForm" element={<ResForm/>}/>
      <Route path="BioForm" element={<BioForm/>}/>
      <Route path="Employer" element={<Employer/>}/>
      <Route path="LastSignup" element={<LastSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

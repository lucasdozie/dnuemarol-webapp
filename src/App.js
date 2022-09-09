
import './App.css';
import { BrowserRouter as Router, Routes,Route, } from "react-router-dom";
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
import Home from './components/home';


function App() {
  return (
    <Router>
    <Header/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/top" element={<Top />} />
    <Route path="/middle" element={<Middle />} />
    <Route path="/companies" element={<Companies />} />
    <Route path="/advice" element={<Advice />} />
    <Route path="/coaching" element={<Coaching />} />
    <Route path="/alljobs" element={<AllJobs/>}/>
    <Route path="/jobpage" element={<JobPage/>}/>
    <Route path="/joblist" element={<JobList/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/apply" element={<ApplyForm/>}/>
    <Route path="/resform" element={<ResForm/>}/>
    <Route path="/bioform" element={<BioForm/>}/>
    <Route path="/employer" element={<Employer/>}/>
    <Route path="/lastsignup" element={<LastSignup/>}/>
    <Route path='*' element={"Page not found"}/>
  </Routes>
  <Footer/>
  </Router>
    //
  );
}

export default App;

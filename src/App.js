import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Coaching from "./components/landingPage/coaching";
// import Companies from "./components/landingPage/companies";

// import Advice from "./components/landingPage/advice";

import Footer from "./components/landingPage/footer";

import SignUp from "./components/form/signup";
import SignIn from "./components/form/signin";

import Employer from "./components/others/employer";
import LastSignup from "./components/others/lastSignup";
import Home from "./components/home";
import AllJobs from "./components/landingPage/alljobs";
import JobList from "./components/job/Alljob/jobList";
import JobPage from "./components/job/jobPage/jobpage";
import ResForm from "./components/form/apply/applyform/resume";
import BioForm from "./components/form/apply/applyform/bioForm";
import ApplyForm from "./components/form/apply/apply";
import Dashboard from "./components/dashboard/dashbord";
import Profile from "./components/dashboard/profile/profile";
import AllJobList from "./components/job/allJobList";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/companies" element={<Companies />} /> */}
        {/* <Route path="/advice" element={<Advice />} /> */}
        {/* <Route path="/coaching" element={<Coaching />} /> */}
        <Route path="/alljobs" element={<AllJobs />} />
        <Route path="/jobpage" element={<JobPage />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/resform" element={<ResForm />} />
        <Route path="/bioform" element={<BioForm />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/lastsignup" element={<LastSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/alljoblist" element={<AllJobList />} />
      </Routes>
      <Footer />
    </Router>
    //
  );
}

export default App;

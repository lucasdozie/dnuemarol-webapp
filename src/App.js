
import './App.css';
// import JobPage from './components/jobPage/jobpage';
// import Writeups from './components/jobPage/left/writeup';
import Advice from './components/landingPage/advice/advice';
import Coaching from './components/landingPage/coaching/coaching';
import Companies from './components/landingPage/companies/companies';
import Middle from './components/landingPage/middle/middle';
import Top from './components/landingPage/top/top';

function App() {
  return (
    <div className="bg-general-pattern font-sans text-grayLight">
      <Top/>
      <Middle/>
      <Companies/>
      <Advice/>
      <Coaching/> 
    </div>
  );
}

export default App;

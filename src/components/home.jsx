import Advice from "./landingPage/advice/advice";
import Coaching from "./landingPage/coaching/coaching";
import Companies from "./landingPage/companies/companies";
import Middle from "./landingPage/middle/middle";
import Top from "./landingPage/top/top";

const Home = () => {
  return (
    <div>
      <div className="bg-general-pattern font-sans  text-blackTint">
        <Top />
        <Middle />
        <Companies />
        <Advice />
        <Coaching />
      </div>
    </div>
  );
};

export default Home;

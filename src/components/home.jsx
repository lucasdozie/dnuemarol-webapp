import Advice from "./landingPage/advice";
import Coaching from "./landingPage/coaching";
import Companies from "./landingPage/companies";
import Middle from "./landingPage/middle";
import Top from "./landingPage/top";

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

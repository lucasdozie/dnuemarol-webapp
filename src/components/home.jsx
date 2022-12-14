import Advice from "./landingPage/advice";
import Coaching from "./landingPage/coaching";
import Companies from "./landingPage/companies";
import Header from "./landingPage/header";
import Middle from "./landingPage/middle";
import Top from "./landingPage/top";

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="bg-general-pattern font-sans  text-blackTint lg">
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

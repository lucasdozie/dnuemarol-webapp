import Writeups from "./left/writeup";
import Right from "./right/right";

function JobPage() {
  return (
    <>
      <div className="gap-20 py-10 flex justify-evenly text-blackTint">
        <Writeups />
        <Right />
      </div>
    </>
  );
}

export default JobPage;
